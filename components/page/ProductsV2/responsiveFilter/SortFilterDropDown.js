import AngleArrow from 'components/icons/AngleArrow'
import React, { useEffect, useRef, useState } from 'react'
import SortFilterItem from './SortFilterItem'

const options = [
	{
		name: 'Newest',
		value: 'newest'
	},
	{
		name: 'Oldest',
		value: 'oldest'
	}
]

const SortFilterDropDown = ({ sortValue, sortOnChange }) => {
	const dropdown = useRef()
	const [dropdownStatus, setDropdownStatus] = useState(false)

    useEffect(() => {
        setDropdownStatus(sortValue?.value || false)
    }, [sortValue])
    

	return (
		<div className='filter_drop_down'>
			<div
				onClick={() => setDropdownStatus(state => !state)}
				className={`name_button ${dropdownStatus && "drop_down_is_open"}`}>
				<h6>sort</h6>
				<AngleArrow />
			</div>
			<div
				style={{
					height: dropdownStatus ? dropdown.current.offsetHeight + 'px' : 0
				}}
				className='filter_list'>
				<ul ref={dropdown}>
					{options?.map(filter => (
						<SortFilterItem
							name={filter?.name}
							value={filter.value}
							sortValue={sortValue}
							sortOnChange={sortOnChange}
						/>
					))}
				</ul>
			</div>
		</div>
	)
}

export default SortFilterDropDown
