import React from 'react'

const ProductsBannerV2 = ({ data }) => {
	const { structure } = data

	return (
		<section>
			<div className='heading'>
				<img
					src={structure?.image?.src}
					alt={structure?.image?.alt}
					width={'100%'}
					style={{ height: '422px' }}
					className={'img-fluid'}
				/>
				<div className='heading-text'>
					<div
						dangerouslySetInnerHTML={{ __html: structure?.title?.value }}
						className='fs-md-3qx fw-normal text-white mw-50 mx-auto'></div>
				</div>
			</div>
		</section>
	)
}

export default ProductsBannerV2
