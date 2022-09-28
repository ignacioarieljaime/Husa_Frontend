import React from 'react'

import Image from './../../../../public/assets/images/smart-tv-android-descriptions.png'

function SmartInfoTextAndImageBox() {
	return (
		<section>
			<div className='p-0 m-4 m-md-9'>
				<div className='row description-blocks bg-black align-items-center'>
					<article className='introduction text-white col-12 col-md-6 order-2 order-md-1'>
						<h2>Android TV</h2>
						<p>
							Puts your favourite content front and center. Where it’s ready to
							watch or pick up where you left off. Stream more than 500,000
							shows, movies and apps, as well as watch live sports and news.
							<br />
							<br />
							With the Google Assistant built-in, you can turn on the lights,
							change the thermostat, add stuff to your grocery list, and control
							your TV with your voice. And with universal search, you can even
							get recommendations with Android TV.
						</p>
						<a href='#'>Shop All Android TVs</a>
					</article>
					<img
						src={Image.src}
						alt='tv platforms'
						className='p-0 col-12 col-md-6 order-1 order-md-2'
					/>
				</div>
			</div>
		</section>
	)
}

export default SmartInfoTextAndImageBox
