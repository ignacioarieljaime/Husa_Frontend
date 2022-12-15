import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { RouteHandler } from 'utils/routeHandler'
import CustomImage from 'components/common/CustomImage'

const ProductPackagesSliderItem = ({ data }) => {
	let { products } = data
	console.log(products)

	const [productSelected, setProductSelected] = useState()
	const [productYear, setProductYear] = useState([])

	useEffect(() => {
		setProductSelected(products[0]?.product)
		extractYearOfCustomFiled()
	}, [])

	const extractYearOfCustomFiled = () => {
		let years = []
		// Array.isArray(products) &&
		// 	products.forEach(element => {
		// 		let year = element.product.customFields
		// 			.find(item => item.type_name === 'Main Fields')
		// 			?.custom_fields.find(item => item.name === 'Year')

		// 		if (years.find(item => item.year === year?.value)) {
		// 			let oldItem = years.find(item => item.year === year?.value)
		// 			let newYear = {
		// 				year: year?.value,
		// 				products: [
		// 					...oldItem.products,
		// 					{ id: element.product.id, model: element.product.model }
		// 				]
		// 			}
		// 			const index = years.indexOf(oldItem)
		// 			if (index > -1) {
		// 				years.splice(index, 1)
		// 			}
		// 			years = [...years, newYear]
		// 		} else {
		// 			years = [
		// 				...years,
		// 				{
		// 					year: year?.value,
		// 					products: [
		// 						{ id: element.product.id, model: element.product.model }
		// 					]
		// 				}
		// 			]
		// 		}
		// 	})
		setProductYear(years)
	}

	return (
		<div>
			<CustomImage src={data?.image?.src} alt={data?.image?.alt} />
			<h5>{data?.title?.value}</h5>
			<Link href={data?.link?.value}>
				<a>Learn more</a>
			</Link>
		</div>
	)
}

export default ProductPackagesSliderItem
