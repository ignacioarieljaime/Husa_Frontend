import React from 'react'


// image
import Image from "./../../../public/assets/images/tv-page/ultra-show.jpg"

function ProductNewsItem() {
	return (
		<div className='col-12 col-md-6 col-lg-3 mb-18 mb-md-0'>
			<article className='article text-start'>
				<img
					src={Image.src}
					alt='featured image'
					width='100%'
				/>
				<div className='px-4'>
					<h4 className='fs-2 mb-3 mt-13'>Ultra Short Throw. Ultra Convenient.</h4>
					<p className='fw-normal m-auto mb-4'>
						Big screen entertainment in a convenient package. No need for
						ceiling mounts or in-wall cable runs, simply place the L5G on a TV
						stand just 11 inches from the wall and get a massive 100-inch
						projection – that’s 3x more screen than a 55-inch TV.
					</p>
				</div>
			</article>
		</div>
	)
}

export default ProductNewsItem
