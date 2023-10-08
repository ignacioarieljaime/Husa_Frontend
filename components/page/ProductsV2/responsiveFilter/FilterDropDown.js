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
		selectedFilter,
		filterCounter,
		category,
		showProductFilterCount
	} = props
	const router = useRouter()
	const dropdown = useRef()
	const [filterList, setFilterList] = useState([])
	const [collapse, setCollapsed] = useState(true)
	const [height, setHeight] = useState(0)

	const filterHandler = _filterValue => {
		filterController(
			null,
			{ ..._filterValue, filterId: content_record_id },
			content_type
		)
	}

	// useEffect(() => {
	// 	if (router?.query?.filter) {
	// 		let filter = JSON.parse(decodeURIComponent(router.query.filter))
	// 		if (filter.find(item => item.id === content_record_id))
	// 			return setCollapsed(false)
	// 		setCollapsed(true)
	// 	} else {
	// 		setCollapsed(true)
	// 	}
	// }, [router?.query?.filter, filter_values, allFilters])

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

	useEffect(() => {
		if (!collapse) {
			setTimeout(() => {
				setHeight(dropdown?.current?.offsetHeight + 16)
			}, 200)
		} else {
			setHeight(0)
		}
	}, [
		router?.query?.filter,
		allFilters,
		selectedFilter,
		collapse,
		filterCounter
	])

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
				<h6>{name.toLowerCase()}</h6>
				<AngleArrow />
			</div>
			{filterList && filterList.length ? (
				<div
					style={{
						height: height + 'px'
					}}
					className='filter_list'>
					<ul ref={dropdown}>
						{filterList?.map(
							filter =>
								filter?.title && (
									<FilterDropDownItem
										{...filter}
										square
										category={category}
										isChecked={checkedHandler(filter?.title)}
										filterHandler={filterHandler}
										showProductFilterCount={showProductFilterCount}
										allFilters={allFilters}
									/>
								)
						)}
					</ul>
				</div>
			) : null}
		</div>
	)
}

export default FilterDropDown
