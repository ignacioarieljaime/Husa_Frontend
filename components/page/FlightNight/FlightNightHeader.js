import CustomImage from 'components/common/CustomImage'
import React from 'react'

const FlightNightHeader = () => {
	return (
		<header>
			<div className='flight_night_header'>
				<CustomImage
					src='https://www.hisense-usa.com/_next/image?url=https%3A%2F%2Ffiles.hisense-usa.com%2Fstorage%2Fhisense%2Fasset%2Fimages%2F663efed935688d.webp&w=1920&q=75'
					alt='image'
					wrapperWidth='100px'
					wrapperHeight='auto'
				/>
				<CustomImage
					src='https://files.hisense-usa.com/storage/hisense/asset/images/663ee7f53a0fc6.webp'
					alt='image'
					wrapperWidth='75px'
					wrapperHeight='auto'
				/>
			</div>
		</header>
	)
}

export default FlightNightHeader
