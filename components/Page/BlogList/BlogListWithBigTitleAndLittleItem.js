import React from 'react'
import BlogListLittleReadArticleBox from './BlogListLittleReadArticleBox'

function BlogListWithBigTitleAndLittleItem() {
	return (
		<section>
			<div className='bg-light-orange-gradient-light blog-header pt-20'>
				<div className='container mb-20 pb-0 pb-md-20 pt-15'>
					<h2 className='header-text mb-8'>
						Feel inspired, be
						<span className='header-gradient-text'>inspired</span>
					</h2>
					<a
						href='#'
						className='btn btn-outline-dark green-hover btn-primary-dark-hover px-6 py-3 rounded-5 text-uppercase'>
						read article
					</a>
				</div>
				<BlogListLittleReadArticleBox />
				<BlogListLittleReadArticleBox />

				<div className='container text-center mb-20 pb-0 pb-md-20'>
					<button className='btn btn-outline-dark green-hover btn-primary-dark-hover px-6 py-3 rounded-5 text-uppercase'>
						load more <i className='fa-solid fa-sm fa-chevron-down ms-3'></i>
					</button>
				</div>
			</div>
		</section>
	)
}

export default BlogListWithBigTitleAndLittleItem
