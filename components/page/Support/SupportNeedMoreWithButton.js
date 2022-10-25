import React from 'react'

// image
import ImageBg from 'public/assets/images/support/support-bg.jpg'

function SupportNeedMoreWithButton({ data }) {
	let structure = {
		image: {
			src: '',
			alt: ''
		},
		title: {
			value: ''
		},
		link: {
			title: '',
			value: ''
		}
	}
	return (
		<section>
			<div className='heading support-heading support-new-heading'>
				<img src={structure.image.src} alt={structure.image.alt} width='100%' />
				<div className='heading-text'>
					<h4
						className='text-white fs-2hx fw-normal mb-7'
						style={{ color: '#fff' }}>
						{structure.title.value}
					</h4>
					<a
						href={structure.link.value}
						className='n-btn outline-white transparent'>
						{structure.link.title}
					</a>
				</div>
			</div>
		</section>
	)
}

export default SupportNeedMoreWithButton
