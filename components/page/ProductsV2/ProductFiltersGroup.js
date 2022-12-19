import React, { useEffect, useRef, useState } from 'react'
import ProductFilterItemV2 from './ProductFilterItemV2'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useWindowSize } from 'hooks/useWindowSize'
import { useRect } from 'hooks/useRect'

const ProductFiltersGroup = ({
	filter,
	passedFilter,
	filterController,
	checkBoxCondition,
	index
}) => {
	const checkboxWrapper = useRef()
	const buttonGroup = useRef()
	const windowSize = useWindowSize()
	const [filterCollapse, setFilterCollapse] = useState(
		index <= 2 ? true : false
	)
	const [filterList, setFilterList] = useState([])
	const elRect = useRect(buttonGroup)

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
	}, [filter])

	useEffect(() => {
		console.log(elRect)
		console.log(elRect)
		checkboxWrapper.current.style.left = elRect.left - 12 + 'px'
		// if (windowSize[0] < 768 && prevEl) {
		// 	let prevLeft = prevEl.style.left.slice(0, -2)
		// 		? parseFloat(prevEl.style.left.slice(0, -2)) + 8
		// 		: 8
		// 	checkboxWrapper.current.style.left =
		// 		prevLeft + prevEl.getBoundingClientRect().width + 16 + 'px'
		// }
		checkboxWrapper.current.style.width = elRect.width + 'px'
	}, [windowSize, buttonGroup.current])

	if (filter.filter_values.length !== 0) {
		return (
			<div
				className={`filter-group ${filterCollapse ? 'open' : ''}`}
				ref={buttonGroup}>
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
									filterType={filter.content_type}
									key={`filter-${item.title}-${index}`}
								/>
							)
					)}
				</ul>
			</div>
		)
	}
}

export default ProductFiltersGroup
