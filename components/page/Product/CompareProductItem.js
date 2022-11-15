import React, { useEffect, useState } from 'react'

function CompareProductItem({ data }) {
	let { products } = data
	const [values, setValues] = useState([])
	useEffect(() => {
		getCustomFiledValue()
	}, [])

	const getCustomFiledValue = () => {
		let productCustomField = []
		Object.keys(products).forEach(key => {
			productCustomField.push(products[key])
		})
		setValues(productCustomField)
	}
	return (
		<tr>
			<td>{data.name}</td>
			{values.map((item, index) => (
				<td key={'item-row-' + index}>{item.value ? item.value : '----'}</td>
			))}
		</tr>
	)
}

export default CompareProductItem
