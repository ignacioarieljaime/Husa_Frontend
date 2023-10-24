import AngleArrow from 'components/icons/AngleArrow'
import React, { useEffect, useRef, useState } from 'react'
import SortFilterItem from './SortFilterItem'

const options = [
	{
		name: 'Featured',
		value: 'featured'
	},
	{
		name: 'Newest',
		value: 'newest'
	},
	{
		name: 'Oldest',
		value: 'oldest'
	}
]

const SortFilterDropDown = ({
	sortValue,
	sortOnChange,
	dropdownStatus,
	modalIsOpen
}) => {
	const dropdown = useRef()
	const [collapse, setCollapsed] = useState(true)

	useEffect(() => {
		if (!modalIsOpen) setCollapsed(true)
	}, [modalIsOpen])

	useEffect(() => {
		if (dropdownStatus === 1) setTimeout(() => setCollapsed(false), 400)
		return () => setCollapsed(true)
	}, [dropdownStatus, dropdown?.current?.offsetHeights])

	return (
		<div className='filter_drop_down'>
			<div
				onClick={() => setCollapsed(state => !state)}
				className={`name_button ${!collapse ? 'drop_down_is_open' : ''}`}>
				<h6>Sort</h6>
				<AngleArrow />
			</div>
			<div
				style={{
					height: !collapse ? dropdown?.current?.offsetHeight + 4 + 'px' : 0
				}}
				className='filter_list'>
				<ul ref={dropdown}>
					{options?.map(filter => (
						<SortFilterItem
							name={filter?.name}
							value={filter}
							isChecked={sortValue?.value === filter.value}
							sortOnChange={sortOnChange}
						/>
					))}
				</ul>
			</div>
		</div>
	)
}

export default SortFilterDropDown
