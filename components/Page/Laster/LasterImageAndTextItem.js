import React from 'react'

// image
import Image from 'public/assets/images/laser-tv/big-screen.png'

function LasterImageAndTextItem() {
	return (
		<div className='col-12 col-md-6 mb-18 mb-md-0'>
			<article className='article text-start'>
				<img src={Image.src} alt='featured image' width='100%' />
				<div className='px-4 text-center'>
					<h2 className='fs-2 mb-3 mt-13'>100" to 120" Screen</h2>
					<p className='fw-normal m-auto mb-4'>
						Bigger is Better. Experience all your favorite content on a screen
						that's 4X bigger than a 55" TV. TV this big makes old favorites feel
						like something brand new.
					</p>
				</div>
			</article>
		</div>
	)
}

export default LasterImageAndTextItem
