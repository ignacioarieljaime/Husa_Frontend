import CustomImage from 'components/common/CustomImage'
import React from 'react'

const FlightNightConfirmationSocialMedia = () => {
	return (
		<section>
			<div className='flight_night_social_media'>
				<h2 className='title'>
					<p>But wait...</p>
					<p>there’s more!</p>
				</h2>
				<div className='line top'></div>
				<div>
					<div className='subtitle'>
						<p>For a chance to win a brand new Laser TV: </p>
					</div>
					<div className='row mx-0 justify-content-center align-items-start'>
						<div className='col-12 col-sm-6 text-center mb-8'>
							<button className='n-btn primary p-4'>
								Follow Us
								<CustomImage
									wrapperClass='d-inline-block'
									WrapperMaxWidth='20px'
									WrapperMaxHeight='20px'
									src='http://localhost:3000/_next/image?url=https%3A%2F%2Fwww.hisense-usa.com%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fassets.hisense-usa.com%252Fassets%252FGalleryImages%252FProduct%252F293%252F47b5799d40%252Froku__ScaleMaxHeightWzc1MF0.png%26w%3D1920%26q%3D75&w=1920&q=75'
								/>
							</button>
							<div className='caption'>
								<p>Follow Hisense on Instagram @Hisense_USA</p>
							</div>
						</div>
						<div className='col-12 col-sm-6 text-center mb-8'>
							<CustomImage
								wrapperClass='mx-auto'
								WrapperMaxWidth='75px'
								src='https://files.hisense-usa.com/storage/hisense/asset/images/663efee21c8360.webp'
							/>
							<div className='caption'>
								<p>
									Like and comment on any post with the hashtag
									#HisenseFlightNight
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='line bottom'></div>
				<div className='text'>
					<p>It’s that easy!</p>
				</div>
			</div>
		</section>
	)
}

export default FlightNightConfirmationSocialMedia
