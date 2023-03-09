import React, { useRef, useState } from 'react'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useOutsideClick from 'hooks/useOutsideClick'
import CustomCheckBox from 'components/common/CustomCheckBox'
import FlightNightXIcon from 'components/icons/FlightNightXicon'
import { useEffect } from 'react'

const LaserInstallationDropDownSelectBoxMulti = ({
	disabledOptions,
	options,
	value,
	title,
	onChange,
	className,
	prefixIcon,
	placeholder
}) => {
	const [show, setShow] = useState(false)
	const [listOfData, setListOfData] = useState([])
	const newValueHandler = newValue => {
		if (!listOfData.find(item => item === newValue.value)) {
			setListOfData([...listOfData, newValue.value])
			onChange([...listOfData, newValue.value])
		}
	}
	useEffect(() => {
		if (value.length !== listOfData.length) {
			setListOfData(value)
		}
	}, [value])

	const removeItem = item => {
		let filterItem = listOfData.filter(filter => filter !== item)
		setListOfData(filterItem)
		onChange(filterItem)
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
					onClick={() => setShow(!show)}>
					{prefixIcon ? <span className='me-3'>{prefixIcon}</span> : null}
					{title}
					{!Array.isArray(value) || value.length === 0
						? placeholder
						: value.map(item => <>{item},</>)}

					<span className='arrow ms-auto'>
						<FontAwesomeIcon icon={faChevronDown} />
					</span>
				</button>
				{show && (
					<div className='dropdown-select-box-options'>
						<ul>
							{options.map((option, index) => (
								<li
									style={{ display: 'flex', justifyContent: 'space-between' }}
									key={index}
									onClick={() => newValueHandler(option)}>
									<button
										type='button'
										style={{ border: 'none' }}
										className='p-0'>
										{option.name}
									</button>
									{listOfData.find(listItem => listItem === option.value) && (
										<button
											onClick={() => removeItem(option.value)}
											type='button'
											style={{ border: 'none' }}
											className='p-0'>
											<FlightNightXIcon />
										</button>
									)}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</>
	)
}

export default LaserInstallationDropDownSelectBoxMulti
