import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import { GetFiltersApi } from 'services/Filter'

function FilterAside({ productFilterHandler }) {
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

	const filterController = _filter => {
		let filter = []
		filter = [
			...filter,
			{ filter_name: _filter.title, filter_value: _filter.value }
		]

		productFilterHandler(filter)
	}
	return (
		<div className='category'>
			<button
				onClick={() => setFilterListCondition(!filterListCondition)}
				className='accordion-btn'>
				Filters
			</button>
			<aside className={`filters-container ${filterListCondition && 'open'}`}>
				{filterList &&
					filterList[0].filters.map(filter => (
						<div key={`filter-${filter.filter_name}-${filter.filter_type_id}`}>
							<h4>{filter.filter_name}</h4>
							<ul className='filter-list'>
								{filter.filter_values.map((item, index) => (
									<li key={`filter-${item.title}-${index}`}>
										<div onClick={() => filterController(item)}>
											<input name='filter' type='checkbox' />
											<label htmlFor='filter'>{item.title}</label>
										</div>
										<span>3</span>
									</li>
								))}
							</ul>
						</div>
					))}

				<span className='clear-fields'>
					<button className='btn'>Clear all Filters</button>
				</span>
			</aside>
		</div>
	)
}

export default FilterAside
