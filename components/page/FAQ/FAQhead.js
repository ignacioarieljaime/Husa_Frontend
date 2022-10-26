import React from 'react'

function FAQhead({ data }) {
	let { structure } = data
	return (
		<section>
			<div
				style={{
					backgroundColor: structure?.color?.value,
					height: structure?.height?.value
				}}
				className='faq-single-color-header'>
				<div
					className='heading-text'
					dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></div>
			</div>
		</section>
	)
}

export default FAQhead
