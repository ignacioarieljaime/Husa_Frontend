import React from 'react'

function ProductBigScreenTextsBox({ data }) {
	let { structure } = data
	return (
		<section>
			<div class='tiny-banner product-big-screen'>
				<div class='container px-6 px-lg-0 py-12'>
					<article class='article text-center'>
						<h2 class='text-black mb-12'>
							{structure?.blackTitle?.value}
							<span class='text-primary'>
								{' '}
								{structure?.coloredTitle?.value}
							</span>
						</h2>
						<p>{structure?.paragraph?.value}</p>
					</article>
				</div>
			</div>
		</section>
	)
}

export default ProductBigScreenTextsBox
