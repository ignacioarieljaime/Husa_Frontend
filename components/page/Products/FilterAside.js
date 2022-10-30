import Spinner from 'components/common/Spinner'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { GetFiltersApi } from 'services/Filter'
import ProductFilterAideItem from './ProductFilterAideItem'

function FilterAside({
	filterHandler,
	filter,
	categoryId: { value },
	resetFilter
}) {
	const checkboxWrapper = useRef()
	const [checkBoxCondition, setCheckBoxCondition] = useState(false)
	const [filterListCondition, setFilterListCondition] = useState(false)
	const [filterList, setFilterList] = useState()
	const router = useRouter()
	useEffect(() => {
		value && getFilters()
	}, [value])
	useEffect(() => {
		setCheckBoxCondition(!checkBoxCondition)
		filterHandler([])
	}, [resetFilter])

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

	const filterController = (e, _filter) => {
		e.target.checked = true
		if (filter.find(item => item.filter_name === _filter.title)) {
			filterHandler(filter.filter(item => item.filter_name !== _filter.title))
		} else {
			filterHandler(state => [
				...state,
				{ filter_name: _filter.title, filter_value: _filter.filter_value }
			])
		}
	}

	const checkboxClearHandler = () => {
		setCheckBoxCondition(!checkBoxCondition)
		filterHandler([])
	}

	return (
		<div className='category'>
			<button
				onClick={() => setFilterListCondition(!filterListCondition)}
				className='accordion-btn'>
				Filters
			</button>
			<aside className={`filters-container ${filterListCondition && 'open'}`}>
				{!Array.isArray(filterList) ? (
					<Spinner />
				) : (
					<>
						{
							<>
								{filterList.map(filter => (
									<div key={`filter-${filter.name}-${filter.id}`}>
										<h4>{String(filter.name).toUpperCase()}</h4>

										<ul ref={checkboxWrapper} className='filter-list'>
											{filter.filter_values.map(
												(item, index) =>
													item.title && (
														<ProductFilterAideItem
															checkboxConditionRender={checkBoxCondition}
															filterController={filterController}
															data={item}
															key={`filter-${item.title}-${index}`}
														/>
													)
											)}
										</ul>
									</div>
								))}
								<span className='clear-fields'>
									<button onClick={checkboxClearHandler} className='btn'>
										Clear all Filters
									</button>
								</span>
							</>
						}
					</>
				)}
			</aside>
		</div>
	)
}

export default React.memo(FilterAside)
