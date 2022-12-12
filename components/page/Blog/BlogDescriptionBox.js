import React from 'react'

function BlogDescriptionBox({ data: { structure } }) {
	return (
		<section>
			<div className='blog_text_container pb-20 pt-14 py-md-20'>
				<article className='blog-article'>
					<h3>{structure?.title?.value}</h3>
					<div
						dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
				</article>
			</div>
		</section>
	)
}

export default BlogDescriptionBox
