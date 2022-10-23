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
		<aside className='mobile-filter-line'>
			<div>
				<div className='d-flex justify-content-between align-items-center mb-4 mb-md-0'>
					<div className='fw-normal fs-8 d-block d-md-none'>Filter</div>
					<button
						className='n-btn outline-primary mb-md-8'
						onClick={checkboxClearHandler}>
						Clear Filters
						{filter.length > 0 ? '(' + filter.length + ')' : ''}
					</button>
				</div>
				<div className='filter-group-container pb-4 pb-md-0'>
					{filterList.map(filterItem => (
						<ProductFiltersGroup
							filter={filterItem}
							passedFilter={filter}
							filterHandler={filterHandler}
							checkBoxCondition={checkBoxCondition}
						/>
					))}
					<button className='n-btn outline-black text-nowrap mx-2'>
						Show More
					</button>
				</div>
			</div>
		</aside>
	)
}

export default ProductsFilter
