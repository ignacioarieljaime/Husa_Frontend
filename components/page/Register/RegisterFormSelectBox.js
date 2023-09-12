import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useOutsideClick from 'hooks/useOutsideClick'
import React, { useRef, useState } from 'react'
import { useEffect } from 'react'

function RegisterFormSelectBox({
	required = false,
	title,
	options,
	onChange,
	className = '',
	isSearchable,
	placeholder,
	rightText,
	onValueClear,
	dataSchemaValue
}) {
	const optionBox = useRef()
	const [showSearchList, setShowSearchList] = useState(false)
	const [searchList, setSearchList] = useState([])
	const [inputSearch, setInputSearch] = useState(null)
	const [value, setValue] = useState()
	let timeout = null
	const outSide = useOutsideClick(optionBox)

	useEffect(() => {
		if (dataSchemaValue !== inputSearch) {
			setValue(null)
			onChange(null)
		}
	}, [inputSearch])
	useEffect(() => {
		setInputSearch(null)
		if (title) {
			setValue(title)
		} else {
			setValue(null)
		}
	}, [onValueClear])

	useEffect(() => {
		if (title) {
			setValue(title)
		}
	}, [title])

	const searchHandler = _value => {
		setInputSearch(_value)
		clearTimeout(timeout)

		// Make a new timeout set to go off in 1000ms (1 second)
		timeout = setTimeout(function () {
			searchValue(_value)
		}, 500)
	}

	const searchValue = _text => {
		let result = []
		if (Array.isArray(options))
			options?.forEach(
				item =>
					item?.name.toLowerCase()?.includes(_text?.toLowerCase()) &&
					result.push(item)
			)
		setSearchList(result)
	}

	const listGenerator = _options => {
		return _options && Array.isArray(_options) ? (
			<>
				{_options.length === 0 ? (
					<li className='option disabled'>No results found for this search</li>
				) : (
					_options.map((item, index) => (
						<li
							onClick={() => {
								onChange(item)
								setValue(item?.name)
								isSearchable && searchHandler(item?.name)
								setShowSearchList(false)
							}}
							key={index}>
							<label className='option' htmlFor='tv' aria-hidden='aria-hidden'>
								{item?.name}
							</label>
						</li>
					))
				)}
			</>
		) : null
	}
	return (
		<>
			{showSearchList && (
				<div
					onClick={() => outSide && setShowSearchList(false)}
					className='dropdown-select-box-backdrop'></div>
			)}
			<div className={`custom-select-box ${className}`}>
				<div
					className={`form-container-inner-input select-container ${className} ${
						rightText ? 'taller_field' : ''
					}`}
					tabIndex='1'>
					<div className={`select-box-item ${className}`}>
						<input
							className='input'
							type='radio'
							id='product'
							value='1'
							name='product'
							checked='checked'
							disabled
						/>
						{isSearchable && options !== 'loading' ? (
							<div
								onClick={() => setShowSearchList(true)}
								className='search_box__arrow'>
								<p className='w-100'>
									{dataSchemaValue ? dataSchemaValue : placeholder}
								</p>
								{!inputSearch && !value && rightText ? (
									<span>{rightText}</span>
								) : null}
								<FontAwesomeIcon
									style={{ width: '10px' }}
									icon={faChevronDown}
									size={'1x'}
								/>
							</div>
						) : (
							<p
								className={`input-text d-flex align-items-center justify-content-between ${className}`}>
								{options === 'loading' ? (
									'loading ...'
								) : (
									<>
										{value}
										{rightText && <span>{rightText}</span>}
										<FontAwesomeIcon
											style={{ width: '10px' }}
											icon={faChevronDown}
											size={'1x'}
										/>
									</>
								)}
							</p>
						)}
					</div>
				</div>

				{showSearchList && (
					<ul
						ref={optionBox}
						className='select-box-list-no-anime top-100 w-100'>
						<input
							placeholder={'Search Product'}
							onInput={e => searchHandler(e.target.value)}
							value={inputSearch}
							className='input'
						/>
						{isSearchable && inputSearch?.length
							? listGenerator(searchList)
							: listGenerator(options)}
					</ul>
				)}
				{required && (
					<span className='input-error'>This field is required.</span>
				)}
			</div>
		</>
	)
}

export default RegisterFormSelectBox
