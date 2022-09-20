import React from 'react'

// image
import ProductImage from '../../../../public/assets/images/home/tv.png'

function LandingProductItem() {
	return (
		<div className='col-12 col-md-6'>
			<figure>
				<div>
					<a href='#' title='Shop Televisions' className='img-link'>
						<img
							src={ProductImage.src}
							alt='featured product image'
							width='65%'
						/>
					</a>
				</div>
				<figcaption>
					<p className='title'>TELEVISIONS</p>
					<a href='#' className='btn btn-outline-dark shop-btn'>
						SHOP NOW
					</a>
				</figcaption>
			</figure>
		</div>
	)
}

export default LandingProductItem
