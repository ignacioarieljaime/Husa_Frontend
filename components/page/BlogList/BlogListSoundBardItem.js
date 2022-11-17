import React from 'react'

import Link from 'next/link'

function BlogListSoundBardItem({ data }) {
	return (
		<div className='row align-items-center py-8 border-bottom mx-0 blog-article-box'>
			<figure className='col-12 col-md-9 mb-0 px-0'>
				<div className='row justify-content-between align-items-center'>
					<div className='col-12 col-md-4 col-lg-3 mb-5 mb-md-0'>
						<div className='image-box'>
							<Link href={data?.link?.value}>
								<a>
									<img
										src={data?.image?.src}
										alt={data?.image?.alt}
										width='100%'
									/>
								</a>
							</Link>
						</div>
					</div>
					<figcaption className='col-12 col-md-8'>
						<div className='text-start mb-3'>
							<Link href={data?.tagLink?.value}>
								<a className='text-primary-dark text-decoration-none'>
									{data?.tagLink?.title}
								</a>
							</Link>
						</div>
						<div className='mb-8 mb-md-0'>
							<h3 className='fs-3 mb-0'>{data?.title?.value}</h3>
						</div>
					</figcaption>
				</div>
			</figure>
			<div className='col-12 col-md-3 px-0'>
				<div className='text-start text-md-end'>
					<Link href={data?.link?.value}>
						<a className='btn btn-outline-dark green-hover px-6 py-3 rounded-5 text-uppercase'>
							{data?.link?.title}
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default BlogListSoundBardItem
