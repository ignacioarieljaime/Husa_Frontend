import React from 'react'

function LetsGetRealTextBox({ data }) {
	let { structure } = data
	return (
		<div className='py-15' dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></div>
	)
}

export default LetsGetRealTextBox
