import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const NewsSingleInfoLittleBox = ({ data }) => {
	const [content, setContent] = useState()
	useEffect(() => {
		setContent(data?.text?.value)
	}, [])

	return (
		<div dangerouslySetInnerHTML={{ __html: content }}>
			{/* <h6>Full Name</h6>
			<ul>
				<li>Hisense</li>
				<li>email@hisense.com</li>
				<li>+1 (000) 000 0000</li>
			</ul> */}
		</div>
	)
}

export default NewsSingleInfoLittleBox
