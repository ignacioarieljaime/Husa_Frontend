import React, { useEffect, useState } from 'react'

function LetsGetRealTextBox({ data }) {
	let { structure } = data
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])

	return structure?.template?.value === 'v1' ? (
		<div
			className='py-15'
			dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></div>
	) : (
		<section>
			<div className={`lets_get_real_text_box ${structure?.theme?.value}`}>
				<div
					className='content'
					style={
						structure?.textColor?.value && {
							color: structure?.textColor?.value
						}
					}
					dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></div>
			</div>
		</section>
	)
}

export default LetsGetRealTextBox
