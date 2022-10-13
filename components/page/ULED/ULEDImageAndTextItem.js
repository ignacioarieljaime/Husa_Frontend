import React from 'react'

function ULEDImageAndTextItem({ data: { structure } }) {
	let { image, largeTitle, paragraph, smallTitle } = structure
	return (
		// bg-black ,
		<div className='row description-blocks  align-items-center'>
			<article className='introduction text-black col-12 col-md-6 order-2 order-md-1'>
				<h4>{smallTitle.value}</h4>
				<h2>{largeTitle.value}</h2>
				<p>{paragraph.value}</p>
			</article>
			<img
				src={image.src}
				alt={image.alt}
				className='p-0 col-12 col-md-6 order-1 order-md-2'
			/>
		</div>
	)
}

export default ULEDImageAndTextItem
