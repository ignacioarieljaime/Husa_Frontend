import React, { useEffect, useState } from 'react'
import CustomImage from '../../common/CustomImage'

const ProductsBannerV2 = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])

	return (
		<section>
			<div className='heading product_banner_v2'>
				<CustomImage
					src={structure?.image?.src}
					alt={structure?.image?.alt}
					wrapperWidth={'100%'}
					wrapperHeight={'422px'}
					className={'img-fluid'}
				/>
				<div className='heading-text'>
					<article className='large_article grid_banner'>
						<div
							dangerouslySetInnerHTML={{ __html: structure?.title?.value }}
							className='fw-normal text-white px-3 title'></div>
						<div
							dangerouslySetInnerHTML={{ __html: structure?.subtitle?.value }}
							className='fw-normal text-white px-3 text'></div>
					</article>
				</div>
			</div>
		</section>
	)
}

export default ProductsBannerV2
