import { faCheck, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const FilterDropDownItem = ({
	filter,
	filterController,
	isChecked,
	square
}) => {
	return (
		<li style={{ height: '40px' }}>
			<div className={`${square ? 'square' : ''}`}>
				<input
					checked={isChecked}
					onChange={() => filterController(filter)}
					id={filter}
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

			<label htmlFor={filter}>{filter}</label>
		</li>
	)
}

export default FilterDropDownItem
