import React, { useRef, useState } from 'react'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useOutsideClick from 'hooks/useOutsideClick'
import CustomCheckBox from 'components/common/CustomCheckBox'
import { useEffect } from 'react'

const LaserInstallationDropDownSelectBox = ({
	disabledOptions,
	options,
	value,
	title,
	onChange,
	className,
	prefixIcon,
	placeholder,
	disabled
}) => {
	const [show, setShow] = useState(false)

	const newValueHandler = newValue => {
		if (Array.isArray(value)) {
			if (value.some(item => item.value === newValue.value)) {
				let index = value.indexOf(newValue)
				let tempArr = value.splice(index, 1)
				onChange([...tempArr])
			} else {
				onChange([...value, newValue])
			}
		} else {
			onChange(newValue)
			setShow(false)
		}
	}

	const boxRef = useRef()

	const outSide = useOutsideClick(boxRef)

	return (
		<>
			{show && (
				<div
					onClick={() => outSide && setShow(false)}
					className='dropdown-select-box-backdrop'></div>
			)}
			<div
				className={`dropdown-select-box ${show ? 'show' : ''} ${className}`}
				ref={boxRef}>
				<button
					className='dropdown-select-box-button'
					type='button'
					onClick={() => setShow(!show && !disabled)}>
					{prefixIcon ? <span className='me-3'>{prefixIcon}</span> : null}
					{title}
					{!value ? <span className='place_holder'>{placeholder}</span> : null}
					{typeof value === 'string'
						? options.find(
								option => option?.value === value || option?.name === value
						  )?.name
						: value?.name
						? value.name
						: ''}
					<span className='arrow ms-auto'>
						<FontAwesomeIcon icon={faChevronDown} />
					</span>
				</button>
				{show && (
					<div className='dropdown-select-box-options'>
						<ul>
							{value
								? disabledOptions?.map((option, index) => {
										return (
											<li key={index} className='disabled'>
												{typeof option === 'string' ? option : option.name}
											</li>
										)
								  })
								: null}
							{options?.map((option, index) => {
								return (
									<li key={index} onClick={() => newValueHandler(option)}>
										{Array.isArray(value) ? (
											<CustomCheckBox
												checked={value.some(item => item.id === option.id)}
												className='me-3'
											/>
										) : (
											''
										)}
										{typeof option === 'string' ? option : option.name}
									</li>
								)
							})}
						</ul>
					</div>
				)}
			</div>
		</>
	)
}

export default LaserInstallationDropDownSelectBox
