import ResponsiveFilterIcon from 'components/icons/ResponsiveFilterIcon'
import XIcon from 'components/icons/XIcon'
import React, { useState } from 'react'
import FilterDropDown from './FilterDropDown'

const ProductFilterResponsive = ({
	selectedFilter,
	allFilters,
	filterRequest,
	setFilters
}) => {
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const filterController = (e, _filter, _filterType) => {
		setModalIsOpen(false)
		let _filtersBox = selectedFilter
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
						values: [...filterWrapperExisted.values, _filter.title]
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
							values: removeExitItem
						}
					]
				}
			}
		} else {
			_filtersBox.push({
				id: _filter.filterId,
				type: _filterType,
				values: [_filter.title]
			})
		}
		// filterCounterHandler(_filtersBox)
		setFilters(_filtersBox)
		filterRequest(_filtersBox)
	}

	const filterCounterHandler = _filters => {
		let filtersItem = []
		_filters.forEach(filterItem => {
			filtersItem.push(...filterItem.values)
		})
		setFilterCounter(filtersItem.length)
	}
	console.log(allFilters)

	return (
		<>
			<div className='product_filter_responsive'>
				<div className='clear__all_filter_button'>
					<button onClick={() => setModalIsOpen(true)}>
						All Filters <ResponsiveFilterIcon />
					</button>
					<button>Clear Filter ({selectedFilter.length})</button>
				</div>
				<ul>
					{allFilters?.map(filter => (
						<li>
							<button>{filter?.name}</button>
						</li>
					))}
				</ul>
			</div>
			<div
				style={{ left: modalIsOpen ? 0 : '-100%' }}
				className='product_filter_responsive_modal'>
				<div className='buttons'>
					<button>Clear Filter ({selectedFilter.length})</button>
					<button onClick={() => setModalIsOpen(false)}>
						<XIcon />
					</button>
				</div>
				<div className='filters'>
					{allFilters?.map(filter => (
						<FilterDropDown {...filter} filterController={filterController} />
					))}
				</div>
			</div>
		</>
	)
}

export default ProductFilterResponsive
