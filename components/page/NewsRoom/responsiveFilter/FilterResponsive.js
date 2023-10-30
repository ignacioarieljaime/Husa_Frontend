import React, { useEffect, useState } from 'react'
import FilterDropDown from './FilterDropDown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faChevronCircleRight,
	faCircleXmark,
	faXmark
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const FilterResponsive = ({
	filters,
	yearTitle,
	categoryTitle,
	newsSearchTitle,
	filterHandler,
	allFilters,
	news,
	onSearch,
	searchTerm,
	onClose
}) => {
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const [filterCounter, setFilterCounter] = useState(0)

	useEffect(() => {
		let filterCount = 0
		Object.keys(filters)?.forEach(_k => {
			if (_k !== 'page') {
				if (_k === 'search') filterCount += filters[_k].length > 0 ? 1 : 0
				else filterCount += filters[_k].length
			}
		})
		setFilterCounter(filterCount)
	}, [filters])

	const checkboxClearHandler = () => {
		setModalIsOpen(false)
		setFilterCounter(0)
		onSearch('')
		filterHandler('', '', { page: 1, search: '', product: [], year: [] })
	}

	function onFilterChange(_item, _k) {
		let temp = filters[_k]
		if (filters && filters[_k] && filters[_k].includes(_item)) {
			temp.splice(temp.indexOf(_item), 1)
		} else {
			temp.push(_item)
		}
		filterHandler(_k, temp)
	}

	return (
		<>
			<div
				className={`responsive_wrapper ${modalIsOpen ? 'open' : ''} ${
					!modalIsOpen && filterCounter > 0 ? 'shortcut' : ''
				}`}>
				<div
					className={`d-flex justify-content-between align-items-center p-4 w-100 filter_nav `}>
					<span>Filters</span>
					<button
						onClick={() => setModalIsOpen(prev => !prev)}
						className='bg-transparent border-0'>
						<FontAwesomeIcon
							icon={modalIsOpen ? faCircleXmark : faChevronCircleRight}
							size={'xl'}
						/>
					</button>
				</div>
				<div className='responsive_modal'>
					<div className='d-flex flex-column justify-content-center align-items-center gap-3 p-4'>
						<div className='search_field'>
							<input
								placeholder={newsSearchTitle}
								type='text'
								name='search'
								autocomplete='off'
								value={searchTerm}
								onChange={e => onSearch(e.target.value)}
								onKeyUp={e => {
									if (e.key === 'Enter') onClose()
								}}
							/>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								viewBox='0 0 16 16'
								fill='none'>
								<g clipPath='url(#clip0_6631_1386)'>
									<path
										d='M15.8647 14.2173L12.8644 11.2244C13.709 10.0585 14.2082 8.62953 14.2082 7.08655C14.2059 3.17905 11.019 0 7.10411 0C3.18927 0 0 3.17905 0 7.08655C0 10.994 3.18694 14.1731 7.10411 14.1731C8.63225 14.1731 10.0484 13.6867 11.2079 12.8652L14.2152 15.865C14.2386 15.8883 14.2619 15.9069 14.2875 15.9255C14.3132 15.9418 14.3412 15.9558 14.3692 15.9674C14.4252 15.9907 14.4859 16.0023 14.5442 16.0023C14.6048 16.0023 14.6632 15.9907 14.7192 15.9674C14.7752 15.9441 14.8288 15.9116 14.8731 15.865L15.8624 14.8783C16.0443 14.6967 16.0443 14.4012 15.8624 14.2196L15.8647 14.2173ZM1.16652 7.08655C1.16652 3.82138 3.83085 1.16364 7.10411 1.16364C10.3774 1.16364 13.0417 3.82138 13.0417 7.08655C13.0417 10.3517 10.3774 13.0095 7.10411 13.0095C3.83085 13.0095 1.16652 10.3517 1.16652 7.08655Z'
										fill='black'
									/>
								</g>
								<defs>
									<clipPath id='clip0_6631_1386'>
										<rect width='16' height='16' fill='white' />
									</clipPath>
								</defs>
							</svg>
						</div>
					</div>
					<div className='filters'>
						<FilterDropDown
							title={yearTitle}
							modalIsOpen={modalIsOpen}
							filterCounter={filterCounter}
							filterController={onFilterChange}
							filters={filters}
							dataKey={'year'}
							allFilters={allFilters?.years}
						/>
						<FilterDropDown
							title={categoryTitle}
							modalIsOpen={modalIsOpen}
							filterCounter={filterCounter}
							filterController={onFilterChange}
							dataKey={'product'}
							filters={filters}
							allFilters={allFilters?.tags}
						/>
					</div>
				</div>
				{modalIsOpen && (
					<div className='d-flex justify-content-center align-items-center gap-4 buttons p-4'>
						<Link href='#products'>
							<a
								className='n-btn primary'
								style={{ padding: '11px 16px 9px' }}
								onClick={() => {
									setModalIsOpen(false)
								}}>
								View
								<span className='ms-2 text-white fw-light'>{news?.length}</span>
							</a>
						</Link>
						<button
							disabled={filterCounter <= 0}
							className='n-btn outline-black bg-transparent'
							style={{ padding: '11px 16px 9px' }}
							onClick={checkboxClearHandler}>
							Clear Filter
							{filterCounter > 0 ? (
								<>
									<span className='ms-2 fw-light'>{filterCounter}</span>
								</>
							) : (
								''
							)}
						</button>
					</div>
				)}
				{!modalIsOpen && filterCounter > 0 && (
					<div className='filter_shorcuts'>
						<div className='d-flex justify-content-center align-items-center gap-2 buttons'>
							<button
								disabled={filterCounter <= 0}
								className='n-btn primary'
								style={{ padding: '8px 16px 6px' }}
								onClick={checkboxClearHandler}>
								Clear Filter
								<span className='ms-2 text-white fw-light'>
									{filterCounter}
								</span>
							</button>
							{Object.keys(filters)?.map(
								_k =>
									_k !== 'page' &&
									(_k === 'search' ? (
										filters[_k].length ? (
											<button
												style={{ padding: '8px 16px 6px' }}
												className='d-flex gap-2 n-btn outline-black bg-transparent'
												onClick={() => {
													onSearch('')
												}}>
												<span>{filters[_k]}</span>
												<FontAwesomeIcon icon={faXmark} />
											</button>
										) : null
									) : (
										filters[_k].map((_filter, index) => (
											<button
												key={index}
												style={{ padding: '8px 16px 6px' }}
												className='d-flex gap-2 n-btn outline-black bg-transparent'
												onClick={() => {
													onFilterChange(_filter, _k)
												}}>
												<span>{_filter}</span>
												<FontAwesomeIcon icon={faXmark} />
											</button>
										))
									))
							)}
						</div>
					</div>
				)}
			</div>
		</>
	)
}

export default FilterResponsive
