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
		setFilters(router.query.filter ? JSON.parse(decodeURIComponent(router.query.filter)) : [])
	}, [])

	const filterController = (e, _filter) => {
		let _filtersBox = filters
		let filterWrapperExisted = _filtersBox.find(
			item => item.id === _filter.filterId
		)
		e.target.checked = true

		if (filterWrapperExisted) {
			if (filterWrapperExisted.values.indexOf(_filter.title) < 0) {
				let removeExitItemOfFilters = (_filtersBox = filters.filter(
					item => item.id !== _filter.filterId
				))
				_filtersBox = [
					...removeExitItemOfFilters,
					{
						id: filterWrapperExisted.id,
						values: [...filterWrapperExisted.values, _filter.title]
					}
				]
			} else {
				let removeExitItem = filterWrapperExisted.values.filter(
					item => item !== _filter.title
				)
				let removeExitItemOfFilters = (_filtersBox = filters.filter(
					item => item.id !== _filter.filterId
				))
				if (removeExitItem.length === 0) {
					_filtersBox = [...removeExitItemOfFilters]
				} else {
					_filtersBox = [
						...removeExitItemOfFilters,
						{
							id: filterWrapperExisted.id,
							values: removeExitItem
						}
					]
				}
			}
		} else {
			_filtersBox.push({
				id: _filter.filterId,
				values: [_filter.title]
			})
		}
		setFilters(_filtersBox)
		filterRequest(_filtersBox)

		// if (_filtersBox.find(item => item.filter_name === _filter.title)) {
		// _filtersBox = filters.filter(item => item.filter_name !== _filter.title)
		// } else {
		// 	_filtersBox.push({
		// 		filter_name: _filter.title,
		// 		filter_value: _filter.filter_value
		// 	})
		// }
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
															filterParentId={filter.content_record_id}
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
