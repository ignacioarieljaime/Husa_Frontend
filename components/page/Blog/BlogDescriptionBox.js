import React from 'react'

function BlogDescriptionBox({ data: { structure } }) {
	return (
		<section>
			<div className='tiny-banner container pb-20 py-md-20'>
				<article className='blog-article'>
					<div
						dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
				</article>
			</div>
		</section>
	)
}

export default BlogDescriptionBox
