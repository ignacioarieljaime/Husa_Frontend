import React from 'react'

const ProductFeaturesWithImage = ({ data }) => {
	const { structure } = data

	return (
		<div id={data.name + data.id} class='row description-blocks align-items-center'>
			<article class='introduction text-black col-12 col-md-6 order-2 order-md-1'>
				<h4>{structure.littleTitle.value}</h4>
				<h2>{structure.title.value}</h2>
				<p>{structure.description.value}</p>
				<a href={structure.link.value}>{structure.link.title}</a>
			</article>
			<img
				src={structure.image.src}
				alt={structure.image.alt}
				class='p-0 col-12 col-md-6 order-1 order-md-2'
			/>
		</div>
	)
}

export default ProductFeaturesWithImage
