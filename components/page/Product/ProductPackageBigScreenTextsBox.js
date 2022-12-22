import CustomImage from 'components/common/CustomImage'
import React, { useState, useEffect } from 'react'

const ProductPackageBigScreenTextsBox = ({ data }) => {
	const { structure } = data
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.paragraph?.value)
	}, [])
	return (
		<section>
			<div
				id={data?.name + data?.id}
				className='tiny-banner product-big-screen'>
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
								__html: text
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
