import axios from 'axios'
import MagnifierIcon from 'components/icons/MagnifierIcon'
import React, { useEffect, useState } from 'react'
import Spinner from 'components/common/Spinner'
import PinIcon from 'components/icons/PinIcon'
import PhoneIcon from 'components/icons/PhoneIcon'
import CarIcon from 'components/icons/CarIcon'
import ClockIcon from 'components/icons/ClockIcon'
import OpenNewIcon from 'components/icons/OpenNewIcon'
import dynamic from 'next/dynamic'
const ChannelAdvisorGoogleMap = dynamic(
	() => import('./ChannelAdvisorGoogleMap'),
	{
		loading: () => 'Loading...',
		ssr: false
	}
)

const ChannelAdvisorLocally = ({ model, productData }) => {
	const [distance, setDistance] = useState(5)
	const [search, setSearch] = useState()
	const [cities, setCities] = useState(null)
	const [data, setData] = useState(null)
	const [onlineRetailer, setOnlineRetailer] = useState([])
	const [position, setPosition] = useState({
		lat: -3.745,
		lng: -38.523
	})
	const [zoom, setZoom] = useState(9)

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			if (search) getCity()
		}, 500)

		return () => clearTimeout(delayDebounceFn)
	}, [search, distance])

	const getCity = async () => {
		setCities('loading')
		try {
			let response = await axios.get(
				`https://api.geoapify.com/v1/geocode/autocomplete?text=${search}&apiKey=2d56f1353716487cadf14ab2fc8b4bba`
			)
			setCities(response?.data?.features)
		} catch (error) {
			setCities(null)
			console.log(error)
		}
	}
	const getChannelAdvisorData = async data => {
		setData('loading')
		setZoom(9)
		setPosition({
			lat: data.lat,
			lng: data.lon
		})
		setCities(null)
		try {
			let response = await axios.get(
				`https://productcatalog.channeladvisor.com/api/v1/offers/models/${model}?maxLocationsPerRetailer=25&maxResultsPerRetailer=25&Latitude=${data?.lat}&Longitude=${data?.lon}&distanceRange=${distance}&distanceUnit=Miles&IncludeVariations=true`,
				{
					headers: {
						Authorization:
							'api-key ' + process.env.NEXT_PUBLIC_CHANNEL_ADVISOR_TOKEN
					}
				}
			)
			setData(response.data.LocalRetailerStores)
			setOnlineRetailer(response.data.OnlineRetailers)
		} catch (error) {
			setData([])
			console.log(error)
		}
	}

	return (
		<div>
			<div className='channel_advisor_locally'>
				<div>
					<input
						onInput={e => {
							setSearch(e.target.value)
							if (cities) {
								setCities(null)
							}
						}}
						placeholder='Type Location'
					/>

					<span>
						<MagnifierIcon stroke={'#000'} />
					</span>
					{cities && (
						<div>
							{cities === 'loading' ? (
								<Spinner />
							) : (
								<ul>
									{cities.map(item => (
										<li>
											<button
												onClick={() => getChannelAdvisorData(item?.properties)}>
												{item.properties.address_line1},
												{item.properties.country}
											</button>
										</li>
									))}
								</ul>
							)}
						</div>
					)}
				</div>
				<select onChange={e => setDistance(e.target.value)}>
					<option defaultChecked value={5}>
						5 Miles
					</option>
					<option value={10}>10 Miles</option>
					<option value={20}>20 Miles</option>
					<option value={50}>50 Miles</option>
				</select>
			</div>
			<ChannelAdvisorGoogleMap position={position} zoom={zoom} markers={data} />

			<div className='channel_advisor_locally_retailers mt-5'>
				{data === 'loading' ? (
					<div className='mt-5'>
						<Spinner />
					</div>
				) : Array.isArray(data) && data.length ? (
					data.map((item, index) => (
						<div
							onClick={() => {
								setPosition({
									lat: item.Latitude,
									lng: item.Longitude
								})
								setZoom(15)
							}}
							className='item'>
							<div className='pin_detail'>
								<div className='pin'>
									<PinIcon />
									<span>{index + 1}</span>
									{item?.DistanceFromUserLocation} mi
								</div>
								<div className='detail'>
									<img src={item.RetailerLogoUrl} />
									<div>
										<p>
											{item.StreetLine1}, {item.City}
										</p>{' '}
										<p>
											{item.CountryCode},{item.PostalCode}
										</p>
									</div>
									<span>
										<PhoneIcon />
										{item.Phone}
									</span>
									<a
										target={'_blank'}
										href={`https://www.google.com/maps/search/?api=1&query=${item.Latitude},${item.Longitude}`}>
										<CarIcon /> Directions
									</a>
								</div>
							</div>
							<div className='check_retailer'>
								<h5>Check Retailer</h5>
								<h6>Assume Availability</h6>
								{item.Availability === 'AssumeAvailability' ? (
									<p>Assume Availability</p>
								) : (
									<p className='error'>Out of Stock</p>
								)}

								<span className='clock'>
									<ClockIcon />
									open: {item.Hours.split(',')[0].slice(2, 7)}-
									{item.Hours.split(',')[0].slice(8, 13)}
								</span>
								{onlineRetailer.find(
									retailer => retailer.DisplayName === item.RetailerName
								)?.ProductLink && (
									<a
										onClick={() =>
											window.dataLayer.push({
												event: 'view_product',
												eventData: {
													retailer: item?.RetailerName,
													productType: productData?.category?.name,
													productTitle: productData?.name,
													modal: productData?.model,
													size: productData?.customFields?.find(
														item => item.type_name === 'TV filters'
													)
														? productData?.customFields
																?.find(item => item.type_name === 'TV filters')
																?.custom_fields.find(
																	item => item.name === 'Size class'
																)?.value
														: productData?.custom_fields?.find(
																item => item.title === 'Size class'
														  )
														? productData?.custom_fields?.find(
																item => item.title === 'Size class'
														  )?.value
														: ''
												}
											})
										}
										href={
											onlineRetailer.find(
												retailer => retailer.DisplayName === item.RetailerName
											)?.ProductLink
										}
										className={`clock`}>
										<OpenNewIcon />
										Buy Online
									</a>
								)}
							</div>
						</div>
					))
				) : Array.isArray(data) && data.length === 0 ? (
					'empty'
				) : (
					'please select a city'
				)}
			</div>
		</div>
	)
}

export default ChannelAdvisorLocally
