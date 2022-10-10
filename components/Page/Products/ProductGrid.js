import axios from 'axios'
import Spinner from 'components/common/Spinner'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { GetProductByFilterApi } from 'services/Product'

// components
import FilterAside from './FilterAside'
import ProductsItem from './ProductsItem'

function ProductGrid() {
	const [products, setProducts] = useState([])
	const [filter, setFilter] = useState([])
	const router = useRouter()
	useEffect(() => {
		filter.length === 0 ? getProducts() : getProductByFilter()
	}, [filter])

	const getProducts = async () => {
		setProducts('loading')
		try {
			let response = await axios.get(
				'https://impim.dev-api.hisenseportal.com/api/cms/getProducts/4'
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
		<div className='all-tvs-category'>
			<FilterAside filterHandler={setFilter} filter={filter} />
			<div className='result_box__product_container'>
				<div className='result-box'>
					Total Results: 77 <a href='#'>View All</a>
				</div>

				{!Array.isArray(products) ? (
					<Spinner className={'mt-5'} size={80} />
				) : (
					<div className='products-container row align-items-stretch mx-0'>
						{products.map(item => (
							<ProductsItem data={item} />
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default ProductGrid
