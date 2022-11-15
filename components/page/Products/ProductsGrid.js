import axios from 'axios'
import Spinner from 'components/common/Spinner'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import {
	GetProductByFilterApi,
	GetProductsListApi,
	GetProductsListNewApi
} from 'services/Product'

// components
import FilterAside from './FilterAside'
import ProductsItem from './ProductsItem'

function ProductsGrid({
	data: {
		structure: { category }
	}
}) {
	const [filters, setFilters] = useState([])
	const [products, setProducts] = useState([])
	const [totalCount, setTotalCount] = useState()
	const [filterList, setFilterList] = useState()
	const [checkBoxCondition, setCheckBoxCondition] = useState(false)
	const router = useRouter()

	useEffect(() => {
		if (router.query.filter) {
			getProducts(JSON.parse(decodeURIComponent(router.query.filter)))
		} else {
			getProducts([])
		}
	}, [])

	const getProducts = async _filter => {
		setProducts('loading')
		if (_filter) {
			window.history.replaceState(
				null,
				null,
				`?filter=${encodeURIComponent(JSON.stringify(_filter))}`
			)
		}

		try {
			let response = await GetProductsListNewApi(
				router,
				category.value,
				_filter
			)
			setProducts(response.data.data)
			setTotalCount(response.data.total)
			getFilters(response.data.filterTypes)
		} catch (error) {
			console.log(error)
		}
	}

	const getFilters = async _filterList => {
		let filters = []
		try {
			_filterList.forEach(item => filters.push(...item.filters))
			setFilterList(filters)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='category-products'>
			<FilterAside
				filterRequest={getProducts}
				filterList={filterList}
				checkBoxCondition={checkBoxCondition}
				setCheckBoxCondition={setCheckBoxCondition}
				filters={filters}
				setFilters={setFilters}
			/>
			<div className='result_box__product_container'>
				<div className='result-box'>
					Total Results: {totalCount}{' '}
					<button
						onClick={() => {
							getProducts([])
							setFilters([])
							setCheckBoxCondition(!checkBoxCondition)
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
