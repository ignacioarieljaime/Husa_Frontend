import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const AboutUsSimpleTextBox = ({ data }) => {
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(data?.structure)
	}, [])
	return (
		<section>
			<div id={data?.name + data?.id} className='aboutus_text_box'>
				<div className='content'>
					<h3 className='title'>{content?.title?.value}</h3>
					<div
						className='text'
						dangerouslySetInnerHTML={{ __html: content?.text?.value }}></div>
				</div>
			</div>
		</section>
	)
}

export default AboutUsSimpleTextBox
