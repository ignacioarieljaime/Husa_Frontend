import React from 'react'

function BlogListHead({ data: { structure } }) {
	return (
		<section>
			<div className='blog-header blog-header-list mt-10 mb-20'>
				<div className='container-fluid container-xxl ps-6 mb-13'>
					<div className='row mb-14 mb-md-0'>
						<div className='col-4 col-sm-6 align-self-center align-self-md-start ms-xxl-n5'>
							<img
								src={structure?.image1?.src}
								alt={structure?.image1?.alt}
								className='tv-floating-img'
							/>
						</div>
						<div className='col-8 col-sm-6 text-end'>
							<img
								src={structure?.image2?.src}
								alt={structure?.image2?.alt}
								className='sea-floating-img'
							/>
						</div>
					</div>
					<div
						className='header-text header-gradient-radial-text floating-text'
						dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></div>
				</div>
			</div>
		</section>
	)
}

export default BlogListHead
