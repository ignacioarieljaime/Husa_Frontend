import React from 'react'
import {
	Autocomplete,
	GoogleMap,
	Marker,
	useJsApiLoader
} from '@react-google-maps/api'
import Spinner from 'components/common/Spinner'

const containerStyle = {
	width: '100%',
	height: '150px'
}

function ChannelAdvisorGoogleMap({ position, markers, zoom }) {
	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: 'AIzaSyBAlmy2iZ1MPPxiLMlraJM86JX0nsmmltg',
		libraries: ['places']
	})

	return isLoaded ? (
		<>
			<GoogleMap mapContainerStyle={containerStyle} center={position} zoom={zoom}>
				{/* Child components, such as markers, info windows, etc. */}
				{Array.isArray(markers) &&
					markers?.map(item => (
						<Marker position={{ lat: item.Latitude, lng: item.Longitude }} />
					))}
			</GoogleMap>
		</>
	) : (
		<Spinner />
	)
}

export default React.memo(ChannelAdvisorGoogleMap)
