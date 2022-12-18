import React, { useEffect, useState } from 'react'

const ProductMoreTv = ({ data }) => {
	const { structure } = data
	const [text, setText] = useState()

	useEffect(() => {
		setText(structure.description.value)
	}, [])

	return (
		<div
			id={data.name + data.id}
			class='white-advertisement-banner article bottom-border-sm'>
			<h2>{structure.title.value}</h2>
			<div dangerouslySetInnerHTML={{ __html: text }}></div>
		</div>
	)
}

export default ProductMoreTv
