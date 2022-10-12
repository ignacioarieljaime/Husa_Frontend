import React from 'react'

// image
import Badge from 'public/assets/images/more-tv/badges.png'
import Rtings from 'public/assets/images/more-tv/rtings.png'
import PC from 'public/assets/images/more-tv/pc.png'
import EditorChoice from 'public/assets/images/more-tv/editors-choice.png'


function MoreTvExperts() {
	return (
		<section>
			<div className='bg-light-blue'>
				<div className='container-fluid px-md-8 py-10 py-md-20'>
					<div className='row'>
						<div className='col-12 col-md-6 pe-lg-10 mb-20 mb-md-0'>
							<h4 className='fs-3tx fw-normal'>
								The experts agree.
								<span className='d-block'>We make awesome TVs.</span>
							</h4>
							<img src={Badge.src} alt='featured image' className='banner-logo' />
						</div>
						<div className='col-12 col-md-6 ps-lg-10'>
							<div className='mb-10'>
								<div className='position-relative px-20'>
									<span className='double-quote start'>“</span>
									<h5 className='fs-2hx fw-normal text-center'>
										Best Budget TV for watching sports
									</h5>
									<span className='double-quote end'>“</span>
								</div>
								<div className='text-center'>
									<img src={Rtings.src} alt='featured image' />
								</div>
							</div>
							<div className='mb-10'>
								<div className='position-relative px-20'>
									<span className='double-quote start'>“</span>
									<h5 className='fs-2hx fw-normal text-center'>
										In a class all of its own
									</h5>
									<span className='double-quote end'>“</span>
								</div>
								<div className='text-center'>
									<img src={PC.src} alt='featured image' />
								</div>
							</div>
							<div className='mb-10'>
								<div className='position-relative px-20'>
									<span className='double-quote start'>“</span>
									<h5 className='fs-2hx fw-normal text-center'>
										Dazzlingly bright and full of features
									</h5>
									<span className='double-quote end'>“</span>
								</div>
								<div className='text-center'>
									<img
										src={EditorChoice.src}
										alt='featured image'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MoreTvExperts
