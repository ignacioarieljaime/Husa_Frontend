import React from 'react'

// image
import Dessert from './../../../../public/assets/images/blog/desserts.png'
import Cake from './../../../../public/assets/images/blog/cake.png'

function BlogTwoImage() {
	return (
		<section>
			<div className='mb-20'>
				<div className='row double-banner mx-0'>
					<div className='col-12 col-md-6 px-0 header-secondary'>
						<img
							src={Dessert.src}
							alt='featured image'
							width='100%'
							height='100%'
						/>
					</div>
					<div className='col-12 col-md-6 px-0 header-secondary'>
						<img
							src={Cake.src}
							alt='featured image'
							width='100%'
							height='100%'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BlogTwoImage
