import React from 'react'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const ProductItemV2 = ({ image, title, description, types, link }) => {
	return (
		<div className='product-item-v2 px-5 py-8'>
			<div className='text-center'>
				<img src={image.src} alt={image.alt} width='80%' />
			</div>
			<div className='product-item-v2-content'>
				<div className='mb-3'>{title}</div>
				<p className='mb-7'>{description}</p>
				<div className='d-flex justify-content-evenly align-items-center mb-8'>
					{types.map((type, index) => (
						<Link href={link.value} key={index}>
							<a className='n-btn outline-black'>{type.value}</a>
						</Link>
					))}
				</div>
				<div className='d-flex justify-content-between align-items-center mb-10'>
					<Link href={link.value}>
						<a className='n-btn outline-black'>{link.title}</a>
					</Link>
					<Link href={link.value}>
						<a className='n-btn primary-text'>
							Where to Buy
							<span>
								<FontAwesomeIcon
									icon={faChevronRight}
									size={'sm'}
									className='ms-2'
								/>
							</span>
						</a>
					</Link>
				</div>
				<div className='text-center'>
					<button className='n-btn grey-text '>
						<span></span>Add To Compare
					</button>
				</div>
			</div>
		</div>
	)
}

export default ProductItemV2
