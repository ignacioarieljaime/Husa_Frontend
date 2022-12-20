import CustomImage from 'components/common/CustomImage'
import React from 'react'

function ProductFeatureWithImage({ data }) {
	let { structure } = data
	return (
		<section>
			<div
				style={{ background: structure?.backgroundColor?.value }}
				className={`row description-blocks theme-${structure?.theme?.value} ${
					structure?.theme?.value === 'dark' ? 'text-white' : ''
				} align-items-center ${
					structure?.direction?.value === 'rtl' ? 'flex-row-reverse' : ''
				}`}>
				<article className='introduction col-12 col-md-6 order-2'>
					<h4>{structure?.littleTitle?.value}</h4>

					<h2>{structure?.title?.value}</h2>
					<p>{structure?.description?.value}</p>
				</article>
				<CustomImage
					src={structure?.image?.src}
					alt={structure?.image?.alt}
					wrapperClass='p-0 col-12 col-md-6 order-1'
				/>
			</div>
		</section>
	)
}

export default ProductFeatureWithImage
