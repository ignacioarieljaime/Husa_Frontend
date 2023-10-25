import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SelectBoxAngleArrow from 'components/icons/SelectBoxAngleArrow'
import useOutsideClick from 'hooks/useOutsideClick'
import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const NewsSearchFilterItem = ({
	tempFilters,
	title,
	filterChangeHandler,
	data,
	dataKey,
	className
}) => {
	const [openDropdown, setOpenDropdown] = useState(false)
	const [filter, setFilter] = useState([])
	const wrapper = useRef()
	const outside = useOutsideClick(wrapper)

	function onFilterChange(_item) {
		let temp = filter
		if (filter && filter.includes(_item)) {
			temp.splice(temp.indexOf(_item), 1)
		} else {
			temp.push(_item)
		}
		setFilter(temp)
	}

	useEffect(() => {
		filterChangeHandler(dataKey, filter)
	}, [filter])

	return (
		<>
			{openDropdown && (
				<div
					onClick={() => outside && setOpenDropdown(false)}
					className='news_selectbox_backdrop'></div>
			)}
			<div
				ref={wrapper}
				className={`select_box_custom ${className || ''} ${
					openDropdown ? 'open' : ''
				}`}>
				{/* <label>Model year</label> */}
				<div>
					<span onClick={() => setOpenDropdown(true)}>
						<div className='dropdown_label'>
							{(tempFilters && tempFilters.length && tempFilters.join(', ')) ||
								title}
						</div>
						<SelectBoxAngleArrow />
					</span>
					{openDropdown && (
						<div>
							<ul>
								{data
									?.sort((a, b) => b - a)
									?.map((item, index) => (
										<li key={index}>
											<button
												className={`checkbox ${
													filter.includes(item) ? 'checked' : ''
												}`}
												onClick={() => {
													onFilterChange(item)
													setOpenDropdown(false)
												}}>
												{filter.includes(item) && (
													<FontAwesomeIcon icon={faCheck} size='2xs' />
												)}
											</button>
											<span>{item}</span>
										</li>
									))}
							</ul>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default NewsSearchFilterItem
