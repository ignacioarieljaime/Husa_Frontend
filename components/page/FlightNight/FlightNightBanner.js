import CustomImage from 'components/common/CustomImage'
import React from 'react'

const FlightNightBanner = () => {
	return (
		<section>
			<div className='flight_night_banner'>
				<CustomImage
					wrapperWidth='100%'
					WrapperMaxWidth='230px'
					wrapperHeight='auto'
					// className='
					wrapperClass='mx-auto mb-4 image_container'
					src='https://assets.hisense-usa.com/assets/ContentBuilderImages/f5181ad032/XClass_HisenseWebsiteImage_1020212x1-1__ScaleMaxWidthWzMwNDhd.png-9zoj74.png'
				/>
				<h2 className='title'>
					<p>enter for a chance to win</p>
				</h2>
			</div>
		</section>
	)
}

export default FlightNightBanner
