import CustomImage from 'components/common/CustomImage'
import Link from 'next/link'
import React from 'react'

const FlightNightConfirmationDiscovery = () => {
	return (
		<section>
			<div className='flight_night_discovery'>
				<h3 className='title'>
					<p>More to Discover at Hisense</p>
				</h3>
				<div className='discover'>
					<div className='item'>
						<CustomImage
							wrapperWidth='100%'
							WrapperMaxWidth='125px'
							wrapperMaxHeight='auto'
							wrapperClass='mx-auto mt-4'
							src='https://files.hisense-usa.com/storage/hisense/asset/images/663efee21c8360.webp'
						/>
						<div className='mt-4'>
							<h4 className='item_title'>
								<p>Check Out All Hisense Laser TVs</p>
							</h4>
							<Link href='/'>
								<a className='n-btn outline-black d-block w-fit mx-auto p-4'>
									Explore Laser TVs
								</a>
							</Link>
						</div>
					</div>
					<div className='item'>
						<CustomImage
							WrapperMaxWidth='150px'
							wrapperWidth='100%'
							wrapperClass='mx-auto mt-4'
							src='https://files.hisense-usa.com/storage/hisense/asset/images/663efee21c8360.webp'
						/>
						<div className='mt-4'>
							<h4 className='item_title'>
								<p>With a lot</p>
								<p>more to love.</p>
							</h4>
							<Link href='/'>
								<a className='n-btn outline-black d-block w-fit mx-auto p-4'>
									Visit Hisense
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default FlightNightConfirmationDiscovery
