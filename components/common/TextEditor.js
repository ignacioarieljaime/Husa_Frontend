import React, { useEffect, useState } from 'react'

function TextEditor({ data }) {
	let { structure } = data
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(structure)
	}, [])
	return (
		<section
			style={{
				backgroundColor: content?.backgroundColor?.value
			}}>
			<article
				style={{
					maxWidth: `${content?.width?.value}px`
				}}
				className={`${'dark'} article text-editor text_editor mx-auto pt-5 px-6 pb-6`}
				dangerouslySetInnerHTML={{
					__html: content?.text?.value ? content?.text?.value : content?.text
				}}></article>
		</section>
	)
}

export default TextEditor
