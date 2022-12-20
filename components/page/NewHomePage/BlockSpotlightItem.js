import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { RouteHandler } from 'utils/routeHandler'
import CustomImage from '../../common/CustomImage'

const BlockSpotlightItem = ({ data }) => {
	const [productLink, setProductLink] = useState()
	const [product, setProduct] = useState()
	let seriesTitle = product?.customFields?.find(
		item => item.type_name === 'Top Titles'
	)

	useEffect(() => {
		if (Array.isArray(data.products)) {
			setProduct(data?.products[0]?.product)
			setProductLink(RouteHandler(data?.products[0]?.product?.id))
		} else {
			setProduct(data?.products?.product)
			setProductLink(RouteHandler(data?.products?.product?.id))
		}
	}, [])

	return (
		<div className='spotlight-releases-item'>
			<Link href={productLink ? productLink : '/'}>
				<a>
					<CustomImage
						src={product?.media?.url}
						className='image'
						wrapperHeight={'176px'}
					/>
				</a>
			</Link>
			<h5 className='description'>{seriesTitle && product?.model}</h5>
			<h3 className='title'>
				{seriesTitle
					? seriesTitle?.custom_fields.find(item => item.name === 'h2 Title')
							.value
					: product?.customFields.find(item =>
							item?.type_name?.includes(' filters')
					  )
					? product?.customFields
							.find(item => item?.type_name?.includes(' filters'))
							?.custom_fields.find(item => item.name === 'Product Type')?.value
					: product?.model}
			</h3>
			<ul className='d-flex flex-wrap justify-content-center list-unstyled gap-2'>
				{Array.isArray(data.products) &&
					data.products.map(item => item.value && <li>{item.value}</li>)}
			</ul>
			{/* <div className='models'></div> */}
			<Link href={productLink ? productLink : '/'}>
				<a className='n-btn outline-black transparent d-block w-fit mx-auto'>
					Explore{' '}
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
