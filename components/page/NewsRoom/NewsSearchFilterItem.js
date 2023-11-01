import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SelectBoxAngleArrow from 'components/icons/SelectBoxAngleArrow'
import useOutsideClick from 'hooks/useOutsideClick'
import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const NewsSearchFilterItem = ({
	filters,
	title,
	filterChangeHandler,
	data,
	dataKey,
	className,
	onClose
}) => {
	const [openDropdown, setOpenDropdown] = useState(false)
	const [filter, setFilter] = useState(filters)
	const wrapper = useRef()
	const outside = useOutsideClick(wrapper)

	const onFilterChange = _item => {
		let temp = [...filter]
		if (temp && temp.length && temp.includes(_item))
			temp.splice(temp.indexOf(_item), 1)
		else temp.push(_item)
		setFilter(temp)
	}

	useEffect(() => {
		setFilter(filters)
	}, [filters])

	useEffect(() => {
		filterChangeHandler(dataKey, filter, false)
	}, [filter])

	return (
		<>
			{openDropdown && (
				<div
					onClick={() => {
						if (outside) {
							setOpenDropdown(false)
							onClose()
						}
					}}
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
							{(filters && filters.length && filters.join(', ')) || title}
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
													filter && filter.length
														? filter.includes(item)
															? 'checked'
															: ''
														: null
												}`}
												onClick={() => {
													onFilterChange(item)
												}}>
												{filter && filter.length
													? filter.includes(item) && (
															<FontAwesomeIcon icon={faCheck} size='2xs' />
													  )
													: null}
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
