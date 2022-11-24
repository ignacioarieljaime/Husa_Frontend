import React from 'react'

function ProductBigScreenTextsBox({ data }) {
	let { structure } = data
	return (
		<section>
			<div className='tiny-banner product-big-screen'>
				<div className='container px-6 px-lg-0 py-12'>
					<article className='article text-center'>
						<h2 className='text-black mb-12 text-primary d-flex flex-column'>
							{structure?.blackTitle?.value}
							<span className='text-primary'>
								{' '}
								{structure?.coloredTitle?.value}
							</span>
						</h2>
						<div
							dangerouslySetInnerHTML={{
								__html: structure?.paragraph?.value
							}}></div>
					</article>
				</div>
			</div>
		</section>
	)
}

export default ProductBigScreenTextsBox
