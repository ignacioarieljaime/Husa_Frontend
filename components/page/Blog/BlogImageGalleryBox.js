import React from 'react'

function BlogImageGalleryBox({ data: { structure } }) {
	return (
		<section>
			<div className='container-fluid photo-gallery'>
				<div className='row align-items-stretch h-100'>
					<div className='col-12 col-md-6'>
						<div className='row align-items-stretch justify-content-center first'>
							<div className='col-3 col-sm-2 align-self-end mb-20'>
								<img
									src={structure?.image1?.src}
									alt={structure?.image1?.alt}
									width='100%'
								/>
							</div>
							<div className='col-4'>
								<img
									src={structure?.image2?.src}
									alt={structure?.image2?.alt}
									width='100%'
								/>
							</div>
							<div className='col-6 align-self-end'>
								<img
									src={structure?.image3?.src}
									alt={structure?.image3?.alt}
									width='100%'
								/>
							</div>
						</div>
					</div>
					<div className='col-12 col-md-6'>
						<div className='row align-items-stretch justify-content-between seconde'>
							<div className='col-6'>
								<img
									src={structure?.image4?.src}
									alt={structure?.image4?.alt}
									width='100%'
								/>
							</div>
							<div className='col-5 align-self-center mb-n20'>
								<img
									src={structure?.image5?.src}
									alt={structure?.image5?.alt}
									width='100%'
								/>
							</div>
							<div className='col-3 col-md-2 offset-3 offset-md-5'>
								<img
									src={structure?.image6?.src}
									alt={structure?.image6?.alt}
									width='100%'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BlogImageGalleryBox
