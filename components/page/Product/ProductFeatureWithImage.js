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
				} align-items-stretch ${
					structure?.direction?.value === 'rtl' ? 'flex-row-reverse' : ''
				}`}>
				<article className='introduction col-12 col-md-6 order-2'>
					<h4
						style={{
							color: structure?.theme?.value === 'dark' ? '#fff' : '#000'
						}}>
						{structure?.littleTitle?.value}
					</h4>

					<h4
						style={{
							lineHeight: 'unset',
							fontSize: '42px',
							color: structure?.theme?.value === 'dark' ? '#fff' : '#000'
						}}>
						{structure?.title?.value}
					</h4>
					<p
						style={{
							color: structure?.theme?.value === 'dark' ? '#fff' : '#000'
						}}>
						{structure?.description?.value}
					</p>
				</article>
				<CustomImage
					src={structure?.image?.src}
					alt={structure?.image?.alt}
					wrapperClass='p-0 col-12 col-md-6 order-1'
				/>
			</div>
		</section>
		// 	<section>
		// 	<div
		// 		style={{ background: structure?.backgroundColor?.value }}
		// 		className={`product_feature_with_image theme-${
		// 			structure?.theme?.value
		// 		} ${structure?.direction?.value === 'rtl' ? 'flex-row-reverse' : ''}`}>
		// 		<article className='content'>
		// 			<h6 className='subtitle'>{structure?.littleTitle?.value}</h6>
		// 			<h3 className='title'>{structure?.title?.value}</h3>
		// 			<div className='text'>{structure?.description?.value}</div>
		// 		</article>
		// 		<div className='image_wrapper'>
		// 			<img
		// 				src={structure?.image?.src}
		// 				alt={structure?.image?.alt}
		// 				className='image'
		// 			/>
		// 		</div>
		// 	</div>
		// </section>
	)
}

export default ProductFeatureWithImage
