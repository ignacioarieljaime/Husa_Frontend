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
import { useAspectRatio } from 'hooks/useAspectRatio'

const NewsSingleSlider = ({ data }) => {
	let { structure } = data
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
				{structure?.list?.value?.map(item => (
					<SwiperSlide>
						<div className={`slider_item`}>
							<CustomImage
								src={item?.image?.src}
								alt={item?.image?.alt}
								wrapperHeight={'100%'}
								wrapperWidth={'100%'}
								className='background'
							/>
							<div className='buttons'>
								<button
									className='n-btn outline-white'
									onClick={() =>
										setImageUrl(imageUrl ? null : item?.image?.src)
									}>
									<span style={{ paddingTop: '3px' }}>
										{item?.EnlargeBtn?.value}{' '}
									</span>
									<ResizeIcon />
								</button>
								<a
									className='n-btn outline-white'
									download={true}
									href={item?.image?.src}>
									<span style={{ paddingTop: '3px' }}>
										{item?.downloadBtn?.title}
									</span>{' '}
									<DownloadIconV2 />
								</a>
							</div>

							<h6>{item?.subtitle?.value}</h6>
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
