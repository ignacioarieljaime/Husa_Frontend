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
		filterCountHandler()
	}, [router?.query?.filter, searchTerm])

	useEffect(() => {
		setSearchTermFilter(0)
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
					className={`d-flex justify-content-between align-items-center p-4 w-100 ${
						modalIsOpen ? '' : ''
					}`}>
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
				{/* <div className='product_filter_responsive'>
					<div className='clear__all_filter_button'>
						<button
							onClick={() => {
								setModalIsOpen(true)
								setDropdownStatus(0)
							}}>
							All Filters <ResponsiveFilterIcon />
						</button>
						<button onClick={checkboxClearHandler}>
							Clear Filter ({filterCounter})
						</button>
					</div>
					<ul>
						{allFilters && (
							<li>
								<button
									onClick={() => {
										setModalIsOpen(true)
										setDropdownStatus(1)
									}}>
									SORT
								</button>
							</li>
						)}
						{allFilters?.map(filter => (
							<li>
								<button
									onClick={() => {
										setModalIsOpen(true)
										setDropdownStatus(filter.id)
									}}>
									{filter?.name}
								</button>
							</li>
						))}
					</ul>
				</div>
*/}
				<div className='product_filter_responsive_modal'>
					<div className='d-flex flex-column justify-content-center align-items-center gap-3 p-4'>
						<div className='search_field'>
							<input
								placeholder={'Search ' + category?.title}
								type='text'
								name='search'
								value={searchTerm}
								onChange={e => searchControl(e.target.value)}
							/>
							<FontAwesomeIcon icon={faMagnifyingGlass} size='lg' />
						</div>
						{searchTerm && searchTerm.length && (
							<ul className='search_list'>
								{products && Array.isArray(products) && products.length > 0 ? (
									products.map((item, index) =>
										Array.isArray(item?.products) ? (
											item?.products.map((_item, _index) => (
												<li key={_index} className='search_item'>
													<button
														onClick={() =>
															setSearchTermFilter(_item?.product?.id)
														}
														className='search_radio'>
														{_item?.product?.id === searchTermFilter && (
															<div></div>
														)}
													</button>
													<div>{_item?.product?.model}</div>
												</li>
											))
										) : (
											<li key={index} className='search_item'>
												<button
													onClick={() =>
														setSearchTermFilter(item?.products?.product?.id)
													}
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
							sortOnChange={value => {
								sortOnChange(value.value)
							}}
						/>
						{allFilters?.map(filter => (
							<FilterDropDown
								{...filter}
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
								onClick={() => {
									setModalIsOpen(true)
								}}>
								View
								<span className='ms-2 text-white fw-light'>
									{products.length}
								</span>
							</a>
						</Link>
						<button
							disabled={filterCounter <= 0}
							className='n-btn outline-black bg-transparent'
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
											<FontAwesomeIcon icon={faXmark} />
											<span>{_value}</span>
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
