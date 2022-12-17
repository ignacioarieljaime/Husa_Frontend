import React, { useEffect, useState } from 'react'
import CustomImage from '../../common/CustomImage'

const ProductsBannerV2 = ({ data }) => {
	const { structure } = data
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.title?.value)
	}, [])

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
							dangerouslySetInnerHTML={{ __html: text }}
							className='fw-normal text-white px-3'></div>
					</article>
				</div>
			</div>
		</section>
	)
}

export default ProductsBannerV2
