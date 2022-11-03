import React from 'react'

const ExtendedWarrantyTextBlock = ({ data: { structure } }) => {
	return (
		<section>
			<div className='row justify-content-center align-items-center extended-warranty-text-block mb-4 mb-md-2'>
				<div className='col-12 col-md-6 order-2 order-md-1'>
					<div
						className='text-block-content'
						dangerouslySetInnerHTML={{
							__html: structure?.text?.value
						}}></div>
				</div>
				<div className='col-12 col-md-6 order-1 order-md-2 mb-8 mb-md-0'>
					<img
						src={structure?.image?.src}
						alt={structure?.image?.alt}
						className='text-block-image'
					/>
				</div>
			</div>
		</section>
	)
}

export default ExtendedWarrantyTextBlock
