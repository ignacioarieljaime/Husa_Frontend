import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AwardsNavIcon from 'components/icons/AwardsNavIcon'
import { useWindowSize } from 'hooks/useWindowSize'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

function AwardsAndAccolades({ data, pim }) {
	const ref = useRef(null)
	const router = useRouter()
	const windowSize = useWindowSize()
	const [content, setContent] = useState({})
	const navigationPrevRef = useRef(null)
	const navigationNextRef = useRef(null)
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
				className='awards_and_accolades'
				ref={ref}>
				<h3
					className='awards_and_accolades__title'
					dangerouslySetInnerHTML={{ __html: content?.title?.value }}></h3>
				{(content?.list?.value && content?.list?.value.length === 1) ||
				(content?.list?.value.length <= 4 && windowSize[0] > 768) ? (
					<div className='awards_and_accolades__cards_wrapper'>
						{content?.list?.value.map((item, index) => (
							<div
								className={`awards_and_accolades__cards_wrapper__card item__${
									content?.list?.value.length <= 2
										? content?.list?.value.length
										: 3
								}`}
								key={index}>
								<img
									src={item?.image?.src}
									alt={item?.title?.value}
									className='awards_and_accolades__cards_wrapper__card__image'
								/>
								<div className='awards_and_accolades__cards_wrapper__card__content'>
									<div className='awards_and_accolades__cards_wrapper__card__content__texts'>
										<h4
											className='awards_and_accolades__cards_wrapper__card__content__texts__title'
											dangerouslySetInnerHTML={{
												__html: item?.title?.value
											}}></h4>
										<h6
											className='awards_and_accolades__cards_wrapper__card__content__texts__subtilte'
											dangerouslySetInnerHTML={{
												__html: item?.subtitle?.value
											}}></h6>
									</div>
									{item?.link?.value && (
										<Link
											href={item?.link?.value}
											target={item?.link?.target ? item.link?.target : '_self'}>
											<a
												className='n-btn small primary-text awards_and_accolades__cards_wrapper__card__content__link'
												target={
													item?.link?.target ? item.link?.target : '_self'
												}>
												{item?.link?.title}
												<FontAwesomeIcon icon={faChevronRight} />
											</a>
										</Link>
									)}
								</div>
							</div>
						))}
					</div>
				) : (
					<Swiper
						navigation={{
							enabled: true,
							prevEl: navigationPrevRef.current,
							nextEl: navigationNextRef.current
						}}
						slidesPerView={'auto'}
						grabCursor={true}
						spaceBetween={windowSize[0] < 768 ? 16 : 40}
						centeredSlides={windowSize[0] < 768 ? false : true}
						modules={[Navigation]}
						className='awards_and_accolades__cards_wrapper'>
						{content?.list?.value.map((item, index) => (
							<SwiperSlide
								className={`awards_and_accolades__cards_wrapper__card item__3`}
								key={index}>
								<img
									src={item?.image?.src}
									alt={item?.title?.value}
									className='awards_and_accolades__cards_wrapper__card__image'
								/>
								<div className='awards_and_accolades__cards_wrapper__card__content'>
									<div className='awards_and_accolades__cards_wrapper__card__content__texts'>
										<h4
											className='awards_and_accolades__cards_wrapper__card__content__texts__title'
											dangerouslySetInnerHTML={{
												__html: item?.title?.value
											}}></h4>
										<h6
											className='awards_and_accolades__cards_wrapper__card__content__texts__subtilte'
											dangerouslySetInnerHTML={{
												__html: item?.subtitle?.value
											}}></h6>
									</div>
									{item?.link?.value && (
										<Link
											href={item?.link?.value}
											target={item?.link?.target ? item.link?.target : '_self'}>
											<a
												className='n-btn small primary-text awards_and_accolades__cards_wrapper__card__content__link'
												target={
													item?.link?.target ? item.link?.target : '_self'
												}>
												{item?.link?.title}
												<FontAwesomeIcon icon={faChevronRight} />
											</a>
										</Link>
									)}
								</div>
							</SwiperSlide>
						))}
						<div className='swiper-button-prev' ref={navigationPrevRef}>
							<AwardsNavIcon />
						</div>
						<div className='swiper-button-next' ref={navigationNextRef}>
							<AwardsNavIcon />
						</div>
					</Swiper>
				)}
			</div>
		</section>
	)
}

export default AwardsAndAccolades
