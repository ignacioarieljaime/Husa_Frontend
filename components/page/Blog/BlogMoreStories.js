import React from 'react'

import BlogListLittleReadArticleBox from './../BlogList/BlogListLittleReadArticleBox'

function BlogMoreStories({ data: { structure } }) {
	return (
		<section>
			<div className='container mt-20 pt-0 pt-md-15'>
				<h2 className='fs-2tx fw-normal mb-15'>{structure?.title?.value}</h2>
				{structure?.list?.value.map((item, index) => (
					<BlogListLittleReadArticleBox key={index} data={item} />
				))}
			</div>
		</section>
	)
}

export default BlogMoreStories
