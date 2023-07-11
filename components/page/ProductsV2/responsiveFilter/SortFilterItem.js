import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SortFilterItem = ({name,value,sortOnChange,sortValue}) => {
  return (
		<li>
			<div>
				<input
                checked={sortValue?.value === value}
                onChange={()=>sortOnChange({value,name})}
					id={name}
					type='checkbox'
				/>
				<span></span>
				<FontAwesomeIcon icon={faCircleCheck} color={'#00A29C'} size={'13px'} />
			</div>

			<label htmlFor={name}>{name}</label>
		</li>
  )
}

export default SortFilterItem