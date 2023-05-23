import React from 'react'
import BlogListSoundBardItem from './BlogListSoundBardItem'

function BlogListSoundBarItemsBox({ data: { structure } }) {
	return (
		<section>
			<div className='blog_text_container mb-6 mb-md-20 pb-0 pb-md-10'>
				{structure?.list?.value.map((item, index) => (
					<BlogListSoundBardItem key={index} data={item} />
				))}
			</div>
		</section>
	)
}

export default BlogListSoundBarItemsBox
