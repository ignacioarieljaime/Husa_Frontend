import React, { useEffect, useState } from 'react'

function TextEditor({ data }) {
	let { structure } = data
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.text?.value ? structure?.text?.value : structure?.text)
	}, [])
	return (
		<article
			style={{
				maxWidth: `${structure?.width?.value}px`,
				backgroundColor: structure?.backgroundColor?.value
			}}
			className={'article text-editor text_editor mx-auto pt-5 px-6 pb-6'}
			dangerouslySetInnerHTML={{
				__html: text
			}}></article>
	)
}

export default TextEditor
