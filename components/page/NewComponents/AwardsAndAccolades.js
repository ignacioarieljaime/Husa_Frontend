import AwardsNavIcon from 'components/icons/AwardsNavIcon'
import { useWindowSize } from 'hooks/useWindowSize'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import AwardsAndAccoladesItems from './AwardsAndAccoladesItems'

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

	const itemSizes = {
		3: '350px',
		2: '660px',
		1: '100%'
	}

	return (
		<section>
			<div
				id={data?.name + data?.id}
				className='awards_and_accolades'
				ref={ref}>
				<h3
					className='awards_and_accolades__title'
					dangerouslySetInnerHTML={{ __html: content?.title?.value }}></h3>
				{content?.list?.value && content?.list?.value.length && (
					<>
						<div
							className={`awards_and_accolades__cards_wrapper custom_container_${
								content?.list?.value.length
							} ${
								(content?.list?.value.length < 3 && windowSize[0] <= 768) ||
								(content?.list?.value.length === 3 && windowSize[0] <= 1050) ||
								content?.list?.value.length >= 4
									? 'd-none'
									: ''
							}`}
							style={{
								gridTemplateColumns: `repeat(
									${content?.list?.value.length},
									minmax(calc(${100 / content?.list?.value?.length}% - 24px), ${
									itemSizes[content?.list?.value.length]
								})
								)`
							}}>
							{content?.list?.value.map((item, index) => (
								<div
									style={{ gridColumn: index + 1 + ' / ' + (index + 2) }}
									className={`awards_and_accolades__cards_wrapper__card item__${
										content?.list?.value.length <= 2
											? content?.list?.value.length
											: 3
									} ${item?.link?.value ? '_has_link' : ''}`}
									key={index}>
									<img
										src={item?.image?.src}
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
										{item?.link?.value && content?.list?.value.length < 3 && (
											<Link
												href={item?.link?.value}
												target={
													item?.link?.target ? item.link?.target : '_self'
												}>
												<a
													className='n-btn small primary-text btn-outline awards_and_accolades__cards_wrapper__card__content__link'
													target={
														item?.link?.target ? item.link?.target : '_self'
													}>
													{item?.link?.title}
												</a>
											</Link>
										)}
									</div>
									{item?.link?.value && content?.list?.value.length >= 3 && (
										<Link
											href={item?.link?.value}
											target={
												item?.link?.target ? item.link?.target : '_self'
											}>
											<a
												className='n-btn small primary-text btn-outline awards_and_accolades__cards_wrapper__card__content__link'
												target={
													item?.link?.target ? item.link?.target : '_self'
												}>
												{item?.link?.title}
											</a>
										</Link>
									)}
								</div>
							))}
						</div>
						{(content?.list?.value.length < 3 && windowSize[0] <= 768) ||
						(content?.list?.value.length === 3 && windowSize[0] <= 1050) ||
						content?.list?.value.length >= 4 ? (
							<Swiper
								slidesPerView={'auto'}
								navigation={{
									enabled: true,
									prevEl: navigationPrevRef.current,
									nextEl: navigationNextRef.current
								}}
								pagination={{
									clickable: true
								}}
								initialSlide={
									windowSize[0] >= 768 ? content?.list?.value.length / 2 : 0
								}
								grabCursor={true}
								spaceBetween={windowSize[0] < 768 ? 16 : 20}
								centeredSlides={true}
								modules={[Navigation, Pagination]}
								className={`w-100`}
								style={{
									gridTemplateColumns: `repeat(${
										content?.list?.value.length
									}, ${windowSize[0] <= 768 ? '300px' : '350px'})`
								}}>
								{content?.list?.value.map((item, index) => (
									<SwiperSlide
										style={{ gridColumn: index + 1 + ' / ' + (index + 2) }}
										className={` w-fit`}
										key={index}>
										<AwardsAndAccoladesItems
											data={item}
											length={content?.list?.value.length / 2}
										/>
									</SwiperSlide>
								))}
								<div className='swiper-button-prev' ref={navigationPrevRef}>
									<AwardsNavIcon />
								</div>
								<div className='swiper-button-next' ref={navigationNextRef}>
									<AwardsNavIcon />
								</div>
							</Swiper>
						) : null}
					</>
				)}
			</div>
		</section>
	)
}

export default AwardsAndAccolades
