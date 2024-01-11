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
import { useState } from 'react'
import LightBoxModal from '../NewComponents/LightBoxModal'
import { useRouter } from 'next/router'

function LandingSlider({ data }) {
	let { structure } = data
	const size = useWindowSize()
	const router = useRouter()
	const [lightBoxStatus, setLightBoxStatus] = useState(false)
	const [lightBoxActiveIndex, setLightBoxActiveIndex] = useState(-1)
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
						{item?.url?.value && !item?.lightbox?.value ? (
							// <Link
							// 	target={item?.url?.target ? item?.url?.target : '_self'}
							// 	href={item?.url?.value ? item?.url?.value : ''}>
							<div
								onClick={() =>
									item?.url?.value && router.push(item?.url?.value)
								}
								className='carousel-item-wrapper'
								style={{
									cursor: 'pointer'
								}}>
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
									<div>
										{item?.url?.value && (
											<Link
												target={item?.url?.target ? item?.url?.target : '_self'}
												href={item?.url?.value ? item?.url?.value : ''}>
												<a
													className={
														structure?.theme?.value !== 'dark' && 'white_button'
													}>
													{item?.url?.title}
												</a>
											</Link>
										)}
									</div>
								</div>
							</div>
						) : (
							<div className='carousel-item-wrapper'>
								<div
									className='w-100 h-100 position-relative'
									style={{
										background: `url(${
											size[0] < 768
												? item?.mobile?.src
												: size[0] > 768 && size[0] < 1027
												? item?.tablet?.src
												: item?.desktop?.src
										})`
									}}>
									{item?.lightbox?.value && item?.lightboxTitle?.value ? (
										<div className='light_box_wrapper'>
											<button
												onClick={() => {
													setLightBoxActiveIndex(index)
													setLightBoxStatus(true)
												}}
												className='light_box_button'>
												<p>{item?.lightboxTitle?.value}</p>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='28'
													height='28'
													viewBox='0 0 22 22'
													fill='none'>
													<path
														d='M21.335 10.75C21.335 16.5496 16.6346 21.25 10.835 21.25C5.03535 21.25 0.334961 16.5496 0.334961 10.75C0.334961 4.95039 5.03535 0.25 10.835 0.25C16.6346 0.25 21.335 4.95039 21.335 10.75ZM8.0582 6.2834C7.74648 6.45566 7.55371 6.78789 7.55371 7.14062V14.3594C7.55371 14.7162 7.74648 15.0443 8.0582 15.2166C8.36992 15.3889 8.74727 15.3848 9.05488 15.1961L14.9611 11.5867C15.2523 11.4062 15.4328 11.0904 15.4328 10.7459C15.4328 10.4014 15.2523 10.0855 14.9611 9.90508L9.05488 6.2957C8.75137 6.11113 8.36992 6.10293 8.0582 6.2752V6.2834Z'
														fill='white'
													/>
												</svg>
											</button>
											{item?.lightbox_live_animation?.value && (
												<div className='broadcast_sign'>
													<span
														className={`broadcast_sign___blinking_dot animate`}></span>
													<p className='broadcast_sign___text'>Live</p>
												</div>
											)}
										</div>
									) : item?.url?.value ? (
										<Link
											target={item?.url?.target ? item?.url?.target : '_self'}
											href={item?.url?.value ? item?.url?.value : ''}>
											<a
												className={
													structure?.theme?.value !== 'dark' && 'white_button'
												}>
												{item?.url?.title}
											</a>
										</Link>
									) : null}
								</div>
							</div>
						)}
					</SwiperSlide>
				))}
			</Swiper>
			{structure?.list?.value[lightBoxActiveIndex]?.lightbox?.value && (
				<LightBoxModal
					zIndex='99999999'
					id={data?.id}
					caption={
						structure?.list?.value[lightBoxActiveIndex]?.lightboxObject?.value
							?.caption
					}
					video={
						structure?.list?.value[lightBoxActiveIndex]?.lightboxObject?.value
							?.video
					}
					image={
						structure?.list?.value[lightBoxActiveIndex]?.lightboxObject?.value
							?.image
					}
					link={
						structure?.list?.value[lightBoxActiveIndex]?.lightboxObject?.value
							?.link
					}
					isVisible={lightBoxStatus}
					visibleHandler={() => setLightBoxStatus(prevState => !prevState)}
				/>
			)}
		</>
	)
}

export default LandingSlider
