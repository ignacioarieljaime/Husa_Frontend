import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css'
import SeasonUpgradeProductsCarouselItemCopy from './SeasonUpgradeProductsCarouselItemCopy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faChevronLeft,
	faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import { useWindowSize } from 'hooks/useWindowSize'
import ModalChanelAdviser from '../Product/ModalChanelAdviser'
import { useRouter } from 'next/router'

const SeasonUpgradeProductsCarousel = ({ data }) => {
	const { structure } = data
	const windowSize = useWindowSize()
	const [content, setContent] = useState(null)
	const [channelAdvisorData, setChannelAdvisorData] = useState(null)
	const [showDialgo, setShowDialog] = useState(false)
	const router = useRouter()
	const ref = useRef()
	useEffect(() => {
		setContent(structure)
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
				ref={ref}
				className={`season_upgrade_carousel ${structure?.text?.value} ${structure?.template?.value}`}>
				<div className='text_content'>
					<p className='pretitle'>{structure?.subtitle?.value}</p>
					<Link href={'/'}>
						<a className='text-decoration-none'>
							<h2
								className='title'
								dangerouslySetInnerHTML={{
									__html: structure?.title?.value
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
						windowSize[0] >= 768
							? content?.selected_products?.value.length / 2
							: 0
					}
					centeredSlides={true}
					navigation={{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					}}
					noSwipingSelector='.screen_size_selector'
					className={`carousel`}
					modules={[Navigation]}>
					{content?.selected_products?.value.map((item, index) => (
						<SwiperSlide
							style={{ gridColumn: index + 1 + ' / ' + (index + 2) }}
							className='w-fit h-100'
							key={index}>
							<SeasonUpgradeProductsCarouselItemCopy
								data={item}
								version={structure?.template?.value}
								length={structure?.selected_products?.value.length / 2}
								setChannelAdvisorData={setChannelAdvisorData}
								setShowDialog={setShowDialog}
							/>
						</SwiperSlide>
					))}

					<button
						className={`swiper-button-next ${
							structure?.selected_products?.value.length > 2
								? 'd-flex'
								: 'd-none'
						}`}>
						<FontAwesomeIcon icon={faChevronRight} size='2xl' />
					</button>
					<button
						className={`swiper-button-prev ${
							structure?.selected_products?.value.length > 2
								? 'd-flex'
								: 'd-none'
						}`}> 
						<FontAwesomeIcon icon={faChevronLeft} size='2xl' />
					</button>
				</Swiper>
				{structure?.template?.value === 'v2' && (
					<div
						className='disclaimer'
						dangerouslySetInnerHTML={{
							__html: structure?.disclaimer?.value
						}}></div>
				)}
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
