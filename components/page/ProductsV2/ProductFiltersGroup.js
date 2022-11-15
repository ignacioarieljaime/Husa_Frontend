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
	useEffect(() => {
		if (
			passedFilter.length > 0 &&
			passedFilter.find(item => item.id === filter.content_record_id)
		) {
			setFilterCollapse(true)
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
				{filter.filter_values.map(
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
