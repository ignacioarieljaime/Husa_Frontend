import React, { useEffect, useRef, useState } from 'react'
import ProductFilterItemV2 from './ProductFilterItemV2'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProductFiltersGroup = ({
	filter,
	passedFilter,
	filterController,
	checkBoxCondition,
	index
}) => {
	const checkboxWrapper = useRef()
	const [filterCollapse, setFilterCollapse] = useState(
		index <= 2 ? true : false
	)
	const [filterList, setFilterList] = useState([])
	useEffect(() => {
		if (
			passedFilter.length > 0 &&
			passedFilter.find(item => item.id === filter.content_record_id)
		) {
			setFilterCollapse(true)
		}

		if (!Number.isNaN(Number(filter?.filter_values[1]?.title?.split('"')[0]))) {
			let changeToNumber = filter.filter_values.map(item => {
				item.number = item?.title ? Number(item?.title?.split('"')[0]) : null
				return item
			})

			setFilterList(changeToNumber.sort((a, b) => b.number - a.number))
		} else {
			setFilterList(filter.filter_values)
		}
	}, [])

	return (
		<div className={`filter-group ${filterCollapse ? 'open' : ''}`}>
			<button
				className='n-btn black-text filter-btn'
				onClick={() => setFilterCollapse(filterCollapse => !filterCollapse)}>
				{filter.name}{' '}
				<span className='ms-5'>
					<FontAwesomeIcon icon={faChevronDown} />
				</span>
			</button>
			<ul ref={checkboxWrapper} className='filter-list'>
				{filterList.map(
					(item, index) =>
						item.title && (
							<ProductFilterItemV2
								checkboxConditionRender={checkBoxCondition}
								filterController={filterController}
								data={item}
								passedFilter={passedFilter}
								filterParentId={filter.content_record_id}
								key={`filter-${item.title}-${index}`}
							/>
						)
				)}
			</ul>
		</div>
	)
}

export default ProductFiltersGroup
