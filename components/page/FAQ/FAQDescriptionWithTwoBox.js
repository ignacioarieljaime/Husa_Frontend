import React, { useEffect, useState } from 'react'

function FAQDescriptionWithTwoBox({ data }) {
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(data?.structure)
	}, [])
	return (
		<article className='article faq-descriptions'>
			<div
				className='mx-auto'
				style={{ maxWidth: content?.width?.value + 'px' }}>
				<div
					className='d-none'
					dangerouslySetInnerHTML={{ __html: content?.title1?.value }}></div>
				<div className='row justify-content-evenly justify-content-lg-between mx-0 mb-7'>
					<div
						className='col-12 col-sm-5'
						dangerouslySetInnerHTML={{
							__html: content?.leftTitle?.value
						}}></div>
					<div
						className='col-12 col-sm-5'
						dangerouslySetInnerHTML={{
							__html: content?.rightTitle?.value
						}}></div>
				</div>
			</div>
		</article>
	)
}

export default FAQDescriptionWithTwoBox
