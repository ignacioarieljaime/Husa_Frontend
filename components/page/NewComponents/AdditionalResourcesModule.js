import { useWindowSize } from 'hooks/useWindowSize'
import React, { useEffect, useState } from 'react'
import { Navigation, Pagination } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'

const AdditionalResourcesModule = ({ data }) => {
	const { structure } = data
	const [content, setContent] = useState(null)
	const [width] = useWindowSize()

	useEffect(() => {
		setContent(structure)
	}, [])

	return (
		<section>
			<div id={data?.name + data?.id} className='additional_resources_module'>
				<h3
					className='additional_resources_module___title'
					// dangerouslySetInnerHTML={{ __html: structure?.title?.value }}
				>
					<p>Additional Resources</p>
				</h3>
				<div className='additional_resources_module___content'>
					<Swiper
						grabCursor={true}
						roundLengths={true}
						slidesPerView={1.12}
						slidesPerGroup={1}
						initialSlide={width >= 1000 ? 2 : 0}
						spaceBetween={16}
						centeredSlides={true}
						centeredSlidesBounds={true}
						navigation={true}
						pagination={{
							dynamicBullets: true,
							clickable: true
						}}
						breakpoints={{
							2340: {
								slidesPerView: 'auto',
								slidesPerGroup: 7
							},
							1745: {
								slidesPerView: 6,
								slidesPerGroup: 6
							},
							1441: {
								slidesPerView: 5,
								slidesPerGroup: 5
							},
							1150: {
								slidesPerView: 4,
								slidesPerGroup: 4
							},
							801: {
								slidesPerView: 3,
								slidesPerGroup: 4
							},
							420: {
								slidesPerView: 2,
								slidesPerGroup: 2,
								centeredSlides: false
							},
							370: {
								slidesPerView: 'auto',
								slidesPerGroup: 1
							}
						}}
						className={`additional_resources_module___content___slider ${
							content?.list?.value.length > 4 ? '' : 'hide_controls'
						}`}
						modules={[Pagination, Navigation]}>
						{content?.list?.value.map((item, index) => (
							<SwiperSlide key={index} className='w-fit'></SwiperSlide>
						))}
						<SwiperSlide className='w-fit'>
							<div className='additional_resources_module___content___slider___item'>
								<div className='additional_resources_module___content___slider___item___image_wrapper'>
									<img
										className='additional_resources_module___content___slider___item___image_wrapper___image'
										src={
											'https://assets.hisenseportal.com/storage/hisense/asset/images/6656e427266c58.webp'
										}
										alt='title'
									/>
								</div>
								<div className='additional_resources_module___content___slider___item___body'>
									<p className='additional_resources_module___content___slider___item___body___subtitle'>
										blogsense
									</p>
									<div className='additional_resources_module___content___slider___item___body___title'>
										Hisense Unveils ULED X, A New Generation of Technology
										Representing the Ultimate LED TV
									</div>
									<p className='additional_resources_module___content___slider___item___body___date'>
										June 6 2023
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className='w-fit'>
							<div className='additional_resources_module___content___slider___item'>
								<div className='additional_resources_module___content___slider___item___image_wrapper'>
									<img
										className='additional_resources_module___content___slider___item___image_wrapper___image'
										src={
											'https://assets.hisenseportal.com/storage/hisense/asset/images/6656e427266c58.webp'
										}
										alt='title'
									/>
								</div>
								<div className='additional_resources_module___content___slider___item___body'>
									<p className='additional_resources_module___content___slider___item___body___subtitle'>
										blogsense
									</p>
									<div className='additional_resources_module___content___slider___item___body___title'>
										Hisense Unveils ULED X, A New Generation of Technology
										Representing the Ultimate LED TV
									</div>
									<p className='additional_resources_module___content___slider___item___body___date'>
										June 6 2023
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className='w-fit'>
							<div className='additional_resources_module___content___slider___item'>
								<div className='additional_resources_module___content___slider___item___image_wrapper'>
									<img
										className='additional_resources_module___content___slider___item___image_wrapper___image'
										src={
											'https://assets.hisenseportal.com/storage/hisense/asset/images/6656e427266c58.webp'
										}
										alt='title'
									/>
								</div>
								<div className='additional_resources_module___content___slider___item___body'>
									<p className='additional_resources_module___content___slider___item___body___subtitle'>
										blogsense
									</p>
									<div className='additional_resources_module___content___slider___item___body___title'>
										Hisense Unveils ULED X, A New Generation of Technology
										Representing the Ultimate LED TV
									</div>
									<p className='additional_resources_module___content___slider___item___body___date'>
										June 6 2023
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className='w-fit'>
							<div className='additional_resources_module___content___slider___item'>
								<div className='additional_resources_module___content___slider___item___image_wrapper'>
									<img
										className='additional_resources_module___content___slider___item___image_wrapper___image'
										src={
											'https://assets.hisenseportal.com/storage/hisense/asset/images/6656e427266c58.webp'
										}
										alt='title'
									/>
								</div>
								<div className='additional_resources_module___content___slider___item___body'>
									<p className='additional_resources_module___content___slider___item___body___subtitle'>
										blogsense
									</p>
									<div className='additional_resources_module___content___slider___item___body___title'>
										Hisense Unveils ULED X, A New Generation of Technology
										Representing the Ultimate LED TV
									</div>
									<p className='additional_resources_module___content___slider___item___body___date'>
										June 6 2023
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className='w-fit'>
							<div className='additional_resources_module___content___slider___item'>
								<div className='additional_resources_module___content___slider___item___image_wrapper'>
									<img
										className='additional_resources_module___content___slider___item___image_wrapper___image'
										src={
											'https://assets.hisenseportal.com/storage/hisense/asset/images/6656e427266c58.webp'
										}
										alt='title'
									/>
								</div>
								<div className='additional_resources_module___content___slider___item___body'>
									<p className='additional_resources_module___content___slider___item___body___subtitle'>
										blogsense
									</p>
									<div className='additional_resources_module___content___slider___item___body___title'>
										Hisense Unveils ULED X, A New Generation of Technology
										Representing the Ultimate LED TV
									</div>
									<p className='additional_resources_module___content___slider___item___body___date'>
										June 6 2023
									</p>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	)
}

export default AdditionalResourcesModule
