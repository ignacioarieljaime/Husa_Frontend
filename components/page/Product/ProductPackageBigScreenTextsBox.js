import CustomImage from 'components/common/CustomImage'
import React from 'react'

const ProductPackageBigScreenTextsBox = ({ data: { structure } }) => {
	console.log(structure)
	return (
		<section>
			<div className='tiny-banner product-big-screen'>
				<div className='container px-6 px-lg-0 py-12'>
					<article className='article text-center'>
						<h2 className='text-black mb-12 text-primary-new d-flex flex-column'>
							{structure?.blackTitle?.value}
							<span className='text-primary-new'>
								{' '}
								{structure?.coloredTitle?.value}
							</span>
						</h2>
						<p
							dangerouslySetInnerHTML={{
								__html: structure?.paragraph?.value
							}}></p>
					</article>
					{structure?.image?.src && (
						<CustomImage
							src={structure?.image?.src}
							alt={structure?.image?.alt}
							wrapperWidth='100%'
						/>
					)}
				</div>
			</div>
		</section>
	)
}

export default ProductPackageBigScreenTextsBox
