import Link from 'next/link'
import React from 'react'

function ULEDProductItem({ data }) {
	let { title, description, image, btn, link } = data
	return (
		<div className='col-12 col-lg-4 platform platform-uled'>
			<h2>{title?.value}</h2>
			<p className='text-black fs-2 fw-normal'>{description?.value}</p>
			<div className='py-9'>
				<img src={image?.src} alt={image?.alt} width='100%' height='100%' />
			</div>
			<div className='row'>
				<div className='col-12 col-sm-3 col-lg-6 col-xl-4 col-xxl-3 mb-5 mb-sm-0'>
					<Link href={link?.value}>
						<a  className='btn btn-light'>
							{link?.title}
						</a>
					</Link>
				</div>
				<div className='col-12 col-sm-6 col-lg-6 col-xl-8 col-xxl-9'>
					<button className='btn where-to-buy-bt btn-outline-light'>
						{btn?.title}
					</button>
				</div>
			</div>
		</div>
	)
}

export default ULEDProductItem
