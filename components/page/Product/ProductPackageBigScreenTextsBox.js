import CustomImage from 'components/common/CustomImage'
import React from 'react'

const ProductPackageBigScreenTextsBox = ({ data: { structure } }) => {
	structure = {
		...structure,
		image: {
			src: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/00696b4a52/2-year_ScaleMaxWidthWzMwNDhd__ScaleMaxWidthWzMwNDhd.png-abmr6u.png-i687l1.png'
		}
	}
	return (
		<section>
			<div className='tiny-banner product-big-screen'>
				<div className='container px-6 px-lg-0 py-12'>
					<article className='article text-center'>
						<h2
							className={`text-black mb-12 d-flex ${
								structure?.titleOrder?.value === 'black'
									? 'flex-column'
									: 'flex-column-reverse'
							}`}>
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
							wrapperWidth='70%'
							className='mx-auto'
						/>
					)}
				</div>
			</div>
		</section>
	)
}

export default ProductPackageBigScreenTextsBox
