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
			<td>
				{data.id === 5
					? ''
					: data.id === 6
					? 'series'
					: data.name === 'Dropbox Assets'
					? 'Product type'
					: data.name}
			</td>
			{values.map((item, index) => (
				<td key={'item-row-' + index}>
					{!item.value
						? '----'
						: item.value.includes('\\u')
						? item.value.split('\\u')[0]
						: item.value}
				</td>
			))}
		</tr>
	)
}

export default CompareProductItem
