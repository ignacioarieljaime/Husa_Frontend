import React from 'react'
import Link from 'next/link'
import DownloadIconV2 from 'components/icons/DownloadIconV2'
import useOutsideClick from 'hooks/useOutsideClick'
import { useRef } from 'react'
import { useState, useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useWindowSize } from 'hooks/useWindowSize'
import '@splidejs/react-splide/css'

const LightBoxModal = ({
	id,
	caption,
	video,
	image,
	link,
	isVisible,
	visibleHandler,
	activateSwiper,
	dataList,
	activeItemIndex
}) => {
	const [currentIndex, setCurrentIndex] = useState(activeItemIndex)
	const [hasInteracted, setHasInteracted] = useState(false)
	const mainSwiperRef = useRef(null)
	const thumbsSwiperRef = useRef(null)
	const windowSize = useWindowSize()

	const boxRef = useRef()

	const outSide = useOutsideClick(boxRef)

	const newIndexHandler = indexUpdate => {
		setCurrentIndex(indexUpdate)
	}

	function listMovementHandler(rowAmount, rowTotal, percent, firstOpen) {
		const numberOfIntervals = Math.floor(rowTotal / rowAmount)
		const pageMovePercent = percent
		const beforeLastRowHighestIndex = rowAmount * numberOfIntervals - 1

		for (let i = 0; i < numberOfIntervals; i++) {
			const lowerBound = i * rowAmount
			const upperBound = (i + 1) * rowAmount

			if (currentIndex >= lowerBound && currentIndex < upperBound)
				thumbsSwiperRef.current.splideRef.current.lastChild.firstChild.style.transform = `translateX(-${
					pageMovePercent * i
				}%)`

			if (firstOpen && currentIndex > beforeLastRowHighestIndex)
				thumbsSwiperRef.current.splideRef.current.lastChild.firstChild.style.transform = `translateX(-${
					pageMovePercent * i * 2
				}%)`
		}
	}

	function validateCaptions(_caption) {
		let temp = _caption?.split('<p>')[1]?.split('</p>')[0]
		if (temp?.length > 100) temp = '<p>' + temp?.substring(0, 100) + '...</p>'
		return temp
	}

	useEffect(() => {
		if (mainSwiperRef.current && thumbsSwiperRef.current) {
			mainSwiperRef.current.sync(thumbsSwiperRef.current.splide)
		}
	}, [mainSwiperRef, thumbsSwiperRef])

	useEffect(() => {
		if (windowSize[0] <= 768)
			listMovementHandler(5, Math.ceil(dataList?.length / 5) * 5, 94.67)
		if (windowSize[0] > 768)
			listMovementHandler(5, Math.ceil(dataList?.length / 5) * 5, 99.5)
	}, [currentIndex])

	useEffect(() => {
		initialPlacement()
	}, [windowSize])

	function renderChidren(main, _data, _index, _caption, style) {
		return (
			<>
				{_data?.video?.value ? (
					main ? (
						<div className='lightbox_iframe_container'>
							<iframe
								id={'LightBox' + _index + _data?.video?.title}
								src={
									_data?.video?.value +
									`${
										_data?.video?.value && _data?.video?.value.includes('?')
											? '&'
											: '?'
									}autopause=0`
								}
								alt={'LightBox' + id + video?.title}
								title={'LightBox' + id + video?.title}
								width='100%'
								height='100%'
								allow='autoplay; fullscreen; picture-in-picture'
								mozallowfullscreen='true'
								webkitallowfullscreen='true'
								allowFullScreen
								dataready={true}
								style={style}></iframe>
						</div>
					) : _data?.thumbnail_image?.src ? (
						<img
							src={_data?.thumbnail_image?.src}
							alt={_data?.thumbnail_image?.alt}
							className='ces_collage___collage_wrapper___media_list___item___thumbnail'
							width='100%'
							height='100%'
						/>
					) : (
						<iframe
							id={'LightBox' + _index + _data?.video?.title}
							src={
								_data?.video?.value +
								`${
									_data?.video?.value && _data?.video?.value.includes('?')
										? '&'
										: '?'
								}autopause=0`
							}
							alt={'LightBox' + id + video?.title}
							title={'LightBox' + id + video?.title}
							width='100%'
							height='100%'
							allow='autoplay; fullscreen; picture-in-picture'
							mozallowfullscreen='true'
							webkitallowfullscreen='true'
							allowFullScreen
							dataready={true}
							style={style}></iframe>
					)
				) : (
					<img src={_data?.image?.src} alt={_data?.image?.alt} />
				)}
				{_caption && _data?.caption?.value && (
					<div
						className={`lightbox___caption${
							_data?.video?.value ? ' video-caption' : ''
						}`}
						dangerouslySetInnerHTML={{
							__html: validateCaptions(_data?.caption?.value)
						}}></div>
				)}
			</>
		)
	}

	const mainOptions = {
		type: 'slide',
		perPage: 1,
		perMove: 1,
		gap: '1rem',
		pagination: false,
		arrows: false,
		height: '100%',
		start: activeItemIndex,
		waitForTransition: true
	}

	const thumbPageHandler = thumbIndex => {
		const thumbsOptions = {
			type: 'slide',
			rewind: false,
			gap: '0px',
			pagination: false,
			cover: true,
			focus: currentIndex,
			isNavigation: true,
			start: activeItemIndex,
			perMove: 5
		}

		const thumbsOptionsTransition = {
			type: 'slide',
			rewind: false,
			gap: '0px',
			pagination: false,
			cover: true,
			focus: 'left',
			isNavigation: true,
			start: activeItemIndex,
			perMove: 5
		}

		if (thumbIndex !== 0 && thumbIndex % 5 === 0) {
			return thumbsOptionsTransition
		} else {
			return thumbsOptions
		}
	}

	const initialPlacement = () => {
		if (!hasInteracted) {
			if (windowSize[0] <= 768) {
				listMovementHandler(5, dataList?.length, 94.67, true)
				setHasInteracted(true)
			}
			if (windowSize[0] > 768) {
				listMovementHandler(5, dataList?.length, 99.5, true)
				setHasInteracted(true)
			}
		}
	}

	useEffect(() => {
		if (isVisible) {
			document.getElementById('main_body').style.marginRight =
				window.innerWidth -
				document.getElementById('main_body').offsetWidth +
				'px'
			document.getElementById('main_body').style.overflow = 'hidden'
		} else {
			document.getElementById('main_body').style.overflow = 'unset'
			document.getElementById('main_body').style.marginRight = '0px'
		}
	}, [isVisible])

	return (
		isVisible && (
			<>
				<div
					onClick={() => {
						if (outSide) {
							visibleHandler()
						}
					}}
					className='dropdown-select-box-backdrop light_box_backdrop'></div>
				<div
					ref={boxRef}
					className='lightbox'
					style={activateSwiper ? { maxWidth: '880px' } : {}}>
					<div className='lightbox___top_bar'>
						<button
							className='lightbox___top_bar___back'
							onClick={visibleHandler}>
							<FontAwesomeIcon icon={faChevronLeft} />
							<span>Back</span>
						</button>
						{link?.title && (link?.value || image?.src) ? (
							!dataList ? (
								<Link
									target={link?.target ? link?.target : '_self'}
									href={
										image?.src
											? image?.src.split('.com')[0] +
											  '.com/download/f' +
											  image?.src.split('.com')[1]
											: link?.value
											? link?.value
											: '#'
									}>
									<a
										target={link?.target ? link?.target : '_self'}
										className='n-btn outline-black transparent d-flex gap-2 align-items-center w-fit medium'>
										{link?.title}
										<DownloadIconV2 color='#000' width='16' height='16' />
									</a>
								</Link>
							) : (
								(dataList[currentIndex]?.link?.value ||
									dataList[currentIndex]?.image?.src) &&
								dataList[currentIndex]?.link?.title && (
									<Link
										target={
											dataList[currentIndex]?.link?.target
												? dataList[currentIndex]?.link?.target
												: '_self'
										}
										href={
											dataList[currentIndex]?.image?.src
												? dataList[currentIndex]?.image?.src.split('.com')[0] +
												  '.com/download/f' +
												  dataList[currentIndex]?.image?.src.split('.com')[1]
												: link?.value
												? link?.value
												: '#'
										}>
										<a
											target={link?.target ? link?.target : '_self'}
											className='n-btn outline-black transparent d-flex gap-2 align-items-center w-fit medium'>
											{link?.title}
											<DownloadIconV2 color='#000' width='16' height='16' />
										</a>
									</Link>
								)
							)
						) : null}
						{/* {!dataList ?
							<Link
								target={link?.target ? link?.target : '_self'}
								href={
									link?.value ?
									link?.value :
									image?.src ?
									image?.src
									: '#'
								}
								>
								<a
									target={link?.target ? link?.target : '_self'}
									className='n-btn outline-black transparent d-flex gap-2 align-items-center w-fit medium'>
									{link?.title}
									<DownloadIconV2 color='#000' width='16' height='16' />
								</a>
							</Link> :
							(dataList[currentIndex]?.link?.value || dataList[currentIndex]?.image?.src) && dataList[currentIndex]?.link?.title && (
								<Link
									target={dataList[currentIndex]?.link?.target ? dataList[currentIndex]?.link?.target : '_self'}
									href={
										dataList[currentIndex]?.link?.value ?
										dataList[currentIndex]?.link?.value :
										dataList[currentIndex]?.image?.src ?
										dataList[currentIndex]?.image?.src
										: '#'
									}
									>
									<a
										target={link?.target ? link?.target : '_self'}
										className='n-btn outline-black transparent d-flex gap-2 align-items-center w-fit medium'>
										{link?.title}
										<DownloadIconV2 color='#000' width='16' height='16' />
									</a>
								</Link>
						)} */}
						<button
							className='lightbox___top_bar___close'
							onClick={() => {
								visibleHandler()
							}}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='32'
								height='32'
								viewBox='0 0 32 32'
								fill='none'>
								<rect width='32' height='32' rx='16' fill='black' />
								<mask
									id='mask0_10508_7226'
									style={{ maskType: 'alpha' }}
									maskUnits='userSpaceOnUse'
									x='5'
									y='5'
									width='22'
									height='22'>
									<rect
										x='5.91992'
										y='5.7511'
										width='20.48'
										height='20.48'
										fill='#D9D9D9'
									/>
								</mask>
								<g mask='url(#mask0_10508_7226)'>
									<path
										d='M11.3812 21.9645L10.1865 20.7698L14.9652 15.9912L10.1865 11.2125L11.3812 10.0178L16.1599 14.7965L20.9385 10.0178L22.1332 11.2125L17.3545 15.9912L22.1332 20.7698L20.9385 21.9645L16.1599 17.1858L11.3812 21.9645Z'
										fill='white'
									/>
								</g>
							</svg>
						</button>
					</div>
					{!activateSwiper ? (
						<>
							<div className='w-100 my-md-0 my-auto h-75'>
								<div className='px-4 px-md-10 h-100'>
									<div className='lightbox___wrapper h-100'>
										{video?.value ? (
											<iframe
												id={'LightBox' + id + video?.title}
												src={
													video?.value +
													`${
														video?.value && video?.value.includes('?')
															? '&'
															: '?'
													}autopause=0`
												}
												alt={'LightBox' + id + video?.title}
												title={'LightBox' + id + video?.title}
												width='100%'
												height='100%'
												allow='autoplay; fullscreen; picture-in-picture'
												mozallowfullscreen
												webkitallowfullscreen
												allowfullscreen
												dataready={true}></iframe>
										) : image?.src ? (
											<img src={image?.src} alt={image?.alt} />
										) : null}
									</div>
								</div>
								{caption?.value && (
									<div
										className='lightbox___caption'
										dangerouslySetInnerHTML={{
											__html: validateCaptions(caption?.value)
										}}></div>
								)}
							</div>
						</>
					) : (
						dataList &&
						dataList.length > 0 && (
							<>
								<div className='w-100 my-md-0 my-auto h-75'>
									<div className='px-4 px-md-10 h-100'>
										<div className='lightbox___wrapper h-100'>
											<div className='lightbox___wrapper___main_carousel'>
												<Splide
													options={mainOptions}
													ref={mainSwiperRef}
													onMove={(slide, newIndex, prevIndex, destIndex) =>
														newIndexHandler(newIndex)
													}>
													{dataList.map((item, index) => (
														<SplideSlide key={index}>
															{renderChidren(true, item, index, true)}
														</SplideSlide>
													))}
												</Splide>
											</div>
										</div>
										<div className='lightbox___wrapper___thumbnails_carousel'>
											<Splide
												options={thumbPageHandler(currentIndex)}
												ref={thumbsSwiperRef}
												onMove={(slide, newIndex, prevIndex, destIndex) =>
													newIndexHandler(newIndex)
												}>
												{dataList.map((item, index) => (
													<SplideSlide key={index}>
														{renderChidren(false, item, index, false, {
															pointerEvents: 'none'
														})}
													</SplideSlide>
												))}
											</Splide>
										</div>
									</div>
								</div>
							</>
						)
					)}
				</div>
			</>
		)
	)
}

export default LightBoxModal
