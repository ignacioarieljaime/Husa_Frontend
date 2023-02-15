import axios from 'axios'
import MagnifierIcon from 'components/icons/MagnifierIcon'
import React, { useState } from 'react'
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

const ChannelAdvisorLocally = ({ model }) => {
	const [distance, setDistance] = useState(5)
	const [search, setSearch] = useState()
	const [cities, setCities] = useState(null)
	const [data, setData] = useState(null)
	const [position, setPosition] = useState({
		lat: -3.745,
		lng: -38.523
	})

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
					<button onClick={getCity}>
						<MagnifierIcon stroke={'#000'} />
					</button>
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
			<ChannelAdvisorGoogleMap position={position} markers={data} />

			<div className='channel_advisor_locally_retailers mt-5'>
				{data === 'loading' ? (
					<div className='mt-5'>
						<Spinner />
					</div>
				) : Array.isArray(data) && data.length  ? (
					data.map((item, index) => (
						<div className='item'>
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
									<a href='#'>
										<CarIcon /> Directions
									</a>
								</div>
							</div>
							<div className='check_retailer'>
								<h5>Check Retailer</h5>
								<h6>Assume Availability</h6>
								<p>Assume Availability</p>

								<span className='clock'>
									<ClockIcon />
									open: {item.Hours.split(',')[0].slice(2, 7)}-
									{item.Hours.split(',')[0].slice(8, 13)}
								</span>
								<span className='clock'>
									<OpenNewIcon />
									Buy Online
								</span>
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
