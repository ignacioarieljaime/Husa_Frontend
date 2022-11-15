import React from 'react'

function UHDNewsItem({ data }) {
	let { image, title, description } = data
	return (
		<div className='col-12 col-md-4'>
			<article className='article text-start'>
				<img
					src={image?.src}
					alt={image?.alt}
					width='100%'
					className='img-box-shadow-hover'
				/>
				<div className='px-4 divider-border position-relative'>
					<h4 className='fs-2 mb-3 mt-13'>{title?.value}</h4>
					<p
						className='fw-normal m-auto mb-4'
						dangerouslySetInnerHTML={{ __html: description?.value }}></p>
				</div>
			</article>
		</div>
	)
}

export default UHDNewsItem
