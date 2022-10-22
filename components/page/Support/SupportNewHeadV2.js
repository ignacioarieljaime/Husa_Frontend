import React from 'react'

// image
import Image from 'public/assets/images/support/support-bg.jpg'

function SupportNewHeadV2({ data }) {
	let structure = {
		image: {
			src: '',
			alt: ''
		},
		title: {
			value: ''
		}
	}

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
