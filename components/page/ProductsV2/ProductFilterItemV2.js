import React, { useEffect, useState } from 'react'
import CustomCheckBox from 'components/common/CustomCheckBox'

function ProductFilterItemV2({
	checkboxConditionRender,
	filterController,
	data,
	filterParentId,
	passedFilter,
	filterType
}) {
	const [checkBoxCondition, setCheckBoxCondition] = useState(false)
	useEffect(() => {
		setCheckBoxCondition(false)
	}, [checkboxConditionRender])

	useEffect(() => {
		if (passedFilter.length > 0) {
			passedFilter.forEach(item => {
				if (item.id === filterParentId) {
					setCheckBoxCondition(
						item.values.indexOf(data.title) < 0 ? false : true
					)
				}
			})
		}
	}, [])

	return (
		<li>
			<div className='d-flex'>
				<CustomCheckBox
					checked={checkBoxCondition}
					className='me-3'
					onClick={e => {
						setCheckBoxCondition(!checkBoxCondition)
						filterController(
							e,
							{ ...data, filterId: filterParentId },
							filterType
						)
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
