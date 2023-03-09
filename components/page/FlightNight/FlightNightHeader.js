import CustomImage from 'components/common/CustomImage'
import React from 'react'

const FlightNightHeader = ({ data }) => {
	let { structure } = data

	return (
		<header>
			<div className='flight_night_header'>
				<CustomImage
					src={structure?.logoImage?.src}
					alt={structure?.logoImage?.alt}
					wrapperWidth='75px'
					wrapperHeight='auto'
				/>
				<CustomImage
					src={structure?.campaignImage?.src}
					alt={structure?.campaignImage?.alt}
					wrapperWidth='100px'
					wrapperHeight='auto'
				/>
			</div>
		</header>
	)
}

export default FlightNightHeader
