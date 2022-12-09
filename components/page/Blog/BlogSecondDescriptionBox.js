import React from 'react'

function BlogSecondDescriptionBox({ data: { structure } }) {
	return (
		<section>
			<div className='bg-light-orange-gradient py-20'>
				<div className='container my-10'>
					<div
						data-aos='fade-zoom-in'
						data-aos-duration='1600'
						data-aos-delay='450'>
						<div
							className='big-title'
							dangerouslySetInnerHTML={{
								__html: structure?.title?.value
							}}></div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BlogSecondDescriptionBox
