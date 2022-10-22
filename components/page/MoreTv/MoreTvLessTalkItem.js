import React from 'react'

const MoreTVLessTalkItem = ({ image, title }) => {
	return (
		<div className='tech-items-more-tv aos-init' data-aos='slide-right'>
			<div>
				<img src={image.src} alt={image.alt} className='w-sm-100' width='300' />
			</div>
			<h6>{title}</h6>
		</div>
	)
}

export default MoreTVLessTalkItem
