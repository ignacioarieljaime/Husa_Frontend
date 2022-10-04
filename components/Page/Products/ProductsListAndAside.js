import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { GetProductByFilterApi } from 'services/Product'

// components
import FilterAside from './FilterAside'
import ProductsItem from './ProductsItem'

function ProductsListAndAside() {
	const [products, setProducts] = useState([])
	const router = useRouter()
	useEffect(() => {
		getProduct()
	}, [])

	const getProduct = async _filter => {
		try {
			let response = await GetProductByFilterApi(router, _filter)
			setProducts(response.data.data)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='all-tvs-category'>
			<FilterAside productFilterHandler={getProduct} />
			<div>
				<div className='result-box'>
					Total Results: 77 <a href='#'>View All</a>
				</div>
				<div className='products-container row align-items-stretch mx-0'>
					{products && products.map(item => <ProductsItem data={item} />)}
				</div>
			</div>
		</div>
	)
}

export default ProductsListAndAside
