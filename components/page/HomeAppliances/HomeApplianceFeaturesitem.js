import React from 'react'

const HomeApplianceFeaturesitem = ({
	data: { Note, image, paragraph, coloredTitle, grayTitle }
}) => {
	return (
		<div className='cool-features-item p-3 p-md-7 p-lg-12'>
			<img src={image?.src} alt={image?.alt} className='image' />
			<div className='divider-border position-relative'>
				<h3 className='title'>{grayTitle?.value}</h3>
				<p className='colored-title'>{coloredTitle?.value}</p>
				<p className='paragraph'>{paragraph?.value}</p>
				{Note?.value && <p className='note'>* {Note?.value}</p>}
			</div>
		</div>
	)
}

export default HomeApplianceFeaturesitem
