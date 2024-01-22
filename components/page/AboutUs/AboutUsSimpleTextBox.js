import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const AboutUsSimpleTextBox = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])
	return (
		<section>
			<div id={data?.name + data?.id} className='aboutus_text_box'>
				<div className='content'>
					<h3 className='title'>{structure?.title?.value}</h3>
					<div
						className='text'
						dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
				</div>
			</div>
		</section>
	)
}

export default AboutUsSimpleTextBox
