import React from 'react'

const ULEDTechItem = ({ image, description }) => {
	return (
		<div className='p-5'>
			<div className='p-2 rounded-4 bg-light-2'>
				<img src={image?.src} alt={image?.alt} width='120' />
			</div>
			<div className='jarg-text-section mt-5'>
				<span className='jarg-toggle-text'>{description}</span>
				<span className='jarg-toggle-text d-none'>
					Always shows the best possible picture.
				</span>
			</div>
		</div>
	)
}

export default ULEDTechItem
