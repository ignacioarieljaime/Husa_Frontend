import { faCheck, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import React from 'react'

const FilterDropDownItem = props => {
	let { title, filter_value, filterHandler, allFilters, isChecked, square } =
		props
	const router = useRouter()

	return (
		<li style={{ height: '40px' }}>
			<div className={`${square ? 'square' : ''}`}>
				<input
					checked={isChecked}
					onChange={() => filterHandler(props)}
					id={filter_value}
					type='checkbox'
				/>
				<span className='hidden'></span>

				<span className='svg'>
					{square ? (
						<FontAwesomeIcon icon={faCheck} color={'#fff'} size='2xs' />
					) : (
						<FontAwesomeIcon
							icon={faCircleCheck}
							color={'#00A29C'}
							size={'13px'}
						/>
					)}
				</span>
			</div>

			<label htmlFor={filter_value}>{title}</label>
		</li>
	)
}

export default FilterDropDownItem
