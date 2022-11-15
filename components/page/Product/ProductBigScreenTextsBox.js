import React from 'react'

function ProductBigScreenTextsBox({ data }) {
	let { structure } = data
	return (
		<section>
			<div class='tiny-banner p-md-4'>
				<div class='container px-6 px-md-8 py-12'>
					<article class='article text-center'>
						<h2 class='text-black mb-12'>
							{structure?.blackTitle?.value}
							<span class='d-block text-primary'>
								{' '}
								{structure?.coloredTitle?.value}
							</span>
						</h2>

						<div
							class='fw-normal text-black m-auto'
							dangerouslySetInnerHTML={{ __html: structure?.paragraph?.value }}>
						</div>
					</article>
				</div>
			</div>
		</section>
	)
}

export default ProductBigScreenTextsBox
