import React from 'react'

function TextEditor({ data }) {
	let { structure } = data
	return (
		<article
			style={{ maxWidth: `${structure?.width?.value}px` }}
			className={'article text-editor mx-auto pt-5 px-6 pb-6'}
			dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></article>
	)
}

export default TextEditor
