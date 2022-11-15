import Link from 'next/link'
import React from 'react'

function TVAndAudioTvShopItem({ data: { image, title, link, description } }) {
	return (
		<div className='col-12 col-md-3 px-6 mb-10 mb-lg-0 tv-shop-box-item'>
			<figure>
				<img
					// style={{ maxHeight: '130px' }}
					src={image?.src}
					alt={image?.alt}
					width={'75%'}
					className='mb-3'
				/>
				<figcaption>
					<p className='text-white fw-normal'>{title?.value}</p>
					<p className='text-white fw-normal'>{description?.value}</p>
				</figcaption>
			</figure>
			<Link href={link?.value}>
				<a className='mt-auto text-secondary text-hover-primary opacity-50 text-decoration-none text-uppercase fw-normal'>
					{link?.title}
				</a>
			</Link>
		</div>
	)
}

export default TVAndAudioTvShopItem
