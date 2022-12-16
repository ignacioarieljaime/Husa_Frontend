import React, { useEffect, useState } from 'react'

function LetsGetRealTextBox({ data }) {
	let { structure } = data
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.title?.value)
	}, [])

	return (
		<div className='py-15' dangerouslySetInnerHTML={{ __html: text }}></div>
	)
}

export default LetsGetRealTextBox
