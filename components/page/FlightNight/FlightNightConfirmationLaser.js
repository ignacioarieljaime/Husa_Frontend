import CustomImage from 'components/common/CustomImage'
import Link from 'next/link'
import React from 'react'

const FlightNightConfirmationLaser = () => {
	return (
		<section>
			<div className='flight_night_laser'>
				<CustomImage
					WrapperMaxWidth='100px'
					wrapperClass='mx-auto mb-4'
					wrapperHeight='auto'
					wrapperWidth='100%'
					src='http://localhost:3000/_next/image?url=https%3A%2F%2Fwww.hisense-usa.com%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Ffiles.hisense-usa.com%252Fstorage%252Fhisense%252Fasset%252Fimages%252F663efed935688d.webp%26w%3D1920%26q%3D75&w=1920&q=75'
				/>
				<CustomImage
					WrapperMaxWidth='150px'
					wrapperClass='mx-auto mb-4'
					wrapperHeight='auto'
					wrapperWidth='100%'
					src='http://localhost:3000/_next/image?url=https%3A%2F%2Fwww.hisense-usa.com%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Ffiles.hisense-usa.com%252Fstorage%252Fhisense%252Fasset%252Fimages%252F663efed935688d.webp%26w%3D1920%26q%3D75&w=1920&q=75'
				/>
				<div className='text'>
					<p>
						Hisense Laser TV is a revolution in display technology, delivering a
						cinema-like picture with an ultra-wide color gamut at a massive
						scale
					</p>
				</div>
				<div className='image_wrapper'>
					<div className='image_container'>
						<CustomImage
							wrapperHeight='100%'
							wrapperWidth='100%'
							wrapperClass='image'
							src='https://files.hisense-usa.com/storage/hisense/asset/images/663ee7e2b2b7ff.webp'
						/>
					</div>
				</div>
				<Link href='/'>
					<a className='n-btn outline-white transparent d-block w-fit mx-auto mt-4 p-4'>
						Learn More
					</a>
				</Link>
			</div>
		</section>
	)
}

export default FlightNightConfirmationLaser
