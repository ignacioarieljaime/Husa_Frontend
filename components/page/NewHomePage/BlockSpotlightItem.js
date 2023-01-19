import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { RouteHandler } from 'utils/routeHandler'
import CustomImage from '../../common/CustomImage'

const BlockSpotlightItem = ({ data }) => {
	const [productLink, setProductLink] = useState()
	const [product, setProduct] = useState()
	const [productsItems, setProductsItems] = useState([])
	let seriesTitle = product?.customFields?.find(
		item => item.type_name === 'Top Titles'
	)

	useEffect(() => {
		if (Array.isArray(data.products)) {
			setProduct(data?.products[0]?.product)
			setProductLink(RouteHandler(data?.products[0]?.product?.id, 'product'))
		} else {
			setProduct(data?.products?.product)
			setProductLink(RouteHandler(data?.products?.product?.id, 'product'))
		}
		sortItemSize()
	}, [])

	const sortItemSize = () => {
		let _data = null
		if (Array.isArray(data.products)) {
			_data = data.products.map(item => {
				item.size = item.value && Number(item.value.replace('"', ''))
				return item
			})
			setProductsItems(_data.sort((first, second) => first.size - second.size))
		} else {
			setProductsItems(data)
		}
	}

	return (
		<div className='spotlight-releases-item'>
			<Link href={productLink ? productLink : '/'}>
				<a className='w-100'>
					<CustomImage
						src={product?.media?.url}
						className='image'
						wrapperHeight={'176px'}
					/>
				</a>
			</Link>
			<h5 className='description'>{product?.model}</h5>
			<h3 className='title'>
				{seriesTitle
					? seriesTitle?.custom_fields.find(item => item.name === 'h2 Title')
							.value
					: product?.customFields
							.find(item => item?.type_name?.includes(' filters'))
							?.custom_fields.find(item => item.name === 'Product Type')?.value}
			</h3>
			<ul className='d-flex flex-wrap justify-content-center list-unstyled gap-2'>
				{Array.isArray(productsItems) &&
					productsItems.map(item => item.value && <li>{item.value}</li>)}
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
