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
	categoryId,
	searchTerm,
	setSearchTerm
}) => {
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const [filterCounter, setFilterCounter] = useState(0)
	const [category, setCategory] = useState({})
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
		filterRequest(_filtersBox)
	}

	const checkboxClearHandler = () => {
		setModalIsOpen(false)
		sortOnChange()
		setFilters([])
		filterRequest([])
	}

	// useEffect(() => {
	// 	getCategories()
	// }, [categoryId])

	// getCategories(() => {
	// 	axios.get()
	// })

	useEffect(() => {
		filterCountHandler()
	}, [router?.query?.filter])

	const filterCountHandler = () => {
		if (router?.query?.filter) {
			let filters = JSON.parse(decodeURIComponent(router.query.filter))
			let filterItems = []
			filters.forEach(element => {
				filterItems.push(...element.values)
			})
			setFilterCounter(filterItems?.length)

			return
		}

		setFilterCounter(0)
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
					<div className='p-4'>
						<div className='search_field'>
							<input
								placeholder={'Search'}
								type='text'
								name='search'
								value={searchTerm}
								onChange={e => setSearchTerm(e.target.value)}
							/>
							<FontAwesomeIcon icon={faMagnifyingGlass} size='lg' />
						</div>
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
								filterController={filterController}
								selectedFilter={selectedFilter}
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
								View {products.length}
							</a>
						</Link>
						<button
							disabled={filterCounter <= 0}
							className='n-btn outline-black bg-transparent'
							onClick={checkboxClearHandler}>
							Clear Filter {filterCounter}
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
								Clear Filter {filterCounter}
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
