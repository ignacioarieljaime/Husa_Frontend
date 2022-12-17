import React, { useEffect, useState } from 'react'

function ProductBigScreenTextsBox({ data }) {
	let { structure } = data
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.paragraph?.value)
	}, [])
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
								__html: text
							}}></p>
					</article>
				</div>
			</div>
		</section>
	)
}

export default ProductBigScreenTextsBox
