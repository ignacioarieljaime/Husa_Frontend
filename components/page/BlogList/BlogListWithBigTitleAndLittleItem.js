import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import BlogListLittleReadArticleBox from './BlogListLittleReadArticleBox'

function BlogListWithBigTitleAndLittleItem({ data: { structure } }) {
	return (
		<section>
			<div className='bg-light-orange-gradient-light blog-header pt-20'>
				<div className='container mb-20 pb-0 pb-md-20 pt-15'>
					<div
						className='header-text header-gradient-radial-text mb-8'
						dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></div>
					<a
						href={structure?.link?.value}
						className='btn btn-outline-dark green-hover btn-primary-dark-hover px-6 py-3 rounded-5 text-uppercase'>
						{structure?.link?.title}
					</a>
				</div>
				{structure?.list?.value.map((item, index) => (
					<BlogListLittleReadArticleBox key={index} data={item} />
				))}
				<div className='container text-center mb-20 pb-0 pb-md-20'>
					<a
						href={structure?.loadingLink?.value}
						className='btn btn-outline-dark green-hover btn-primary-dark-hover px-6 py-3 rounded-5 text-uppercase'>
						<span className='me-3'>{structure?.loadingLink?.title}</span>
						<FontAwesomeIcon icon={faChevronDown} size={'sm'} />
					</a>
				</div>
			</div>
		</section>
	)
}

export default BlogListWithBigTitleAndLittleItem
