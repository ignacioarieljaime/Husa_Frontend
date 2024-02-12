import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const NewsSingleInfoLittleBox = ({ data, width }) => {
	// const [content, setContent] = useState()
	// useEffect(() => {
	// 	setContent(data?.text?.value)
	// }, [])

	return (
		<div
			style={{ width: width }}
			dangerouslySetInnerHTML={{ __html: data?.text?.value }}>
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
