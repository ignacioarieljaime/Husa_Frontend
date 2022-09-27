import React from 'react'

// image
import Badge from './../../../../public/assets/images/more-tv/badges.png'
import Rtings from './../../../../public/assets/images/more-tv/rtings.png'
import PC from './../../../../public/assets/images/more-tv/pc.png'
import EditorChoice from './../../../../public/assets/images/more-tv/editors-choice.png'


function MoreTvExperts() {
	return (
		<section>
			<div class='bg-light-blue'>
				<div class='container-fluid px-md-8 py-10 py-md-20'>
					<div class='row'>
						<div class='col-12 col-md-6 pe-lg-10 mb-20 mb-md-0'>
							<h2 class='fs-3tx fw-normal'>
								The experts agree.
								<span class='d-block'>We make awesome TVs.</span>
							</h2>
							<img src={Badge.src} alt='featured image' class='banner-logo' />
						</div>
						<div class='col-12 col-md-6 ps-lg-10'>
							<div class='mb-10'>
								<div class='position-relative px-20'>
									<span class='double-quote start'>“</span>
									<h3 class='fs-2hx fw-normal text-center'>
										Best Budget TV for watching sports
									</h3>
									<span class='double-quote end'>“</span>
								</div>
								<div class='text-center'>
									<img src={Rtings.src} alt='featured image' />
								</div>
							</div>
							<div class='mb-10'>
								<div class='position-relative px-20'>
									<span class='double-quote start'>“</span>
									<h3 class='fs-2hx fw-normal text-center'>
										In a class all of its own
									</h3>
									<span class='double-quote end'>“</span>
								</div>
								<div class='text-center'>
									<img src={PC.src} alt='featured image' />
								</div>
							</div>
							<div class='mb-10'>
								<div class='position-relative px-20'>
									<span class='double-quote start'>“</span>
									<h3 class='fs-2hx fw-normal text-center'>
										Dazzlingly bright and full of features
									</h3>
									<span class='double-quote end'>“</span>
								</div>
								<div class='text-center'>
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
