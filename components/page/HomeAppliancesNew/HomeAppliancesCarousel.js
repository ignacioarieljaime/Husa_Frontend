import { useAspectRatio } from 'hooks/useAspectRatio'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import CustomImage from 'components/common/CustomImage'
import Link from 'next/link'
import { useWindowSize } from 'hooks/useWindowSize'

const HomeAppliancesCarousel = ({ data }) => {
	// const { structure } = data
	// background-color: #f4f5f7;
	// theme
	const structure = {}

	const windowSize = useWindowSize()
	return (
		<section>
			<div className='ha_carousel text-center'>
				{
					<div
						className='subtitle'
						dangerouslySetInnerHTML={{
							__html: '<p>beautifully designed & incredibly spacious</p>'
						}}></div>
				}
				<h3
					className='title'
					dangerouslySetInnerHTML={{
						__html: '<p>Find appliances <u>made with you in mind</u></p>'
					}}></h3>
				<Swiper
					pagination={false}
					slidesPerView={'auto'}
					centeredSlides={false}
					grabCursor={true}
					spaceBetween={24}
					className='slider'>
					{windowSize[0] > 768 && (
						<SwiperSlide
							className='slider_item'
							style={{ width: '200px' }}></SwiperSlide>
					)}
					{[{}, {}, {}, {}, {}, {}, {}, {}, {}].map((item, index) => (
						<SwiperSlide key={index} className='slider_item'>
							<div className='slider_image_wrapper mb-6'>
								<CustomImage
									src={
										'https://files.hisense-usa.com/storage/hisense/asset/images/663d94b1fd4200.webp'
									}
									alt={item?.image?.alt}
									imageClass={'slider_image my-auto'}
									wrapperHeight={'auto'}
									wrapperWidth={'100%'}
								/>
							</div>
							<h4 className='title'>Dishwashers</h4>
							<p className='subtitle'>CLEAN & QUIET</p>
							<Link
								target={item?.link?.target ? item?.link?.target : '_self'}
								href={item?.link?.value ? item?.link?.value : '/'}>
								<a
									target={item?.link?.target ? item?.link?.target : '_self'}
									style={{ width: '150px' }}
									className={`text-nowrap n-btn d-block mx-auto white`}>
									{/* {item?.link?.title} */}
									Shop now
									{item?.link?.target === '_blank' && (
										<img
											style={{ marginLeft: '10px' }}
											src={OpenPageOnNewTab.src}
										/>
									)}
								</a>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
				{structure?.link?.value && (
					<div className='bottom_button'>
						<Link
							target={
								structure?.link?.target ? structure?.link?.target : '_self'
							}
							href={structure?.link?.value ? structure?.link?.value : '/'}>
							<a
								target={
									structure?.link?.target ? structure?.link?.target : '_self'
								}
								style={{ width: '150px' }}
								className='primary text-nowrap n-btn d-block mx-auto '>
								{/* {structure?.link?.title} */}
								Shop now
								{structure?.link?.target === '_blank' && (
									<img
										style={{ marginLeft: '10px' }}
										src={OpenPageOnNewTab.src}
									/>
								)}
							</a>
						</Link>
					</div>
				)}
			</div>
		</section>
	)
}

export default HomeAppliancesCarousel
