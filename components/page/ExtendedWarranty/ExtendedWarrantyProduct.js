import React from 'react'
import Link from 'next/link'

const ExtendedWarrantyProduct = ({
	data: { media, name, model, id, series }
}) => {
	return (
		<Link href={`/extended-warranty/model-selection/product/${id}`}>
			<a className='text-decoration-none'>
				<div className='product-item-v2 h-100 px-5 py-8'>
					<div className='text-center mb-10'>
						<img src={media?.url} alt={name} width='80%' />
					</div>
					<div className='product-item-v2-content'>
						<div className='text-primary mb-4'>
							{series[0].name.split(' ')[0]}
						</div>
						<p className='mb-4'>{name}</p>
						<div className='text-primary'>Model: {model}</div>
					</div>
				</div>
			</a>
		</Link>
	)
}

export default ExtendedWarrantyProduct
