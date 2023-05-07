import React, { useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper'
import CustomImage from 'components/common/CustomImage'
import ResizeIcon from 'components/icons/ResizeIcon'
import DownloadIconV2 from 'components/icons/DownloadIconV2'

const NewsSingleSlider = () => {
	const [imageUrl, setImageUrl] = useState(null)
	return (
		<>
			<Swiper
				spaceBetween={30}
				loop
				navigation={true}
				centeredSlides={true}
				pagination={{
					clickable: true
				}}
				modules={[Pagination, Navigation]}
				className='news_single_slider'>
				{[1, 1, 2, 1].map(item => (
					<SwiperSlide>
						<div
							style={{
								background:
									"url('https://images.unsplash.com/photo-1540634354115-0a35d263fdf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
							}}
							className={`slider_item`}>
							<div className='buttons'>
								<button
									onClick={() =>
										setImageUrl(
											imageUrl
												? null
												: 'https://images.unsplash.com/photo-1540634354115-0a35d263fdf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
										)
									}>
									Enlarge Image <ResizeIcon />
								</button>
								<a>
									Download Image <DownloadIconV2 />
								</a>
							</div>

							<h6>Image caption lorem ipsum.</h6>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			{imageUrl && (
				<div
					style={{ background: `url(${imageUrl})` }}
					className='news_single_slider_resize_image'>
					<button onClick={() => setImageUrl(null)}>
						<ResizeIcon />
					</button>
				</div>
			)}
		</>
	)
}

export default NewsSingleSlider
