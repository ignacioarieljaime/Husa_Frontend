import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'
import BlogListLittleReadArticleBox from './BlogListLittleReadArticleBox'

function BlogListWithBigTitleAndLittleItem({ data: { structure } }) {
	const [showCount, setChowCount] = useState(1)
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.title?.value)
	}, [])
	console.log(structure?.list?.value)
	return (
		<section>
			<div className='bg-light-orange-gradient-light'>
				<div className=' blog-header overflow-hidden pt-20 px-3'>
					<div className='mb-20 pb-0 pb-md-20 pt-15'>
						<div
							className='header-text header-gradient-radial-text seconde-header mb-8'
							dangerouslySetInnerHTML={{
								__html: text
							}}></div>
						<a
							href={structure?.link?.value}
							className='btn btn-outline-dark green-hover btn-primary-dark-hover px-6 py-3 rounded-5 text-uppercase'>
							{structure?.link?.title}
						</a>
					</div>
					{structure?.list?.value.map(
						(item, index) =>
							index < showCount && (
								<BlogListLittleReadArticleBox
									key={index}
									index={index}
									data={item}
								/>
							)
					)}

					{showCount !== structure?.list?.value.length + 1 && (
						<div className='container text-center mb-20 pb-0 pb-md-20'>
							<button
								onClick={() => setChowCount(structure?.list?.value.length + 1)}
								className='btn btn-outline-dark green-hover btn-primary-dark-hover px-6 py-3 rounded-5 text-uppercase'>
								<span className='me-3'>{structure?.loadingLink?.title}</span>
								<FontAwesomeIcon icon={faChevronDown} size={'sm'} />
							</button>
						</div>
					)}
				</div>
			</div>
		</section>
	)
}

export default BlogListWithBigTitleAndLittleItem
