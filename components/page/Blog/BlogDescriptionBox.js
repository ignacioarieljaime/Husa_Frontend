import React, { useEffect, useState } from 'react'

function BlogDescriptionBox({ data: { structure } }) {
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.text?.value)
	}, [])
	return (
		<section>
			<div className='blog_text_container pb-20 pt-14 py-md-20'>
				<article className='blog-article blog_description_box'>
					<h3>{structure?.title?.value}</h3>
					<div dangerouslySetInnerHTML={{ __html: text }}></div>
				</article>
			</div>
		</section>
	)
}

export default BlogDescriptionBox
