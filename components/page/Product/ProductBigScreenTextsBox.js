import React from 'react'

function ProductBigScreenTextsBox({ data }) {
	let { structure } = data
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
				</div>
			</div>
		</section>
	)
}

export default ProductBigScreenTextsBox
