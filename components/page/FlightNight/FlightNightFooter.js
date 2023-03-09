import CustomImage from 'components/common/CustomImage'
import React from 'react'

const FlightNightFooter = () => {
	return (
		<footer>
			<div className='bg-black py-4'>
				<CustomImage
					wrapperWidth='100%'
					WrapperMaxWidth='100px'
					wrapperHeight='auto'
					wrapperClass='mx-auto'
					src='http://localhost:3000/_next/image?url=https%3A%2F%2Fwww.hisense-usa.com%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Ffiles.hisense-usa.com%252Fstorage%252Fhisense%252Fasset%252Fimages%252F663efed935688d.webp%26w%3D1920%26q%3D75&w=1920&q=75'
				/>
			</div>
		</footer>
	)
}

export default FlightNightFooter
