import React, { useRef, useState } from 'react'
import ProductFilterItemV2 from './ProductFilterItemV2'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProductFiltersGroup = ({
	filter,
	passedFilter,
	checkBoxCondition,
	filterHandler
}) => {
	const checkboxWrapper = useRef()
	const [filterListCondition, setFilterListCondition] = useState(false)
	const [filterCollapse, setFilterCollapse] = useState(false)
	const filterController = (e, _filter) => {
		e.target.checked = true
		if (passedFilter.find(item => item.filter_name === _filter.title)) {
			filterHandler(
				passedFilter.filter(item => item.filter_name !== _filter.title)
			)
		} else {
			filterHandler(state => [
				...state,
				{ filter_name: _filter.title, filter_value: _filter.filter_value }
			])
		}
	}

	return (
		<div
			key={`filter-${filter.name}-${filter.id} `}
			className={`filter-group ${filterCollapse ? 'open' : ''}`}>
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
								key={`filter-${item.title}-${index}`}
							/>
						)
				)}
			</ul>
		</div>
	)
}

export default ProductFiltersGroup
