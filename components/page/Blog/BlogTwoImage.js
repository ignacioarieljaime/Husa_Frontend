import React from 'react'

function BlogTwoImage({ data: { structure } }) {
	return (
		<section>
			<div className='mb-20'>
				<div className='row double-banner mx-0'>
					<div className='col-12 col-md-6 px-0 header-secondary'>
						<img
							src={structure?.image1?.src}
							alt={structure?.image1?.alt}
							width='100%'
							height='100%'
						/>
					</div>
					<div className='col-12 col-md-6 px-0 header-secondary'>
						<img
							src={structure?.image2?.src}
							alt={structure?.image2?.alt}
							width='100%'
							height='100%'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BlogTwoImage
