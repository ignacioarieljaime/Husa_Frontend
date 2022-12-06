import React from 'react'

function SupportNewHeadV2({ data }) {
	return (
		<section>
			<div className='heading support-heading support-new-heading'>
				<img src={structure.image.src} alt={structure.image.alt} width='100%' />
				<div className='heading-text'>
					<h1 className='fs-3x text-white fw-normal'>
						{structure.title.value}
					</h1>
				</div>
			</div>
		</section>
	)
}

export default SupportNewHeadV2
