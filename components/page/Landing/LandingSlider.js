import React, { useEffect } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Navigation, Pagination } from 'swiper'
import Link from 'next/link'
import { useWindowSize } from 'hooks/useWindowSize'
import { useAspectRatio } from 'hooks/useAspectRatio'
import CustomButton from 'components/common/CustomButton'

function LandingSlider({ data }) {
	let { structure } = data
	const size = useWindowSize()

	return (
		<>
			<Swiper
				navigation={true}
				pagination={true}
				modules={[Navigation, Pagination]}
				// style={{
				// 	paddingTop:
				// 		size[0] < 550
				// 			? aspectRatioMobile > 1
				// 				? (aspectRatioMobile * 100).toFixed(2) + '%'
				// 				: ''
				// 			: size[0] > 550 && size[0] < 991
				// 			? aspectRatioTablet > 1
				// 				? (aspectRatioTablet * 100).toFixed(2) + '%'
				// 				: ''
				// 			: size[0] > 991 && size[0] < 1400
				// 			? (aspectRatioDesktop * 100).toFixed(2) - 7 + '%'
				// 			: // : size[0] > 1200 && size[0] < 1670
				// 			// ? (aspectRatioDesktop * 100).toFixed(2) - 7 + '%'
				// 			aspectRatioDesktop < 1
				// 			? (aspectRatioDesktop * 100).toFixed(2) - 9 + '%'
				// 			: '57%'
				// }}
				className='home-header-carousel lower-main'>
				{structure?.list?.value.map((item, index) => (
					<SwiperSlide key={index}>
						{item?.url?.value ? (
							<Link
								target={item?.url?.target ? item?.url?.target : '_self'}
								href={item?.url?.value ? item?.url?.value : ''}>
								<a className='carousel-item-wrapper'>
									<div
										className='w-100 h-100 '
										style={{
											background: `url(${
												size[0] < 768
													? item?.mobile?.src
													: size[0] > 768 && size[0] < 1027
													? item?.tablet?.src
													: item?.desktop?.src
											})`
										}}>
										{item?.url?.value && (
											<CustomButton
												target={item?.url?.target ? item?.url?.target : '_self'}
												href={item?.url?.value ? item?.url?.value : ''}
												// className={
												// 	structure?.theme?.value !== 'dark' && 'white_button'
												// }
												cxmStyles={item?.buttonStyle?.value}>
												{item?.url?.title}
											</CustomButton>
										)}
									</div>
								</a>
							</Link>
						) : (
							<div className='carousel-item-wrapper'>
								<div
									className='w-100 h-100 '
									style={{
										background: `url(${
											size[0] < 768
												? item?.mobile?.src
												: size[0] > 768 && size[0] < 1027
												? item?.tablet?.src
												: item?.desktop?.src
										})`
									}}>
									{item?.url?.value && (
										<CustomButton
											target={item?.url?.target ? item?.url?.target : '_self'}
											href={item?.url?.value ? item?.url?.value : ''}
											// className={
											// 	structure?.theme?.value !== 'dark' && 'white_button'
											// }
											cxmStyles={item?.buttonStyle?.value}>
											{item?.url?.title}
										</CustomButton>
									)}
								</div>
							</div>
						)}
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}

export default LandingSlider
