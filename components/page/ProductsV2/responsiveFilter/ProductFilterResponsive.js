import ResponsiveFilterIcon from 'components/icons/ResponsiveFilterIcon'
import XIcon from 'components/icons/XIcon'
import React, { useEffect, useRef, useState } from 'react'
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
	setSearchTermFilter,
	wrapperRef
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

		const vh = window.innerHeight * 0.01;
		
		if (modalIsOpen) {

			// Smooth scroll into view
			document.querySelector(".product_filter_responsive_wrapper")?.scrollIntoView({behavior: "smooth"});

			// Mobile and iOS Safari double body background scroll fix
			document.querySelector(".product_filter_responsive_wrapper")?.parentNode?.parentElement.classList.add("overscroll-y-auto");
			document.querySelector(".product_filter_responsive_wrapper")?.parentNode?.parentElement.classList.add("overflow-y-clip");
			document.querySelector('.product_filter_responsive_wrapper')?.classList.add("overflow-y-clip");
			document.querySelector('.product_filter_responsive_wrapper')?.classList.add("overscroll-contain");
			
			// iOS Safari bottom element cutoff fix
			document.querySelector('.product_filter_responsive_modal')?.classList.add("webkitHeightFix");
			document.documentElement.style.setProperty('--vh', `${vh}px`);
			document.querySelector('.product_filter_responsive_modal')?.classList.add("paddingFix");

		} else {

			// Class cleanup
			document.querySelector(".product_filter_responsive_wrapper")?.parentNode?.parentElement.classList.remove("overscroll-y-auto");
			document.querySelector(".product_filter_responsive_wrapper")?.parentNode?.parentElement.classList.remove("overflow-y-clip");
			document.querySelector('.product_filter_responsive_wrapper')?.classList.remove("overflow-y-clip");
			document.querySelector('.product_filter_responsive_wrapper')?.classList.remove("overscroll-contain");
			document.querySelector('.product_filter_responsive_modal')?.classList.remove("webkitHeightFix");
			document.documentElement.style.setProperty('--vh', `${vh}px`);
			document.querySelector('.product_filter_responsive_modal')?.classList.remove("paddingFix");
		}
	
		return () => {
			
			// Class cleanup
			document.querySelector(".product_filter_responsive_wrapper")?.parentNode?.parentElement.classList.remove("overscroll-y-auto");
			document.querySelector(".product_filter_responsive_wrapper")?.parentNode?.parentElement.classList.remove("overflow-y-clip");
			document.querySelector('.product_filter_responsive_wrapper')?.classList.remove("overflow-y-clip");
			document.querySelector('.product_filter_responsive_wrapper')?.classList.remove("overscroll-contain");
			document.querySelector('.product_filter_responsive_modal')?.classList.remove("webkitHeightFix");
			document.documentElement.style.setProperty('--vh', `${vh}px`);
			document.querySelector('.product_filter_responsive_modal')?.classList.remove("paddingFix");
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
				} ${!modalIsOpen && filterCounter > 0 ? 'shortcut' : ''}`}
				onTransitionEnd={() => {
					if (modalIsOpen) document.body.classList.add("overflow-hidden");
					if (!modalIsOpen) document.body.classList.remove("overflow-hidden");
				}}
				>
				<div
					ref={wrapperRef}
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
					<div className='d-flex justify-content-center align-items-center gap-4 buttons px-4 pt-4 pb-20 iosFix'>
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
