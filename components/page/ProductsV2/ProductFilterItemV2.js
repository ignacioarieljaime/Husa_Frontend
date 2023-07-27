import React, { useEffect, useState } from 'react'
import CustomCheckBox from 'components/common/CustomCheckBox'
import { useRouter } from 'next/router'

function ProductFilterItemV2({
	checkboxConditionRender,
	filterController,
	data,
	filterParentId,
	passedFilter,
	filterType,
	category,
	showProductFilterCount
}) {
	const router = useRouter()
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
		} else {
			setCheckBoxCondition(false)
		}
	}, [passedFilter, router.query])

	const showTotalCount = () => {
		// if (passedFilter.length) {
		let { items, value } = category
		return items.find(item => item.id === value) ? <>({data?.total})</> : null
		// }
		// return null
	}

	return (
		<li>
			<div className='d-flex gap-4'>
				<CustomCheckBox
					checked={checkBoxCondition}
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
					{showProductFilterCount && (
						<span style={{ marginLeft: '5px' }}>{showTotalCount()}</span>
					)}
				</label>
			</div>
		</li>
	)
}

export default ProductFilterItemV2
