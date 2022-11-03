import React from 'react'

const ExtendedWarrantyFormStepSelectionCard = ({
	image,
	title,
	model,
	plan
}) => {
	return (
		<div className='selection-card'>
			<div className='label'>You’ve Selected</div>
			<div className='custom-card'>
				<div className='row justify-content-evenly align-items-center flex-column flex-md-row mx-0'>
					<div className='product'>
						<img src={image} alt={image?.alt} className='image' />
						<div className='text'>
							<h3 className='model'>{model}</h3>
							<h2 className='title'>{title}</h2>
						</div>
					</div>
					<div className='plan'>
						<div className='d-flex justify-content-center align-items-center'>
							<span>{plan?.duration} Years</span>
							<span className='text-primary'> | </span>
							<span>${plan?.price} USD</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ExtendedWarrantyFormStepSelectionCard
