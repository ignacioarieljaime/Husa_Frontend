import React from 'react'

function BlogDescriptionWithShare({ data: { structure } }) {
	return (
		<section>
			<div className='blog_text_container py-md-20 my-20'>
				<article className='blog-article'>
					<h3>{structure?.title?.value}</h3>
					<div
						dangerouslySetInnerHTML={{
							__html: structure?.text?.value
						}}></div>
					<span>{structure?.sharingTitle?.value}</span>
					<div className='row mt-7'>
						{structure?.list?.value.map((item, index) => (
							<a
								href={item?.link?.value}
								key={index}
								className={`text-primary-dark socicon socicon-${item?.socialMedia?.value}`}></a>
						))}
					</div>
				</article>
			</div>
		</section>
	)
}

export default BlogDescriptionWithShare
