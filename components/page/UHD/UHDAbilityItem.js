import React from 'react'

function UHDAbilityItem({ data: { image, smallImage, title, description } }) {
	return (
		<div className='col-12 col-md-6 mb-18 mb-md-0'>
			<img src={image?.src} alt={image?.alt} className='w-100' />
			<article className='article text-center mt-12'>
				<img src={smallImage?.src} alt={smallImage?.alt} width='250' />
				<div className='px-4'>
					<h2 className='fs-2 mb-3 mt-13'>{title?.value}</h2>
					<p className='fw-normal text-muted mw-50 m-auto mb-4'>
						{description?.value}
					</p>
				</div>
			</article>
		</div>
	)
}

export default UHDAbilityItem
