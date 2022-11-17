import React from 'react'

function BlogSecondDescriptionBox({ data: { structure } }) {
	return (
		<section>
			<div className='bg-light-orange-gradient py-20'>
				<div className='container my-10'>
					<div
						dangerouslySetInnerHTML={{ __html: structure?.title?.value }}
						className='fs-2tx'></div>
				</div>
			</div>
		</section>
	)
}

export default BlogSecondDescriptionBox
