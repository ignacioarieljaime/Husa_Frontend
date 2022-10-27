import React from 'react'

import image from '../../../public/assets/images/blockImage.png'

const ExtendedWarrantyTextBlock = ({ data }) => {
	const structure = {
		image: {
			src: image.src
		},
		title: {
			value: 'Protect it today.\n Extend your peace\nof mind for years.'
		},
		tinyTitle: {
			value: 'Extended your Service Plan'
		},
		description: {
			value:
				"With our Hisense Extended Service Plan, you get either a repair or replacement if your Hisense product experiences an electrical or mechanical malfunction due to a manufacturing defect after the manufacturer's warranty expires."
		}
	}

	return (
		<section>
			<div className='row justify-content-center align-items-center extended-warranty-text-block mb-4 mb-md-2'>
				<div className='col-12 col-md-6 order-2 order-md-1'>
					<div className='text-block-content'>
						<h4 className='tiny-title'>{structure.tinyTitle.value}</h4>
						<h2 className='title fs-2hx'>{structure.title.value}</h2>
						<p className='description'>{structure.description.value}</p>
					</div>
				</div>
				<div className='col-12 col-md-6 order-1 order-md-2 mb-8 mb-md-0'>
					<img
						src={structure.image.src}
						alt={structure.image.alt}
						className='text-block-image'
					/>
				</div>
			</div>
		</section>
	)
}

export default ExtendedWarrantyTextBlock
