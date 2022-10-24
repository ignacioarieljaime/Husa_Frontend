import React from 'react'

function ULEDImageAndTextItem({ image, littleTitle, title, description }) {
	return (
		// bg-black ,
		<div className='row description-blocks  align-items-center'>
			<article className='introduction text-black col-12 col-md-6 order-2 order-md-1'>
				<h4>{littleTitle}</h4>
				<h2>{title}</h2>
				<p>{description}</p>
			</article>
			<img
				src={image?.src}
				alt={image?.alt}
				className='p-0 col-12 col-md-6 order-1 order-md-2'
			/>
		</div>
	)
}

export default ULEDImageAndTextItem
