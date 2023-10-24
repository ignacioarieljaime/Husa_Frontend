import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SelectBoxAngleArrow from 'components/icons/SelectBoxAngleArrow'
import useOutsideClick from 'hooks/useOutsideClick'
import React from 'react'
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
	const wrapper = useRef()
	const outside = useOutsideClick(wrapper)

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
						<div className={'w-100'}>
							{tempFilters || <div className='label'>{title}</div>}
						</div>
						<SelectBoxAngleArrow />
					</span>
					{openDropdown && (
						<div>
							<ul>
								{data
									?.sort((a, b) => b - a)
									?.map(item => (
										<li>
											<button
												className='checkbox'
												// data-checked={}
												onClick={() => {
													filterChangeHandler(dataKey, item)
													setOpenDropdown(false)
												}}></button>
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
