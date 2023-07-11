import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import React from 'react'

const FilterDropDownItem = props => {
	let { title, filter_value, filterHandler, allFilters,isChecked } = props
	const router = useRouter()

	return (
		<li>
			<div>
				<input
					checked={isChecked}
					onChange={() => filterHandler(props)}
					id={filter_value}
					type='checkbox'
				/>
				<span></span>
				<FontAwesomeIcon icon={faCircleCheck} color={'#00A29C'} size={'13px'} />
			</div>

			<label htmlFor={filter_value}>{title}</label>
		</li>
	)
}

export default FilterDropDownItem
