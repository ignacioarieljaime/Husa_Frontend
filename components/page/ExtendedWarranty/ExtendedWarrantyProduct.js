import React from 'react'
import Link from 'next/link'

const ExtendedWarrantyProduct = ({
	data: { media, name, model, id, custom_fields }
}) => {
	return (
		<Link href={`/ewp-wizard-plan-selector/${id}`}>
			<a className='text-decoration-none'>
				<div className='product-item-v2 h-100 px-5 py-8'>
					<div className='text-center mb-10'>
						<img src={media?.url} alt={name} width='80%' />
					</div>
					<div className='product-item-v2-content'>
						<div className='text-primary mb-4'>
							{custom_fields.find(item => item.name === 'h2 Title')?.value}
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
