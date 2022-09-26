import React from 'react'

// image
import Image from './../../../../public/assets/images/4k-uhd/roku-tv.jpg'

function UHDNewsItem() {
	return (
		<div class='col-12 col-md-4'>
			<article class='article text-start'>
				<img
					src={Image.src}
					alt='featured image'
					width='100%'
					class='img-box-shadow-hover'
				/>
				<div class='px-4 divider-border position-relative'>
					<h2 class='fs-2 mb-3 mt-13'>Start streaming with Roku TV</h2>
					<p class='fw-normal m-auto mb-4'>
						It’s easy to watch what you love with a Hisense 4K Roku TV. Search
						by title, actor or director to stream for free or at the lowest cost
						across thousands of channels. Great for cable, satellite, streaming
						and free TV with a HDTV antenna. You can even fire up your games
						console, all from the simple home screen.
					</p>
				</div>
			</article>
		</div>
	)
}

export default UHDNewsItem
