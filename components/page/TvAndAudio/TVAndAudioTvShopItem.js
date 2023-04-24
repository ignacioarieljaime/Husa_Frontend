import CustomImage from 'components/common/CustomImage'
import Link from 'next/link'
import React from 'react'

function TVAndAudioTvShopItem({ data: { image, title, link, description } }) {
	return (
		<div className='col-12 col-md-3 px-6 mb-10 mb-lg-0 tv-shop-box-item'>
			<figure>
				<div className='image_wrapper'>
					<CustomImage
						src={image?.src}
						alt={image?.alt}
						// width={'75%'}
						className='image mb-3 mx-auto'
					/>
				</div>
				<figcaption>
					<h4 className='text-white fs-5 fw-normal'>{title?.value}</h4>
					<p className='text-white fw-normal'>{description?.value}</p>
				</figcaption>
			</figure>
			{link?.value && (
				<Link target={link?.target ? link?.target : '_self'} href={link?.value}>
					<a target={link?.target ? link?.target : '_self'} className='mt-auto text-primary-new text-decoration-none text-uppercase fw-normal fs-8'>
						{link?.title}
						{link?.target === '_blank' && (
							<img style={{ marginLeft: '10px' }} src={OpenPageOnNewTab.src} />
						)}
					</a>
				</Link>
			)}
		</div>
	)
}

export default TVAndAudioTvShopItem
