import React from 'react'

const ProductWhereToBuy = ({ data }) => {
	const { structure } = data
	return (
		<div id={data.name + data.id} class='buy-green-banner'>
			<h2>{structure.title.value}</h2>
			<h2>{structure.littleTitle.value}</h2>
			<button class='btn btn-turquoise'>{structure.link.title}</button>
		</div>
	)
}

export default ProductWhereToBuy
