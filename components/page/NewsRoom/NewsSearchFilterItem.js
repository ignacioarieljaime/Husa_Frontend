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
			<div ref={wrapper} className={`select_box_custom ${className || ''}`}>
				{/* <label>Model year</label> */}
				<div>
					<span onClick={() => setOpenDropdown(true)}>
						<span>{tempFilters || <span className='label'>{title}</span>}</span>
						{tempFilters ? (
							<button
								className='bg-transparent border-0 text-white'
								onClick={() => {
									filterChangeHandler(dataKey, null)
									setOpenDropdown(false)
								}}>
								<FontAwesomeIcon icon={faXmark} />
							</button>
						) : (
							<SelectBoxAngleArrow />
						)}
					</span>
					{openDropdown && (
						<div>
							<ul>
								<li>
									<button
										className='clear'
										onClick={() => {
											filterChangeHandler(dataKey, null)
											setOpenDropdown(false)
										}}>
										Clear
										<FontAwesomeIcon icon={faXmark} size={'sm'} />
									</button>
								</li>
								{data
									?.sort((a, b) => b - a)
									?.map(item => (
										<li>
											<button
												onClick={() => {
													filterChangeHandler(dataKey, item)
													setOpenDropdown(false)
												}}>
												{item}
											</button>
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
