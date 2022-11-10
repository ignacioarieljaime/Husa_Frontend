import Link from 'next/link'
import React from 'react'

const BlockSpotlightItem = ({ data }) => {
	let { product } = data.products
	let seriesTitle = product?.customFields?.find(
		item => item.type_name === 'Top Titles'
	)

	return (
		<div className='spotlight-releases-item'>
			<img
				src={product?.media?.url}
				style={{ maxHeight: '176px' }}
				className='image'
			/>
			<h5 className='description'>{seriesTitle && product?.model}</h5>
			<h3 className='title'>
				{seriesTitle
					? seriesTitle?.custom_fields.find(item => item.name === 'h2 Title')
							.value
					: product?.model}
			</h3>
			<ul className='d-flex flex-wrap justify-content-center list-unstyled gap-2'>
				{Array.isArray(data.products) &&
					data.products.map(item => item.value && <li>{item.value}</li>)}
			</ul>
			{/* <div className='models'></div> */}
			<Link href={'/'}>
				<a className='n-btn outline-black transparent'>
					Explore the{' '}
					{seriesTitle
						? seriesTitle?.custom_fields.find(item => item.name === 'h2 Title')
								.value
						: product?.model}
				</a>
			</Link>
		</div>
	)
}

export default BlockSpotlightItem
