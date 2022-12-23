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
	filterResponsiveStatus,
	setFilterResponsiveStatus
}) => {
	const checkboxWrapper = useRef()
	const buttonGroup = useRef()
	const windowSize = useWindowSize()
	const [filterCollapse, setFilterCollapse] = useState(false)
	const [filterList, setFilterList] = useState([])
	const elRect = useRect(buttonGroup)

	useEffect(() => {
		if (
			passedFilter.length > 0 &&
			passedFilter.find(item => item.id === filter.content_record_id)
		) {
			windowSize[0] > 768 && setFilterCollapse(true)
		}
		if (index <= 2 && windowSize[0] > 768) {
			setFilterCollapse(true)
		}
		clearInterval(XTime)

		if (!Number.isNaN(Number(filter?.filter_values[1]?.title?.split('"')[0]))) {
			let changeToNumber = filter.filter_values.map(item => {
				item.number = item?.title ? Number(item?.title?.split('"')[0]) : null
				return item
			})

			setFilterList(changeToNumber.sort((a, b) => b.number - a.number))
		} else {
			setFilterList(filter.filter_values)
		}
	}, [filter, windowSize[0]])

	if (filter.filter_values.length !== 0) {
		return (
			<div
				className={`filter-group ${
					windowSize[0] < 768
						? `${filterResponsiveStatus === index ? 'open' : ''}`
						: `${filterCollapse ? 'open' : ''}`
				}`}
				style={{ zIndex: 100 - index }}
				ref={buttonGroup}>
				<button
					className='n-btn black-text filter-btn'
					onClick={() => {
						windowSize[0] < 768
							? filterResponsiveStatus === index
								? setFilterResponsiveStatus(null)
								: setFilterResponsiveStatus(index)
							: setFilterCollapse(filterCollapse => !filterCollapse)
					}}>
					{filter.name}{' '}
					{windowSize[0] < 768 && (
						<>
							{passedFilter.map(
								item =>
									item.id === filter.content_record_id && (
										<span className='ms-2 '>
											<>( {item.values.length} )</>
										</span>
									)
							)}
						</>
					)}
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
