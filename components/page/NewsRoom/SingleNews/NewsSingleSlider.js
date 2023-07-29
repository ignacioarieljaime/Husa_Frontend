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
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
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
				{[
					{
						link: {
							id: 4,
							type: 'url',
							title: 'Link',
							value: null,
							target: '_self'
						},
						image: {
							id: 2,
							alt: null,
							src: 'https://files.hisense-usa.com/storage/hisense/asset/images/664a83d7d9e96a.webp',
							type: 'image',
							title: 'Image'
						},
						subtitle: {
							id: 1,
							type: 'string',
							title: 'Subtitle',
							value: 'Image caption lorem ipsum.'
						},
						EnlargeBtn: {
							id: 3,
							type: 'string',
							title: 'Enlarge Image Title',
							value: 'Enlarge Image'
						},
						downloadBtn: {
							id: 4,
							type: 'url',
							title: 'Download Image',
							value: null,
							target: '_self'
						}
					},
					{
						link: {
							id: 4,
							type: 'url',
							title: 'Link',
							value: null,
							target: '_self'
						},
						image: {
							id: 2,
							alt: null,
							src: 'https://files.hisense-usa.com/storage/hisense/asset/images/664a83d7d9e96a.webp',
							type: 'image',
							title: 'Image'
						},
						subtitle: {
							id: 1,
							type: 'string',
							title: 'Subtitle',
							value: 'Idasdas das dasd asd as fafsagf easga.'
						},
						EnlargeBtn: {
							id: 3,
							type: 'string',
							title: 'Enlarge Image Title',
							value: 'Enlarge Image'
						},
						downloadBtn: {
							id: 4,
							type: 'url',
							title: 'Download Image',
							value: null,
							target: '_self'
						}
					}
				].map(item => (
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
				<div className='news_single_slider_resize_image'>
					<TransformWrapper>
						<TransformComponent>
							<img src={imageUrl} alt='enlarged' />
						</TransformComponent>
					</TransformWrapper>
					<button onClick={() => setImageUrl(null)}>
						<ResizeIcon />
					</button>
				</div>
			)}
		</>
	)
}

export default NewsSingleSlider
