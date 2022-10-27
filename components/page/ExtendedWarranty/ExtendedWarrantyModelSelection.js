import React, { useState, useEffect } from 'react'
import ExtendedWarrantyProductsGrid from './ExtendedWarrantyProductsGrid'
import { useRouter } from 'next/router'
import axios from 'axios'
import { GetProductByFilterApi } from 'services/Product'
import ExtendedWarrantySearchProduct from './ExtendedWarrantySearchProduct'

const ExtendedWarrantyModelSelection = ({ data }) => {
	const [products, setProducts] = useState([])
	const [filter, setFilter] = useState([])
	const router = useRouter()
	const structure = {
		product: {
			value: 'Television'
		},
		description: {
			value: 'Find your television model to continue.'
		},
		category: {
			value: '3'
		}
	}

	useEffect(() => {
		filter.length === 0 ? getProducts() : getProductByFilter()
	}, [filter])

	const getProducts = async () => {
		setProducts('loading')
		try {
			let response = await axios.get(
				`https://impim.dev-api.hisenseportal.com/api/cms/getProducts/${structure.category.value}`
			)
			setProducts(response.data.data)
		} catch (error) {
			console.log(error)
		}
	}

	const getProductByFilter = async () => {
		setProducts('loading')

		try {
			let response = await GetProductByFilterApi(router, filter)
			setProducts(response.data.data)
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<section>
			<div className='extended-warranty-model-selection'>
				<ExtendedWarrantySearchProduct />
				<ExtendedWarrantyProductsGrid
					product={structure.product.value}
					description={structure.description.value}
					products={products}
				/>
			</div>
		</section>
	)
}

export default ExtendedWarrantyModelSelection
