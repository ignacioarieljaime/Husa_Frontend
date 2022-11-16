import React from 'react'

function BlogSecondDescriptionBox({ data: { structure } }) {
	return (
		<section>
			<div className='bg-light-orange-gradient py-20'>
				<div className='container my-10'>
					<h3 className='fs-2tx'>{structure?.title?.value}</h3>
				</div>
			</div>
		</section>
	)
}

export default BlogSecondDescriptionBox
