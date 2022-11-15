import React from 'react'

function UHDIntro({ data: { structure } }) {
	return (
		<section>
			<div className='black-banner p-md-4'>
				<div className='container px-5 px-md-8 py-20'>
					<article className='article text-center mt-10 mt-md-20'>
						<img
							src={structure?.image.src}
							alt={structure?.image.alt}
							width='260'
							className='banner-logo'
						/>
						<h2 className='text-white fs-3x mb-9'>
							{structure?.largeTitle.value}
						</h2>
						<div
							className='fw-normal d-flex flex-column align-items-center text-white m-auto'
							dangerouslySetInnerHTML={{
								__html: structure?.paragraph?.value
							}}></div>
						<a
							href={structure?.link?.value}
							className='btn btn-outline-light rounded-5 px-8 mt-12'>
							{structure?.link?.title}
						</a>
					</article>
				</div>
			</div>
		</section>
	)
}

export default UHDIntro
