import React from 'react'
import Link from 'next/link'

const ExtendedWarrantyProduct = ({
	data: { image, name, model, id, custom_field, Category },
	link
}) => {
	return (
		<Link href={`${link}?productId=${id}`}>
			<a className='text-decoration-none'>
				<div className='product-item-v2 h-100 px-5 py-8'>
					<div className='image'>
						<img
							src={image ? image : Category?.media?.url}
							alt={name}
							width='80%'
						/>
					</div>
					<div className='product-item-v2-content'>
						<div className='text-primary mb-4'>
							{custom_field &&
								custom_field.find(item => item.name === 'h2 Title')?.pivot
									?.custom_field_value}
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
