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
import CustomImage from 'components/common/CustomImage'
import { useAspectRatio } from 'hooks/useAspectRatio'

function LandingSlider({ data }) {
	let { structure } = data
	const size = useWindowSize()

	const aspectRatioMobile = useAspectRatio(
		structure?.list?.value[0]?.mobile?.src
	)
	const aspectRatioTablet = useAspectRatio(
		structure?.list?.value[0]?.tablet?.src
	)
	const aspectRatioDesktop = useAspectRatio(
		structure?.list?.value[0]?.desktop?.src
	)

	useEffect(() => {
		if (size[0] < 768) console.log(aspectRatioMobile)
		else if (size[0] > 768 && size[0] < 991) console.log(aspectRatioTablet)
		else console.log(aspectRatioDesktop)
	}, [size])

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
						<div className='background'>
							{size[0] < 768 ? (
								<CustomImage src={item?.mobile?.src} alt={item?.mobile?.alt} />
							) : size[0] > 768 && size[0] < 991 ? (
								<CustomImage src={item?.tablet?.src} alt={item?.tablet?.alt} />
							) : (
								<CustomImage
									src={item?.desktop?.src}
									alt={item?.desktop?.alt}
									wrapperWidth='100%'
									wrapperHeight='100%'
									wrapperClass='bg'
									imageClass='h-100'
								/>
							)}
							{item?.url?.value && (
								<Link
									target={item?.url?.target ? item?.url?.target : '_self'}
									href={item?.url?.value ? item?.url?.value : ''}>
									<a>{item?.url?.title}</a>
								</Link>
							)}
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}

export default LandingSlider
