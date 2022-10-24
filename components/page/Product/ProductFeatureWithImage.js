import React from 'react'

function ProductFeatureWithImage({ data }) {
	let { structure } = data
	console.log(structure)
	return (
		<section>
			<div
				class={`row description-blocks theme-${
					structure?.theme?.value
				} ${structure?.theme?.value === "dark" ? "text-white":""} align-items-center ${
					structure?.direction?.value === 'rtl' ? 'flex-row-reverse' : ''
				}`}>
				<article class='introduction col-12 col-md-6 order-2'>
					<h4>{structure?.littleTitle?.value}</h4>

					<h2>{structure?.title?.value}</h2>
					<p>{structure?.description?.value}</p>
				</article>
				<img
					src={structure?.image?.src}
					alt={structure?.image?.alt}
					class='p-0 col-12 col-md-6 order-1'
				/>
			</div>
		</section>
	)
}

export default ProductFeatureWithImage
