import React from 'react'

function TVAndAudioHead({ data: { structure } }) {
	return (
		<section>
			<div className='header-secondary'>
				<img
					src={structure.image.src}
					alt={structure.image.alt}
					width='100%'
					height='100%'
				/>
			</div>
		</section>
	)
}

export default TVAndAudioHead
