import React, { useEffect, useState } from 'react'

function ProductFilterAideItem({
	checkboxConditionRender,
	filterController,
	data,
	checkCondition,
	filterParentId
}) {
	const [checkBoxCondition, setCheckBoxCondition] = useState()
	useEffect(() => {
		setCheckBoxCondition(false)
	}, [checkboxConditionRender])
	useEffect(() => {
		if (checkCondition.length > 0) {
			checkCondition.forEach(item => {
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
			<div>
				<input
					onChange={e => {
						setCheckBoxCondition(!checkBoxCondition)
						filterController(e, { ...data, filterId: filterParentId })
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
