import Link from 'next/link'
import React from 'react'

// image
import ProductImage from '../../../../public/assets/images/home/tv.png'

function LandingProductItem() {
	return (
		<div className='col-12 col-md-6'>
			<figure>
				<div>
					<Link href='/Products/tv' title='Shop Televisions'>
						<a className='img-link'>
							<img
								src={ProductImage.src}
								alt='featured product image'
								width='65%'
							/>
						</a>
					</Link>
				</div>
				<figcaption>
					<p className='title'>TELEVISIONS</p>
					<Link href='/Products/tv'>
						<a className='btn btn-outline-dark shop-btn'>SHOP NOW</a>
					</Link>
				</figcaption>
			</figure>
		</div>
	)
}

export default LandingProductItem
