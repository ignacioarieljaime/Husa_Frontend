import React from 'react'

import BlogListLittleReadArticleBox from './../BlogList/BlogListLittleReadArticleBox'

function BlogMoreStories({ data: { structure } }) {
	return (
		<section>
			<div className='blog_text_container mt-0 mt-md-20 pt-5'>
				{structure?.title?.value && (
					<h2 className='fs-2tx fw-normal my-5 mb-md-15'>
						{structure?.title?.value}
					</h2>
				)}
				{structure?.list?.value.map((item, index) => (
					<BlogListLittleReadArticleBox key={index} data={item} />
				))}
			</div>
		</section>
	)
}

export default BlogMoreStories
