import React, { useEffect, useState } from 'react'

function LetsGetRealTextBox({ data }) {
	let { structure } = data
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(structure)
	}, [])

	return content?.template?.value === 'v1' ? (
		<div
			className='py-15'
			dangerouslySetInnerHTML={{ __html: content?.title?.value }}></div>
	) : (
		<section>
			<div className={`lets_get_real_text_box ${content?.theme?.value}`}>
				<div
					className='content'
					style={
						content?.textColor?.value && {
							color: content?.textColor?.value
						}
					}
					dangerouslySetInnerHTML={{ __html: content?.title?.value }}></div>
			</div>
		</section>
	)
}

export default LetsGetRealTextBox
