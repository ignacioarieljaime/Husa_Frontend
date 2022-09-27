import React from 'react'
import BlogListLittleReadArticleBox from './BlogListLittleReadArticleBox'

function BlogListWithBigTitleAndLittleItem() {
	return (
		<section>
			<div class='bg-light-orange-gradient-light blog-header pt-20'>
				<div class='container mb-20 pb-0 pb-md-20 pt-15'>
					<h2 class='header-text mb-8'>
						Feel inspired, be
						<span class='header-gradient-text'>inspired</span>
					</h2>
					<a
						href='#'
						class='btn btn-outline-dark green-hover btn-primary-dark-hover px-6 py-3 rounded-5 text-uppercase'>
						read article
					</a>
				</div>
				<BlogListLittleReadArticleBox />
				<BlogListLittleReadArticleBox />

				<div class='container text-center mb-20 pb-0 pb-md-20'>
					<button class='btn btn-outline-dark green-hover btn-primary-dark-hover px-6 py-3 rounded-5 text-uppercase'>
						load more <i class='fa-solid fa-sm fa-chevron-down ms-3'></i>
					</button>
				</div>
			</div>
		</section>
	)
}

export default BlogListWithBigTitleAndLittleItem
