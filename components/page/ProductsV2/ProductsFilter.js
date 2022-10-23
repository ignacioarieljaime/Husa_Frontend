import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { GetFiltersApi } from 'services/Filter'
import ProductFiltersGroup from './ProductFiltersGroup'

const ProductsFilter = ({ filterHandler, filter, categoryId: { value } }) => {
	const [filterList, setFilterList] = useState([])
	const [checkBoxCondition, setCheckBoxCondition] = useState(false)
	const router = useRouter()

	useEffect(() => {
		value && getFilters()
	}, [value])

	const getFilters = async () => {
		let filters = []
		try {
			let response = await GetFiltersApi(router, value)
			response.data.filterTypes.forEach(item => filters.push(...item.filters))
			setFilterList(filters)
		} catch (error) {
			console.log(error)
		}
	}

	const checkboxClearHandler = () => {
		setCheckBoxCondition(!checkBoxCondition)
		filterHandler([])
	}
	return (
		<aside>
			<div>
				<div>
					<button
						className='n-btn outline-primary mb-8'
						onClick={checkboxClearHandler}>
						Clear Filters
						{filter.length > 0 ? '(' + filter.length + ')' : ''}
					</button>
				</div>
				{filterList.map(filterItem => (
					<ProductFiltersGroup
						filter={filterItem}
						passedFilter={filter}
						filterHandler={filterHandler}
						checkBoxCondition={checkBoxCondition}
					/>
				))}
				<button className='n-btn outline-black'>Show More</button>
			</div>
		</aside>
	)
}

export default ProductsFilter
