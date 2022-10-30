import axios from 'axios'
import Spinner from 'components/common/Spinner'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { GetProductByFilterApi } from 'services/Product'

// components
import FilterAside from './FilterAside'
import ProductsItem from './ProductsItem'

function ProductsGrid({
	data: {
		structure: { category }
	}
}) {
	const [resetFilter, setResetFilter] = useState(false)
	const [products, setProducts] = useState([])
	const [totalCount, setTotalCount] = useState()
	const [filter, setFilter] = useState([])
	const router = useRouter()
	// useEffect(() => {
	// setFilter(JSON.parse(router.query.filter))
	// }, [])
	useEffect(() => {
		filter.length === 0 ? getProducts() : getProductByFilter(filter)
	}, [filter])

	const getProducts = async () => {
		setProducts('loading')
		try {
			let response = await axios.get(
				`https://impim.dev-api.hisenseportal.com/api/cms/getProducts/${category.value}`
			)
			setProducts(response.data.data)
			setTotalCount(response.data.total)
		} catch (error) {
			console.log(error)
		}
	}

	const getProductByFilter = async _filter => {
		setProducts('loading')
		window.history.replaceState(
			null,
			null,
			`?filter=${JSON.stringify(_filter)}`
		)

		try {
			let response = await GetProductByFilterApi(router, _filter)
			setProducts(response.data.data)
			setTotalCount(response.data.total)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='category-products'>
			<FilterAside
				filterHandler={setFilter}
				categoryId={category}
				filter={filter}
				resetFilter={resetFilter}
			/>
			<div className='result_box__product_container'>
				<div className='result-box'>
					Total Results: {totalCount}{' '}
					<button
						onClick={() => {
							getProducts()
							setResetFilter(!resetFilter)
						}}>
						View All
					</button>
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

export default ProductsGrid
