import AngleArrow from 'components/icons/AngleArrow'
import React, { useEffect, useRef, useState } from 'react'
import FilterDropDownItem from './FilterDropDownItem'

const FilterDropDown = ({
	title,
	modalIsOpen,
	filterCounter,
	filters,
	allFilters,
	dataKey,
	filterController
}) => {
	const dropdown = useRef()
	const [collapse, setCollapsed] = useState(true)
	const [height, setHeight] = useState(0)

	useEffect(() => {
		if (!modalIsOpen) setCollapsed(true)
	}, [modalIsOpen])

	useEffect(() => {
		if (!collapse) {
			setTimeout(() => {
				setHeight(dropdown?.current?.offsetHeight + 16)
			}, 200)
		} else {
			setHeight(0)
		}
	}, [filters, collapse, filterCounter])

	const checkedHandler = _f => filters[dataKey].includes(_f)

	return (
		<div className='filter_drop_down'>
			<div
				onClick={() => setCollapsed(state => !state)}
				className={`name_button ${!collapse && 'drop_down_is_open'}`}>
				<h6>{title ? title.toLowerCase() : ''}</h6>
				<AngleArrow />
			</div>
			{allFilters && allFilters.length ? (
				<div
					style={{
						height: height + 'px'
					}}
					className='filter_list'>
					<ul ref={dropdown}>
						{allFilters?.map(filter => (
							<FilterDropDownItem
								filter={filter}
								square
								isChecked={checkedHandler(filter)}
								filterController={_f => filterController(_f, dataKey)}
							/>
						))}
					</ul>
				</div>
			) : null}
		</div>
	)
}

export default FilterDropDown
