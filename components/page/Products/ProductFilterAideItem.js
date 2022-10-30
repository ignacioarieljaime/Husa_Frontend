import React, { useEffect, useState } from 'react'

function ProductFilterAideItem({
	checkboxConditionRender,
	filterController,
	data,
	checkCondition
}) {
	const [checkBoxCondition, setCheckBoxCondition] = useState()
	useEffect(() => {
		setCheckBoxCondition(false)
	}, [checkboxConditionRender])
	useEffect(() => {
		setCheckBoxCondition(
			checkCondition.find(item => item.filter_value === data.filter_value)
				? true
				: false
		)
	}, [])

	return (
		<li>
			<div>
				<input
					onChange={e => {
						setCheckBoxCondition(!checkBoxCondition)
						filterController(e, data)
					}}
					checked={checkBoxCondition}
					name='filter'
					type='checkbox'
				/>
				<label htmlFor='filter'>{data.title}</label>
			</div>
			<span>{data.total}</span>
		</li>
	)
}

export default ProductFilterAideItem
