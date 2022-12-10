import React from 'react'
import BlogListSoundBardItem from './BlogListSoundBardItem'

function BlogListSoundBarItemsBox({ data: { structure } }) {
	return (
		<section>
			<div className='container mb-20 pb-0 pb-md-20 blog_custom_conrainer'>
				{structure?.list?.value.map((item, index) => (
					<BlogListSoundBardItem key={index} data={item} />
				))}
			</div>
		</section>
	)
}

export default BlogListSoundBarItemsBox
