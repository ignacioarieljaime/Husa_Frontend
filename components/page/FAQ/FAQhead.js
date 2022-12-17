import React, { useEffect, useState } from 'react'

function FAQhead({ data }) {
	let { structure } = data
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.title?.value)
	}, [])
	return (
		<section>
			<div
				style={{
					backgroundColor: structure?.color?.value,
					height: structure?.height?.value + 'px'
				}}
				className='faq-single-color-header'>
				<div
					className='heading-text'
					dangerouslySetInnerHTML={{ __html: text }}></div>
			</div>
		</section>
	)
}

export default FAQhead
