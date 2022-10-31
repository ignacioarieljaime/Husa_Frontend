import Spinner from 'components/common/Spinner'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { GetFiltersApi } from 'services/Filter'
import ProductFilterAideItem from './ProductFilterAideItem'

function FilterAside({
	filterList,
	filterRequest,
	checkBoxCondition,
	setCheckBoxCondition,
	filters,
	setFilters
}) {
	let router = useRouter()
	const checkboxWrapper = useRef()
	const [filterListCondition, setFilterListCondition] = useState(false)

	useEffect(() => {
		setFilters(router.query.filter ? JSON.parse(router.query.filter) : [])
	}, [])

	const filterController = (e, _filter) => {
		let _filtersBox = filters
		e.target.checked = true

		if (_filtersBox.find(item => item.filter_name === _filter.title)) {
			_filtersBox = filters.filter(item => item.filter_name !== _filter.title)
		} else {
			_filtersBox.push({
				filter_name: _filter.title,
				filter_value: _filter.filter_value
			})
		}
		setFilters(_filtersBox)
		filterRequest(_filtersBox)
	}

	const checkboxClearHandler = () => {
		setCheckBoxCondition(!checkBoxCondition)
		setFilters([])
		filterRequest([])
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
															checkCondition={filters}
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
