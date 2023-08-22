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
	index,
	setResponsiveCollapseStatus,
	responsiveCollapseStatus,
	total,
	category,
	showProductFilterCount
}) => {
	const checkboxWrapper = useRef()
	const buttonGroup = useRef()
	const [widthSize] = useWindowSize()
	const [filterCollapse, setFilterCollapse] = useState(false)
	const [filterList, setFilterList] = useState([])
	const [sortedFilterList, setSortedFilterList] = useState([])
	const elRect = useRect(buttonGroup)
	useEffect(() => {
		// if (
		// 	passedFilter.length > 0 &&
		// 	passedFilter.find(item => item.id === filter.content_record_id)
		// ) {
		// 	setFilterCollapse(true)
		// }

		if (
			filter?.name === 'CHANNELS' &&
			filter?.filter_values[1]?.title.includes(' CH')
		) {
			let changeToNumber = filter.filter_values.map(item => {
				item.number = item?.title ? Number(item?.title?.split(' ')[0]) : null
				return item
			})
			setFilterList(changeToNumber.sort((a, b) => b.number - a.number))
		} else if (
			!Number.isNaN(Number(filter?.filter_values[1]?.title?.split('"')[0]))
		) {
			let changeToNumber = filter.filter_values.map(item => {
				item.number = item?.title ? Number(item?.title?.split('"')[0]) : null
				return item
			})

			setFilterList(changeToNumber.sort((a, b) => b.number - a.number))
		} else {
			setFilterList(filter.filter_values)
		}
	}, [filter, widthSize])

	useEffect(() => {
		if (category?.value === 5) {
			if (filterList && filterList.length) {
				let temp = filterList
				temp.sort((a, b) => {
					if (a.title && b.title)
						return a.title.toLowerCase().localeCompare(b.title.toLowerCase())
					else if (a.title && b.title)
						return a.filter_value
							.toLowerCase()
							.localeCompare(b.filter_value.toLowerCase())
					else return 0
				})
				setSortedFilterList(temp)
			}
		} else setSortedFilterList(filterList)
	}, [filterList])

	useEffect(() => {
		if (widthSize < 768) setFilterCollapse(false)
		else setFilterCollapse(index <= 2 ? true : false)
	}, [widthSize])

	useEffect(() => {
		if (widthSize < 768) setFilterCollapse(false)
	}, [responsiveCollapseStatus])

	// useEffect(() => {
	// 	checkboxWrapper.current.style.left = elRect.left - 12 + 'px'
	// 	checkboxWrapper.current.style.width = elRect.width + 'px'
	// }, [windowSize, buttonGroup.current])

	if (filter.filter_values.length !== 0) {
		return (
			<div
				className={`filter-group ${filterCollapse ? 'open' : ''}`}
				style={{ zIndex: 100 - index }}
				ref={buttonGroup}>
				<button
					className='n-btn black-text filter-btn'
					onClick={() => {
						if (widthSize < 768) {
							setResponsiveCollapseStatus(!responsiveCollapseStatus)
							setTimeout(() => setFilterCollapse(!filterCollapse), 100)
						} else {
							setFilterCollapse(!filterCollapse)
						}
					}}>
					{filter.name}{' '}
					<span className='ms-5'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='10'
							height='5'
							viewBox='0 0 10 5'
							fill='none'>
							<path
								d='M9.85828 4.87078C9.68649 5.02741 9.41768 5.04165 9.22825 4.9135L9.17398 4.87078L5 1.06529L0.826019 4.87078C0.654235 5.02741 0.38542 5.04165 0.195992 4.9135L0.141723 4.87078C-0.0300617 4.71415 -0.045679 4.46906 0.0948725 4.29635L0.141723 4.24686L4.65785 0.129217C4.82964 -0.02741 5.09845 -0.0416493 5.28788 0.0865002L5.34215 0.129217L9.85828 4.24686C10.0472 4.41915 10.0472 4.69849 9.85828 4.87078Z'
								fill='#383838'
							/>
						</svg>
					</span>
				</button>
				<ul ref={checkboxWrapper} className='filter-list'>
					{sortedFilterList.map(
						(item, index) =>
							item.title && (
								<ProductFilterItemV2
									checkboxConditionRender={checkBoxCondition}
									filterController={filterController}
									data={item}
									passedFilter={passedFilter}
									filterParentId={filter.content_record_id}
									filterType={filter.content_type}
									total={total}
									key={`filter-${item.title}-${index}`}
									category={category}
									showProductFilterCount={showProductFilterCount}
								/>
							)
					)}
				</ul>
			</div>
		)
	}
}

export default ProductFiltersGroup
