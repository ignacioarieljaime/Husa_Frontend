import React, { useState, useEffect } from 'react'

const GoogleTvTextBox = ({ data: { structure } }) => {
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.text?.value)
	}, [])
	return (
		<section
			className={`google-tv-text-box ${
				structure?.theme?.value === 'dark' ? 'dark' : 'light'
			}`}>
			<article className='article'>
				<div dangerouslySetInnerHTML={{ __html: text }}></div>
			</article>
		</section>
	)
}

export default GoogleTvTextBox
