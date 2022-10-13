import React, { useEffect, useState } from 'react'

function ProductFilterAideItem({
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
