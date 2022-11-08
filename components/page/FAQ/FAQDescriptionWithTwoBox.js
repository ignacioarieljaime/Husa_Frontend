import React from 'react'

function FAQDescriptionWithTwoBox({ data }) {
	let { structure } = data
	return (
		<article className='article'>
			<div
				className='mx-auto'
				style={{ maxWidth: structure?.width?.value + 'px' }}>
				<div
					dangerouslySetInnerHTML={{ __html: structure?.title1?.value }}></div>
				<div className='row justify-content-center mx-0'>
					<div
						className='col-12 col-sm-5'
						dangerouslySetInnerHTML={{
							__html: structure?.leftTitle?.value
						}}></div>
					<div
						className='col-12 col-sm-5'
						dangerouslySetInnerHTML={{
							__html: structure?.rightTitle?.value
						}}></div>
				</div>
			</div>
		</article>
	)
}

export default FAQDescriptionWithTwoBox
