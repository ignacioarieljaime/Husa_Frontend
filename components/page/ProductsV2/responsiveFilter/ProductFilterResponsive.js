import ResponsiveFilterIcon from 'components/icons/ResponsiveFilterIcon'
import XIcon from 'components/icons/XIcon'
import React, { useEffect, useState } from 'react'
import FilterDropDown from './FilterDropDown'
import { useRouter } from 'next/router'
import SortFilterDropDown from './SortFilterDropDown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faChevronCircleRight,
	faCircleXmark,
	faMagnifyingGlass,
	faXmark
} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Link from 'next/link'

const ProductFilterResponsive = ({
	selectedFilter,
	allFilters,
	filterRequest,
	setFilters,
	sortValue,
	sortOnChange,
	products,
	filteredProducts,
	category,
	searchTerm,
	setSearchTerm,
	showProductFilterCount,
	searchTermFilter,
	setSearchTermFilter
}) => {
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const [filterCounter, setFilterCounter] = useState(0)
	const router = useRouter()
	const filterController = (e, _filter, _filterType) => {
		let _filtersBox = router?.query?.filter
			? JSON?.parse(decodeURIComponent(router?.query?.filter))
			: []
		let filterWrapperExisted = _filtersBox.find(
			item => item.id === _filter.filterId
		)
		// e.target.checked = true

		if (filterWrapperExisted) {
			if (filterWrapperExisted.values.indexOf(_filter.title) < 0) {
				let removeExitItemOfFilters = (_filtersBox = selectedFilter.filter(
					item => item.id !== _filter.filterId
				))
				_filtersBox = [
					...removeExitItemOfFilters,
					{
						id: filterWrapperExisted.id,
						type: _filterType,
						values: [...filterWrapperExisted.values, _filter.title],
						keys: [...filterWrapperExisted.values, _filter.value]
					}
				]
			} else {
				let removeExitItem = filterWrapperExisted.values.filter(
					item => item !== _filter.title
				)
				let removeExitItemOfFilters = (_filtersBox = selectedFilter.filter(
					item => item.id !== _filter.filterId
				))

				if (removeExitItem.length === 0) {
					_filtersBox = [...removeExitItemOfFilters]
				} else {
					_filtersBox = [
						...removeExitItemOfFilters,
						{
							id: filterWrapperExisted.id,
							type: _filterType,
							values: removeExitItem,
							keys: removeExitItem
						}
					]
				}
			}
		} else {
			_filtersBox.push({
				id: _filter.filterId,
				type: _filterType,
				values: [_filter.title],
				keys: [_filter.filter_value]
			})
		}
		setFilters(_filtersBox)
		filterRequest(_filtersBox, searchTerm)
	}

	const checkboxClearHandler = () => {
		setModalIsOpen(false)
		sortOnChange()
		setSearchTerm('')
		setFilters([])
		filterRequest([], '')
	}

	useEffect(() => {
		if (modalIsOpen) {
			document.querySelector(".product_filter_responsive_wrapper")?.scrollIntoView({behavior: "smooth"});
			document.body.classList.add("overflow-y-clip");
			document.querySelector(".product_filter_responsive_wrapper")?.parentNode?.parentElement.classList.add("overscroll-y-auto");
			document.querySelector(".product_filter_responsive_wrapper")?.parentNode?.parentElement.classList.add("overflow-y-clip");
			document.querySelector('.product_filter_responsive_wrapper')?.classList.add("overflow-y-clip");
		} else {

			document.body.classList.remove("overflow-y-clip");
			document.querySelector(".product_filter_responsive_wrapper")?.parentNode?.parentElement.classList.remove("overscroll-y-auto");
			document.querySelector(".product_filter_responsive_wrapper")?.parentNode?.parentElement.classList.remove("overflow-y-clip");
			document.querySelector('.product_filter_responsive_wrapper')?.classList.remove("overflow-y-clip");
		}
	
		return () => {
			document.body.classList.remove("overflow-y-clip");
			document.querySelector(".product_filter_responsive_wrapper")?.parentNode?.parentElement.classList.remove("overscroll-y-auto");
			document.querySelector(".product_filter_responsive_wrapper")?.parentNode?.parentElement.classList.remove("overflow-y-clip");
			document.querySelector('.product_filter_responsive_wrapper')?.classList.remove("overflow-y-clip");
		};
	}, [modalIsOpen]);

	useEffect(() => {
		filterCountHandler()
	}, [router?.query?.filter, searchTerm])

	useEffect(() => {
		if (searchTerm === '') setSearchTermFilter(0)
	}, [searchTerm])

	const filterCountHandler = () => {
		if (router?.query?.filter) {
			let filters = JSON.parse(decodeURIComponent(router.query.filter))
			let filterItems = []
			filters.forEach(element => {
				filterItems.push(...element.values)
			})
			setFilterCounter(
				searchTerm && searchTerm.length
					? filterItems.length + 1
					: filterItems.length
			)

			return
		}

		setFilterCounter(searchTerm && searchTerm.length ? 1 : 0)
	}

	const searchControl = _term => {
		filterRequest(selectedFilter, _term)
		setSearchTerm(_term)
	}

	return (
		<>
			<div
				className={`product_filter_responsive_wrapper ${
					modalIsOpen ? 'open' : ''
				} ${!modalIsOpen && filterCounter > 0 ? 'shortcut' : ''}`}>
				<div
					className={`d-flex justify-content-between align-items-center p-4 w-100 filter_nav `}>
					<span>Filters</span>
					<button
						onClick={() => setModalIsOpen(prev => !prev)}
						className='bg-transparent border-0'>
						<FontAwesomeIcon
							icon={modalIsOpen ? faCircleXmark : faChevronCircleRight}
							size={'xl'}
							color='#000'
						/>
					</button>
				</div>
				<div className='product_filter_responsive_modal'>
					<div className='d-flex flex-column justify-content-center align-items-center gap-3 p-4'>
						<div className='search_field'>
							<input
								placeholder={'Search ' + category?.title}
								type='text'
								name='search'
								autocomplete='off'
								value={searchTerm}
								onChange={e => searchControl(e.target.value)}
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
						{searchTerm && searchTerm.length && (
							<ul className='search_list'>
								{products && Array.isArray(products) && products.length > 0 ? (
									products.map((item, index) =>
										Array.isArray(item?.products) ? (
											<li key={index} className='search_item'>
												<button
													onClick={() => {
														setSearchTermFilter(item?.products[0]?.product?.id)
														searchControl(item?.name.split(' ')[0])
													}}
													className='search_radio'>
													{item?.products[0]?.product?.id ===
														searchTermFilter && <div></div>}
												</button>
												<div>{item?.name.split(' ')[0]}</div>
											</li>
										) : (
											<li key={index} className='search_item'>
												<button
													onClick={() => {
														setSearchTermFilter(item?.products?.product?.id)
														searchControl(item?.products?.product?.model)
													}}
													className='search_radio'>
													{item?.products?.product?.id === searchTermFilter && (
														<div></div>
													)}
												</button>
												<div>{item?.products?.product?.model}</div>
											</li>
										)
									)
								) : (
									<li className='search_item justify-content-end'>
										<div>No Results Found</div>
									</li>
								)}
							</ul>
						)}
					</div>
					<div className='filters'>
						<SortFilterDropDown
							sortValue={sortValue}
							modalIsOpen={modalIsOpen}
							sortOnChange={value => {
								sortOnChange(value.value)
							}}
						/>
						{allFilters?.map(filter => (
							<FilterDropDown
								{...filter}
								modalIsOpen={modalIsOpen}
								category={category}
								filterCounter={filterCounter}
								filterController={filterController}
								selectedFilter={selectedFilter}
								showProductFilterCount={showProductFilterCount}
								allFilters={allFilters}
							/>
						))}
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
								<span className='ms-2 text-white fw-light'>
									{filteredProducts.length}
								</span>
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
							{selectedFilter?.map(
								filter =>
									filter.values &&
									Array.isArray(filter.values) &&
									filter.values.map((_value, index) => (
										<button
											style={{ padding: '8px 16px 6px' }}
											className='d-flex gap-2 n-btn outline-black bg-transparent'
											onClick={() => {
												console.log(filter)
												filterController(
													null,
													{
														title: _value,
														filterId: filter.id,
														isChecked: true,
														filter_value: filter.keys[index]
													},
													filter.type
												)
											}}>
											<span>{_value}</span>
											<FontAwesomeIcon icon={faXmark} />
										</button>
									))
							)}
						</div>
					</div>
				)}
			</div>
		</>
	)
}

export default ProductFilterResponsive
