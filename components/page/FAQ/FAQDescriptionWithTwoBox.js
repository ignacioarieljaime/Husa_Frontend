import React from 'react'

function FAQDescriptionWithTwoBox({ data }) {
	let { structure } = data
	return (
		<article className='article faq-descriptions'>
			<div
				className='mx-auto'
				style={{ maxWidth: structure?.width?.value + 'px' }}>
				<div
					className='d-none'
					dangerouslySetInnerHTML={{ __html: structure?.title1?.value }}></div>
				<div className='row justify-content-evenly justify-content-lg-between mx-0 mb-7'>
					<div
						className='col-12 col-sm-5 lh-base'
						dangerouslySetInnerHTML={{
							__html: structure?.leftTitle?.value
						}}></div>
					<div
						className='col-12 col-sm-5 lh-base'
						dangerouslySetInnerHTML={{
							__html: structure?.rightTitle?.value
						}}></div>
				</div>
			</div>
		</article>
	)
}

export default FAQDescriptionWithTwoBox
