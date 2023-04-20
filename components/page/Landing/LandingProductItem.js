import Link from 'next/link'
import React from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
// image
import ProductImage from 'public/assets/images/home/tv.png'

function LandingProductItem({ data: { image, link, title } }) {
	return (
		<div className='col-12 col-md-6'>
			<figure>
				<div>
					<Link
						target={link?.target ? link?.target : '_self'}
						href={link.value}
						title={image.alt}>
						<a
							target={link?.target ? link?.target : '_self'}
							className='img-link'>
							<img
								src={image.src}
								alt={image.alt}
								title={image.title}
								width='65%'
							/>
						</a>
					</Link>
				</div>
				<figcaption>
					<p className='title'>{title.value}</p>
					<Link
						target={link?.target ? link?.target : '_self'}
						href={link.value}>
						<a
							target={link?.target ? link?.target : '_self'}
							className='btn btn-outline-dark shop-btn'>
							{link.title}
							{link?.target === '_blank' && (
								<img
									style={{ marginLeft: '10px' }}
									src={OpenPageOnNewTab.src}
								/>
							)}
						</a>
					</Link>
				</figcaption>
			</figure>
		</div>
	)
}

export default LandingProductItem
