import React from 'react'

// image
import Image from 'public/assets/images/4k-uled/heading.jpg'

function ULEDHead({ data: { structure } }) {
	return (
		<section>
			<div className='heading'>
				<img
					src={structure.image.src}
					alt={structure.image.alt}
					width='100%'
					height='100%'
				/>
				<div className='heading-text'>
					<h3 className='mw-50 mx-auto'>{structure.title.value}</h3>
					<a href={structure.link.value} className='btn btn-light text'>
						{structure.link.title}
					</a>
				</div>
			</div>
		</section>
	)
}

export default ULEDHead
