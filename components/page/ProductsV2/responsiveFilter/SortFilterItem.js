import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SortFilterItem = ({ name, value, sortOnChange, isChecked }) => {
	return (
		<li>
			<div>
				<input
					checked={isChecked}
					onChange={() => sortOnChange({ value, name })}
					id={name}
					type='checkbox'
				/>
				<span className='hidden'></span>
				<span className='svg'>
					<FontAwesomeIcon
						icon={faCircleCheck}
						color={'#00A29C'}
						size={'13px'}
					/>
				</span>
			</div>

			<label htmlFor={name}>{name}</label>
		</li>
	)
}

export default SortFilterItem
