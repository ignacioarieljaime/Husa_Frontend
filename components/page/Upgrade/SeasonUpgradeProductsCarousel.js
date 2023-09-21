import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css'
import SeasonUpgradeProductsCarouselItem from './SeasonUpgradeProductsCarouselItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faChevronLeft,
	faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import { useWindowSize } from 'hooks/useWindowSize'
import ModalChanelAdviser from '../Product/ModalChanelAdviser'
import { useRouter } from 'next/router'

const SeasonUpgradeProductsCarousel = ({ data }) => {
	const [content, setContent] = useState(null)
	const [channelAdvisorData, setChannelAdvisorData] = useState(null)
	const [showDialgo, setShowDialog] = useState(false)
	const windowSize = useWindowSize()
	const router = useRouter()
	useEffect(() => {
		setContent(data?.structure)
		if (router.asPath.includes(data?.name + data?.id)) {
			setTimeout(() => {
				ref.current.scrollIntoView()
			}, 1000)
		}
	}, [])
	return (
		<section>
			<div
				id={data?.name + data?.id}
				className={`season_upgrade_carousel ${content?.text?.value}`}>
				<div className='text_content'>
					<p className='pretitle'>{content?.subtitle?.value}</p>
					<Link href={'/'}>
						<a className='text-decoration-none'>
							<h2
								className='title'
								dangerouslySetInnerHTML={{
									__html: content?.title?.value
								}}></h2>
						</a>
					</Link>
				</div>
				<Swiper
					grabCursor={true}
					slidesPerView={'auto'}
					slidesPerGroup={1}
					spaceBetween={16}
					initialSlide={
						windowSize >= 768
							? Math.floor(content?.selected_products?.value.length / 2)
							: 1
					}
					centeredSlides={true}
					navigation={{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					}}
					className={`carousel`}
					modules={[Navigation]}>
					{content?.selected_products?.value.map((item, index) => (
						<SwiperSlide className='w-fit h-100' key={index}>
							<SeasonUpgradeProductsCarouselItem
								data={item}
								setChannelAdvisorData={setChannelAdvisorData}
								setShowDialog={setShowDialog}
							/>
						</SwiperSlide>
					))}
					<button className='swiper-button-next'>
						<FontAwesomeIcon icon={faChevronRight} size='2xl' />
					</button>
					<button className='swiper-button-prev'>
						<FontAwesomeIcon icon={faChevronLeft} size='2xl' />
					</button>
				</Swiper>
			</div>
			{channelAdvisorData?.product && (
				<ModalChanelAdviser
					condition={showDialgo}
					handler={setShowDialog}
					{...channelAdvisorData}
				/>
			)}
		</section>
	)
}

export default SeasonUpgradeProductsCarousel
