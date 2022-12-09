import React from 'react'
import CustomImage from '../../common/CustomImage'

const ProductsBannerV2 = ({ data }) => {
	const { structure } = data

	return (
		<section>
			<div className='heading'>
				<CustomImage
					src={structure?.image?.src}
					alt={structure?.image?.alt}
					wrapperWidth={'100%'}
					wrapperHeight={'422px'}
					className={'img-fluid'}
				/>
				<div className='heading-text'>
					<article className='large_article'>
						<div
							dangerouslySetInnerHTML={{ __html: structure?.title?.value }}
							className='fs-md-3qx fw-normal text-white mw-50 mx-auto'></div>
					</article>
				</div>
			</div>
		</section>
	)
}

export default ProductsBannerV2
