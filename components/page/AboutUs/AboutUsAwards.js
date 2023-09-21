import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const AboutUsAwards = ({ data }) => {
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(data?.structure)
	}, [])
	return (
		<section>
			<div id={data?.name + data?.id} className='aboutus_awards'>
				<div className='content'>
					<h3
						className='title'
						dangerouslySetInnerHTML={{ __html: content?.title?.value }}></h3>
					<div
						className='text'
						dangerouslySetInnerHTML={{ __html: content?.text?.value }}></div>
				</div>
			</div>
		</section>
	)
}

export default AboutUsAwards
