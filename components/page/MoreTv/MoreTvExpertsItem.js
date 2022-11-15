import React from 'react'

const MoreTVExpertsItem = ({ quote, image }) => {
	return (
		<div className='mb-10'>
			<div className='position-relative px-20'>
				<span className='double-quote start'>“</span>
				<h5 className='fs-2hx fw-normal text-center'>{quote}</h5>
				<span className='double-quote end'>“</span>
			</div>
			<div className='text-center'>
				<img
					src={image.src}
					className={'double-quote-image'}
					height={'117'}
					alt={image.alt}
				/>
			</div>
		</div>
	)
}

export default MoreTVExpertsItem
