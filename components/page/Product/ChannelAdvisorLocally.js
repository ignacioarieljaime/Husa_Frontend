import axios from 'axios'
import MagnifierIcon from 'components/icons/MagnifierIcon'
import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { Country, State, City } from 'country-state-city'
import Spinner from 'components/common/Spinner'

const AnyReactComponent = ({ text }) => <div>{text}</div>

const ChannelAdvisorLocally = ({ model }) => {
	const [distance, setDistance] = useState(5)
	const [search, setSearch] = useState()
	const [cities, setCities] = useState(null)
	const [position, setPosition] = useState({
		lat: 10.99835602,
		lng: 77.01502627
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
			setData(response.data)
			console.log(response)
		} catch (error) {
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
												{item.properties.address_line2}
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
			<div style={{ height: '150px', width: '100%' }}></div>
		</div>
	)
}

export default ChannelAdvisorLocally
