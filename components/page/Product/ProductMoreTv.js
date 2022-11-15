import React from 'react'

const ProductMoreTv = ({ data }) => {
	const { structure } = data

	return (
		<div id={data.name + data.id} class='white-advertisement-banner article bottom-border-sm'>
			<h2>{structure.title.value}</h2>
			<p>{structure.description.value}</p>
		</div>
	)
}

export default ProductMoreTv
