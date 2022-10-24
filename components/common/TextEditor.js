import React from 'react'

function TextEditor({ data }) {
	let { structure } = data
	return (
		<article
			style={{ maxWidth: `${structure?.width?.value}px` }}
			className={'mx-auto py-10'}
			dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></article>
	)
}

export default TextEditor
