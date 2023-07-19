import AngleArrow from 'components/icons/AngleArrow'
import React, { useEffect, useRef, useState } from 'react'
import FilterDropDownItem from './FilterDropDownItem'
import { useRouter } from 'next/router'

const FilterDropDown = props => {
	let {
		id,
		name,
		content_record_id,
		filter_values,
		content_type,
		filterController,
		allFilters,
		dropdownStatus
	} = props
	const router = useRouter()
	const dropdown = useRef()
	const [filterList, setFilterList] = useState([])
	const [collapse, setCollapsed] = useState(true)

	const filterHandler = _filterValue => {
		filterController(
			null,
			{ ..._filterValue, filterId: content_record_id },
			content_type
		)
	}

	useEffect(() => {
		if (router?.query?.filter) {
			let filter = JSON.parse(decodeURIComponent(router.query.filter))
			if (filter.find(item => item.id === content_record_id))
				return setCollapsed(false)
			setCollapsed(true)
		} else {
			setCollapsed(true)
		}
	}, [router?.query?.filter, filter_values, allFilters])

	useEffect(() => {
		if (dropdownStatus === id) setTimeout(() => setCollapsed(false), 400)
		return () => setCollapsed(true)
	}, [dropdownStatus])

	useEffect(() => {
		if (name === 'CHANNELS' && filter_values[1]?.title.includes(' CH')) {
			let changeToNumber = filter_values.map(item => {
				item.number = item?.title ? Number(item?.title?.split(' ')[0]) : null
				return item
			})
			setFilterList(changeToNumber.sort((a, b) => b.number - a.number))
		} else if (!Number.isNaN(Number(filter_values[1]?.title?.split('"')[0]))) {
			let changeToNumber = filter_values.map(item => {
				item.number = item?.title ? Number(item?.title?.split('"')[0]) : null
				return item
			})

			setFilterList(changeToNumber.sort((a, b) => b.number - a.number))
		} else {
			setFilterList(filter_values)
		}
	}, [router?.query?.filter, filter_values])

	const checkedHandler = _title => {
		if (router?.query?.filter) {
			let filter = JSON.parse(decodeURIComponent(router.query.filter))
			for (const item of filter) {
				if (item.values.indexOf(_title) !== -1) return true
			}
		}
		return false
	}

	return (
		<div className='filter_drop_down'>
			<div
				onClick={() => setCollapsed(state => !state)}
				className={`name_button ${!collapse && 'drop_down_is_open'}`}>
				<h6>{name}</h6>
				<AngleArrow />
			</div>
			<div
				style={{
					height: !collapse ? dropdown?.current?.offsetHeight + 'px' : 0
				}}
				className='filter_list'>
				<ul ref={dropdown}>
					{filterList?.map(
						filter =>
							filter?.title && (
								<FilterDropDownItem
									{...filter}
									isChecked={checkedHandler(filter?.title)}
									filterHandler={filterHandler}
									allFilters={allFilters}
								/>
							)
					)}
				</ul>
			</div>
		</div>
	)
}

export default FilterDropDown
