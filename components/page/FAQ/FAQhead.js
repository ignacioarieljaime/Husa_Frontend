import React from 'react'

function FAQhead({ data }) {
	let { structure } = data
	return (
		<section>
			<div
				style={{ backgroundColor: structure?.color?.value }}
				className='faq-single-color-header'>
				<div className='heading-text'>
					<h3>{structure?.title?.value}</h3>
				</div>
			</div>
		</section>
	)
}

export default FAQhead
