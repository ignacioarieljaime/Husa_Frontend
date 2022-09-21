import Link from 'next/link'
import React from 'react'

// image
import ProductImage from './../../../../public/assets/images/hisense-u8-uled-4k/related-product-item-1.png'

function ProductsItem() {
	return (
		<div className='item bottom-border-sm col-12 col-md-6 col-xl-4 col-xxl-3'>
			<div>
				<div className='d-flex justify-content-between align-items-center mb-20 w-100'>
					<span className='class'>100 Class</span>
					<span className='code'>100L5G-DLT100B</span>
				</div>
				<img src={ProductImage.src} alt='featured image' width='100%' />
				<h3>Laser Series</h3>
				<p>4K UHD Hisense Smart Laser Cinema/Laser TV with HDR</p>
			</div>
			<div className='w-100'>
				<div className='d-flex justify-content-center align-items-center flex-wrap w-100'>
					<button className='buy-btn' disabled>
						Coming Soon
					</button>
					<Link href='/Product/2'>
						<a className='view-product-btn'>View Product</a>
					</Link>
				</div>
				<Link href='/Product/2'>
					<a className='compare-btn'>Add To Compare</a>
				</Link>
			</div>
		</div>
	)
}

export default ProductsItem
