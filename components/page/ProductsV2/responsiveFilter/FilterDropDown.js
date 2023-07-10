import AngleArrow from 'components/icons/AngleArrow'
import React, { useEffect, useRef, useState } from 'react'
import FilterDropDownItem from './FilterDropDownItem'
import { useRouter } from 'next/router'

const FilterDropDown = props => {
	let { name, id, filter_values, content_type, filterController } = props
	const router = useRouter()

	const dropdown = useRef()
	const [dropdownStatus, setDropdownStatus] = useState(false)
	const [filterList, setFilterList] = useState([])
	
	const filterHandler = _filterValue => {
		filterController(null, { ..._filterValue, filterId: id }, content_type)
	}

	useEffect(() => {
		if (router?.query?.filter) {
			let filter = JSON.parse(decodeURIComponent(router.query.filter))
			if (filter.find(item => item.id === id)) setDropdownStatus(true)
		}else{
			setDropdownStatus(false)
		}
	}, [router?.query?.filter])

	useEffect(() => {
		if (
		name === 'CHANNELS' &&
			filter_values[1]?.title.includes(' CH')
		) {
			let changeToNumber = filter_values.map(item => {
				item.number = item?.title ? Number(item?.title?.split(' ')[0]) : null
				return item
			})
			setFilterList(changeToNumber.sort((a, b) => b.number - a.number))
		} else if (
			!Number.isNaN(Number(filter_values[1]?.title?.split('"')[0]))
		) {
			let changeToNumber = filter_values.map(item => {
				item.number = item?.title ? Number(item?.title?.split('"')[0]) : null
				return item
			})

			setFilterList(changeToNumber.sort((a, b) => b.number - a.number))
		} else {
			setFilterList(filter_values)
		}
	}, [router?.query?.filter])

	const checkBoxStatusHandler = _filterValue => {
		if (router?.query?.filter) {
			let _allFilter = JSON.parse(decodeURIComponent(router.query.filter))
			let currentValue = _allFilter.find(item => item.id === id)
	
			return currentValue?.values?.find(item => item === _filterValue) 
		}
		return false
	}

	return (
		<div className='filter_drop_down'>
			<div
				onClick={() => setDropdownStatus(state => !state)}
				className='name_button'>
				<h6>{name}</h6>
				<AngleArrow />
			</div>
			<div
				style={{
					height: dropdownStatus ? dropdown.current.offsetHeight + 'px' : 0
				}}
				className='filter_list'>
				<ul ref={dropdown}>
					{filterList?.map(filter => (
						<FilterDropDownItem
							{...filter}
							filterHandler={filterHandler}
							isChecked={checkBoxStatusHandler(filter?.title)}
						/>
					))}
				</ul>
			</div>
		</div>
	)
}

export default FilterDropDown
