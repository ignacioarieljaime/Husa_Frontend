import React from 'react'

// image
import Sample from './../../../public/assets/images/blog/sample.png'
import Kids from './../../../public/assets/images/blog/kid.png'
import Cake from './../../../public/assets/images/blog/cake.png'
import Woman from './../../../public/assets/images/blog/woman.png'
import Girl from './../../../public/assets/images/blog/girl.png'
import Oranges from './../../../public/assets/images/blog/oranges.png'

function BlogImageGalleryBox() {
	return (
		<section>
			<div className='container-fluid photo-gallery'>
				<div className='row align-items-stretch h-100'>
					<div className='col-12 col-md-6'>
						<div className='row align-items-stretch justify-content-center first'>
							<div className='col-3 col-sm-2 align-self-end mb-20'>
								<img src={Sample.src} alt='featured image' width='100%' />
							</div>
							<div className='col-4'>
								<img src={Kids.src} alt='featured image' width='100%' />
							</div>
							<div className='col-6 align-self-end'>
								<img src={Cake.src} alt='featured image' width='100%' />
							</div>
						</div>
					</div>
					<div className='col-12 col-md-6'>
						<div className='row align-items-stretch justify-content-between seconde'>
							<div className='col-6'>
								<img src={Woman.src} alt='featured image' width='100%' />
							</div>
							<div className='col-5 align-self-center mb-n20'>
								<img src={Girl.src} alt='featured image' width='100%' />
							</div>
							<div className='col-3 col-md-2 offset-3 offset-md-5'>
								<img src={Oranges.src} alt='featured image' width='100%' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BlogImageGalleryBox
