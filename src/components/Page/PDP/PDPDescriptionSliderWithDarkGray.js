import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

function PDPDescriptionSliderWithDarkGray() {
	return (
		<section>
			<Swiper className='pdp-fitted-carousel '>
				<SwiperSlide>
					<div className='bg-dark'>
						<div>
							<div className='text-white fs-8 fw-normal mb-1'>
								SUBHEAD GOES HERE
							</div>
							<p className='text-white fs-3x mb-3'>
								This can be a slider or switch
							</p>
							<p className='text-white fs-m5 mb-15'>
								This can be a slider or a switch between light to dark or an
								image with a gradient over it. This can be a slider or a switch
								between light to dark or an image with a gradient over it.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					{' '}
					<div className='bg-secondary'>
						<div>
							<div className='text-white fs-8 fw-normal mb-1'>
								SUBHEAD GOES HERE
							</div>
							<p className='text-white fs-3x mb-3'>
								This can be a slider or switch
							</p>
							<p className='text-white fs-m5 mb-15'>
								This can be a slider or a switch between light to dark or an
								image with a gradient over it. This can be a slider or a switch
								between light to dark or an image with a gradient over it.
							</p>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	)
}

export default PDPDescriptionSliderWithDarkGray
