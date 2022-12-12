import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import CustomImage from 'components/common/CustomImage'
import { RouteHandler } from 'utils/routeHandler'

function ProductsItem({ data }) {
	let { products } = data
	const [productSelected, setProductSelected] = useState()
	const [productYear, setProductYear] = useState([])
	useEffect(() => {
		setProductSelected(products[0]?.product)
		extractYearOfCustomFiled()
	}, [])

	const extractYearOfCustomFiled = () => {
		let years = []
		products.forEach(element => {
			let year = element.product.customFields
				.find(item => item.type_name === 'Main Fields')
				?.custom_fields.find(item => item.name === 'Year')

			if (years.find(item => item.year === year?.value)) {
				let oldItem = years.find(item => item.year === year?.value)
				let newYear = {
					year: year?.value,
					products: [
						...oldItem.products,
						{ id: element.product.id, model: element.product.model }
					]
				}
				const index = years.indexOf(oldItem)
				if (index > -1) {
					years.splice(index, 1)
				}
				years = [...years, newYear]
			} else {
				years = [
					...years,
					{
						year: year?.value,
						products: [{ id: element.product.id, model: element.product.model }]
					}
				]
			}
		})
		setProductYear(years)
	}

	return (
		<>
			<div className='item bottom-border-sm col-12 col-md-6 col-xl-4 col-xxl-3'>
				{productSelected?.isNew === 1 && (
					<span className='new_product'>New</span>
				)}
				<Link href={'/'}>
					<CustomImage
						src={productSelected?.media?.url}
						wrapperHeight={'280px'}
						wrapperWidth='100%'
						alt={productSelected?.media?.caption}
					/>
				</Link>
				{data && (
					<h3 className='serie mt-5'>
						{
							products[0]?.product?.customFields
								.find(item => item.type_name === 'Top Titles')
								.custom_fields.find(item => item.name === 'h2 Title').value
						}
					</h3>
				)}
				<p className='title'>{productSelected?.name}</p>
				<div className='types-list'>
					{products.map((item, index) => (
						<Link
							href={
								RouteHandler(item.product.id)
									? RouteHandler(item.product.id)
									: '/'
							}>
							<a className='title'>{item.value}</a>
						</Link>
					))}
				</div>
				<ul className='models-list'>
					{productYear.map(
						(item, index) =>
							item?.year && (
								<li key={'year' + index}>
									<span className='title'>{item.year}</span>
									{item.products.map(
										(model, index) =>
											RouteHandler(model?.id) && (
												<Link
													key={'model' + index}
													href={RouteHandler(model?.id)}>
													<a className='model'>{model.model}</a>
												</Link>
											)
									)}
								</li>
							)
					)}
				</ul>
			</div>
		</>
	)
}

export default ProductsItem
