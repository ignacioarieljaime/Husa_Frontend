import Spinner from 'components/common/Spinner'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { GetFiltersApi } from 'services/Filter'
import ProductFilterAideItem from './ProductFilterAideItem'

function FilterAside({ filterHandler, filter }) {
	const checkboxWrapper = useRef()
	const [checkBoxCondition, setCheckBoxCondition] = useState(false)
	const [filterListCondition, setFilterListCondition] = useState(false)
	const [filterList, setFilterList] = useState()
	const router = useRouter()
	useEffect(() => {
		getFilters()
	}, [])

	const getFilters = async () => {
		try {
			let response = await GetFiltersApi(router)
			setFilterList(response.data.data)
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
				{ filter_name: _filter.title, filter_value: _filter.value }
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
								{filterList[0].filters.map(filter => (
									<div
										key={`filter-${filter.filter_name}-${filter.filter_type_id}`}>
										<h4>{filter.filter_name}</h4>
										<ul ref={checkboxWrapper} className='filter-list'>
											{filter.filter_values.map((item, index) => (
												<ProductFilterAideItem
													checkboxConditionRender={checkBoxCondition}
													filterController={filterController}
													data={item}
													key={`filter-${item.title}-${index}`}
												/>
											))}
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
