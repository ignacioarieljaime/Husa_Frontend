import React, { useEffect, useState } from 'react'
import CustomCheckBox from 'components/common/CustomCheckBox'

function ProductFilterItemV2({
	checkboxConditionRender,
	filterController,
	data
}) {
	const [checkBoxCondition, setCheckBoxCondition] = useState(false)
	useEffect(() => {
		setCheckBoxCondition(false)
	}, [checkboxConditionRender])

	return (
		<li>
			<div>
				<CustomCheckBox
					checked={checkBoxCondition}
					className='me-3'
					onClick={e => {
						setCheckBoxCondition(!checkBoxCondition)
						filterController(e, data)
					}}
				/>
				<label htmlFor='filter' className='filter-label'>
					{data.title}
				</label>
			</div>
		</li>
	)
}

export default ProductFilterItemV2
