import axios from 'axios'
import MagnifierIcon from 'components/icons/MagnifierIcon'
import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { Country, State, City } from 'country-state-city'

const AnyReactComponent = ({ text }) => <div>{text}</div>

const ChannelAdvisorLocally = ({ model }) => {
	const [distance, setDistance] = useState(5)
	const [search, setSearch] = useState()
	const [position, setPosition] = useState({
		lat: 10.99835602,
		lng: 77.01502627
	})
	const getChannelAdvisorData = async () => {
		try {
			let response = await axios(
				`https://productcatalog.channeladvisor.com/api/v1/offers/models/${model}?maxLocationsPerRetailer=25&maxResultsPerRetailer=25&Latitude=31.9685988&Longitude=-99.9018131&distanceRange=${distance}&distanceUnit=Miles&IncludeVariations=true`,
				{
					headers: {
						Authorization:
							'api-key ' + process.env.NEXT_PUBLIC_CHANNEL_ADVISOR_TOKEN
					}
				}
			)
			setData(response.data)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<div className='channel_advisor_locally'>
				<div>
					<input
						onInput={e => setSearch(e.target.value)}
						placeholder='Type Location'
					/>
					<button onClick={getChannelAdvisorData}>
						<MagnifierIcon stroke={'#000'} />
					</button>
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
