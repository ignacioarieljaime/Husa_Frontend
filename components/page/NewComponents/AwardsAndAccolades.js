import AwardsNavIcon from 'components/icons/AwardsNavIcon'
import { useWindowSize } from 'hooks/useWindowSize'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import AwardsAndAccoladesItems from './AwardsAndAccoladesItems'
import QuoteIcon from 'components/icons/QuoteIcon'

function AwardsAndAccolades({ data, pim }) {
	const ref = useRef(null)
    const swiperRef = useRef(null)
	const router = useRouter()
	const windowSize = useWindowSize()
	const [content, setContent] = useState({})
    const [swiperTooBig, setSwiperTooBig] = useState(undefined)
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

    function sizeCheck(ref) {
        
        if (ref?.current?.firstChild?.children) {
            let width = 0;

            for (let i=0; i < ref?.current?.firstChild?.children.length; i++) {
                width = width + ref?.current?.firstChild?.children[i]?.clientWidth
            }

            if ((width + 200) >= windowSize[0]) setSwiperTooBig(true)
            else if ((width + 200) < windowSize[0]) setSwiperTooBig(false)

        }
    }

    useEffect(() => {
        if (swiperRef?.current?.firstChild?.children) sizeCheck(swiperRef);
	}, [windowSize[0]])

    // Helper function for useEffect
    function swiperSizeHandler(boolean, ref) {

        const firstChild = ref?.current?.firstChild;

        if (firstChild && boolean === true) {
          firstChild.classList.add('centerSlides');
          ref.current.classList.add('hide-gradient');
        }

        if (firstChild && boolean === false) {
            firstChild.classList.remove('centerSlides');
            ref.current.classList.remove('hide-gradient');
        }

    }

    useEffect(() => {
        if (swiperTooBig === false && swiperRef?.current) {
            swiperSizeHandler(true, swiperRef)
        }
        if (swiperTooBig === true && swiperRef?.current) {
            swiperSizeHandler(false, swiperRef)
        }
	}, [swiperTooBig])

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
							} ${content?.list?.value.length === 3 ? 'gapFix' : ''} ${
								(content?.list?.value.length < 3 && windowSize[0] <= 768) ||
								(content?.list?.value.length === 3 && windowSize[0] <= 1050) ||
								content?.list?.value.length >= 4
									? 'd-none'
									: ''
							}`}
							style={{
								gridTemplateColumns: `repeat(
									${content?.list?.value.length},
									minmax(calc(${content?.list?.value?.length === 3 ?
                                        `288px` :
                                        `${100 / content?.list?.value?.length}%`} - 24px), ${
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
                                            <span className='awards_and_accolades__cards_wrapper__card__content__texts__quote'>
                                                <QuoteIcon />
                                            </span>
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
                                ref={swiperRef}
								slidesPerView={'auto'}
								navigation={{
									enabled: swiperTooBig === true ? true : false,
									prevEl: navigationPrevRef.current,
									nextEl: navigationNextRef.current
								}}
								pagination={{
									clickable: true
								}}
								initialSlide={
									windowSize[0] >= 768 ? content?.list?.value.length / 2 : 0
								}
								grabCursor={swiperTooBig === true ? true : false}
                                allowTouchMove={swiperTooBig === true ? true : false}
								spaceBetween={windowSize[0] < 768 ? 16 : 20}
								centeredSlides={swiperTooBig === true ? false : false}
								modules={swiperTooBig === true ? [Navigation, Pagination] : []}
								className={`w-100`}
								style={{
									gridTemplateColumns: `repeat(${
										content?.list?.value.length
									}, ${windowSize[0] <= 768 ? '288px' : '288px'})`
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
                                {swiperTooBig &&
                                    <>
                                        <div className='swiper-button-prev' ref={navigationPrevRef}>
                                            <AwardsNavIcon />
                                        </div>
                                        <div className='swiper-button-next' ref={navigationNextRef}>
                                            <AwardsNavIcon />
                                        </div>
                                    </>
                                }

							</Swiper>
						) : null}
					</>
				)}
			</div>
		</section>
	)
}

export default AwardsAndAccolades