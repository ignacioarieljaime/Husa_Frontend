import React from 'react'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const ProductItemV2 = ({ data: { media, name, model, id } }) => {
	return (
		<div className='product-item-v2 px-5 py-8'>
			<div className='text-center mb-10'>
				<img src={media?.url} alt={name} width='80%' />
			</div>
			<div className='product-item-v2-content'>
				<div className='mb-3'>{model}</div>
				<p className='mb-7'>{name}</p>
				<div className='d-flex justify-content-evenly align-items-center mb-8'>
					{/* {types &&
						types.map((type, index) => (
							<Link href={link?.value} key={index}>
								<a className='n-btn outline-black'>{type?.value}</a>
							</Link>
						))} */}
				</div>
				<div className='d-flex flex-wrap justify-content-center align-items-center mb-10'>
					<Link href={`/product/${id}`}>
						<a className='n-btn outline-black m-2'>View Product</a>
					</Link>
					<Link href=''>
						<a className='n-btn primary-text m-2'>
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
					<Link href='/Product/2'>
						<a className='n-btn grey-text compare-btn ps-6 rounded-0'>
							Add To Compare
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ProductItemV2
