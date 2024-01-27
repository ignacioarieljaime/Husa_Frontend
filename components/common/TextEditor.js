import React, { useEffect, useState } from 'react'

function TextEditor({ data }) {
	let { structure } = data
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])
	return (
		<section
			style={{
				backgroundColor: structure?.backgroundColor?.value
			}}>
			<article
				style={{
					maxWidth: `${structure?.width?.value}px`
				}}
				className={`${'dark'} article text-editor text_editor mx-auto pt-5  pb-6 ${
					structure?.template?.value === 'template_2'
						? 'version_2 px-4'
						: 'px-6'
				}`}
				dangerouslySetInnerHTML={{
					__html: structure?.text?.value
						? structure?.text?.value
						: structure?.text
				}}></article>
		</section>
	)
}

export default TextEditor
