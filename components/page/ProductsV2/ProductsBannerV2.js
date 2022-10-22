import React from 'react'

const ProductsBannerV2 = ({ data }) => {
	const structure = {
		image: {
			src: '',
			alt: ''
		},
		title: {
			value: 'Televisions'
		}
	}

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
					<h1 className='fs-md-3qx fw-normal mw-50 mx-auto'>
						{structure.title.value}
					</h1>
				</div>
			</div>
		</section>
	)
}

export default ProductsBannerV2
