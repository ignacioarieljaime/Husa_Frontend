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
    activeItemIndex,
    zIndex
}) => {
    const [currentIndex, setCurrentIndex] = useState(activeItemIndex)
    const [hasInteracted, setHasInteracted] = useState(false)
    const mainSwiperRef = useRef(null)
    const thumbsSwiperRef = useRef(null)
    const windowSize = useWindowSize()

    const boxRef = useRef()

    const outSide = useOutsideClick(boxRef)

    function isLastPage(pageLength, totalLength, index) {
        // const result = index > totalLength - pageLength;
        const isOnlyOnePage = (totalLength - pageLength) === 0

        const lastCompletePage = Math.floor((totalLength - 1) / pageLength);
        const lastPageIndex = totalLength - 1;

        if (index < pageLength && isOnlyOnePage) return true
        if (index < pageLength && !isOnlyOnePage) return false
        return index >= lastCompletePage * pageLength && index <= lastPageIndex;
    }

    const newIndexHandler = indexUpdate => {
        const displayPerPage = 5
        const lastPage = isLastPage(displayPerPage, dataList?.length, indexUpdate)

        setCurrentIndex(indexUpdate)

        if (lastPage) {
            document.getElementsByClassName('splide__arrow--next')[0].disabled = true
            document.getElementsByClassName('splide__arrow--prev')[0].disabled = false
            if (indexUpdate < displayPerPage) document.getElementsByClassName('splide__arrow--prev')[0].disabled = true
        }
        if (!lastPage)
            document.getElementsByClassName('splide__arrow--next')[0].disabled = false
    }

    function listMovementHandler(rowAmount, rowTotal, percent, firstOpen) {
        const numberOfIntervals = Math.floor(rowTotal / rowAmount)
        const pageMovePercent = percent
        const beforeLastRowHighestIndex = rowAmount * numberOfIntervals - 1

        if (windowSize[1] < 651 && windowSize[0] > 768) {

            for (let i = 0; i <= dataList?.length; i++) {
                mainSwiperRef.current.splideRef.current.lastChild.firstChild.style.transform = `translateX(-${
                    (mainSwiperRef?.current?.splideRef?.current?.clientWidth * 1.03818615752) * currentIndex
                }px)`
            }
        }


        for (let i = 0; i <= numberOfIntervals; i++) {
            const lowerBound = i * rowAmount
            const upperBound = (i + 1) * rowAmount

            if (currentIndex >= lowerBound && currentIndex < upperBound)
                thumbsSwiperRef.current.splideRef.current.lastChild.firstChild.style.transform = `translateX(-${
                    pageMovePercent * i
                }%)`

            if (firstOpen && currentIndex > beforeLastRowHighestIndex)
                thumbsSwiperRef.current.splideRef.current.lastChild.firstChild.style.transform = `translateX(-${
                    pageMovePercent * i
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
        // Short desktop height handling
        if (windowSize[1] < 651 && windowSize[0] > 768) {
            listMovementHandler(5, Math.ceil(dataList?.length / 5) * 5, 86)
        } else if (windowSize[0] <= 768) {
            // Standard mobile size handling
            listMovementHandler(5, Math.ceil(dataList?.length / 5) * 5, 94.67)
        }

        // Standard desktop size handling
        if (windowSize[1] > 651 && windowSize[0] > 768)
            listMovementHandler(5, Math.ceil(dataList?.length / 5) * 5, 99.5)
    }, [currentIndex])

    // Helper function for desktopShortHeightFix function
    const iterateSlides = (boolean, desiredClass, slides) => {
        if (boolean) {
            slides?.forEach((slide) => {
                slide.classList.add(`${desiredClass}`);
            });
        }
        if (!boolean) {
            slides?.forEach((slide) => {
                slide.classList.remove(`${desiredClass}`);
            });
        }
    }


    // Adjusts responsiveness in use-case of user having desktop screen with short height
    const desktopShortHeightFix = () => {
        let nextArrow = document.getElementsByClassName('splide__arrow splide__arrow--next')[0]
        let prevArrow = document.getElementsByClassName('splide__arrow splide__arrow--prev')[0]
        let nextFix = document.getElementsByClassName('rightHeightFix')[0]
        let prevFix = document.getElementsByClassName('leftHeightFix')[0]
        
        let lightBoxWrapper = document.getElementsByClassName('lightbox___wrapper___thumbnails_carousel')[0]
        let carouselContainer = document.getElementsByClassName('splide is-initialized splide--slide splide--ltr splide--draggable splide--nav is-active')[0]
        // let splideTrack = document.getElementById('splide02-track') MIGHT NEED, might control the container of slides height?
        let splideList = document.getElementsByClassName('splide__list')[1]


        let carouselActiveSlide = carouselContainer?.getElementsByClassName('is-active')[0]
        let carouselNormalSlides = carouselContainer?.querySelectorAll('.splide__slide:not(.is-active)')


        if (windowSize[1] < 651 && windowSize[0] > 768) {

            lightBoxWrapper?.classList.add('wrapper-short-responsive-fix')
            splideList?.classList.add('splide-list-height-fix')

            carouselActiveSlide?.classList.add('slide-active-height-fix')
            iterateSlides(true, 'slide-normal-height-fix', carouselNormalSlides)

            nextArrow?.classList.add("rightHeightFix")
            prevArrow?.classList.add("leftHeightFix")

        }

        if (windowSize[1] > 651 && nextFix && prevFix) {

            lightBoxWrapper?.classList.remove('wrapper-short-responsive-fix')
            splideList?.classList.remove('splide-list-height-fix')

            carouselActiveSlide?.classList.remove('slide-active-height-fix')
            iterateSlides(false, 'slide-normal-height-fix', carouselNormalSlides)

            nextArrow?.classList.remove('rightHeightFix')
            prevArrow?.classList.remove('leftHeightFix')
        }
    }

    useEffect(() => {
        initialPlacement()
        desktopShortHeightFix()

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
            if (windowSize[1] < 651 && windowSize[0] > 768) {
                listMovementHandler(5, Math.ceil(dataList?.length / 5) * 5, 86, true)
                setHasInteracted(true)
            } else if (windowSize[0] <= 768) {
                listMovementHandler(5, dataList?.length, 94.67, true)
                setHasInteracted(true)
            }

            if (windowSize[1] > 651 && windowSize[0] > 768) {
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
                            document.getElementById('main_body').style.overflow = 'unset'
                            document.getElementById('main_body').style.marginRight = '0px'
                        }
                    }}
                    className='dropdown-select-box-backdrop light_box_backdrop'></div>
                <div
                    ref={boxRef}
                    className='lightbox'
                    style={
                        activateSwiper
                            ? {
                                    maxWidth:
                                    windowSize[1] < 651
                                        ? 1 * windowSize[1] - 32 + 'px'
                                        :
                                    windowSize[1] < 800
                                        ? 1.3 * windowSize[1] - 32 + 'px'
                                        : '880px',
                                    zIndex:
                                    windowSize[1] < 651
                                        ? `${zIndex + 10}`
                                        : `${zIndex}`
                                    
                                }
                            : {
                                    maxWidth:
                                        windowSize[1] < 800
                                            ? 1.3 * windowSize[1] - 32 + 'px'
                                            : '1000px',
                                    zIndex: `${zIndex}`
                              }
                    }>
                    <div className='lightbox___top_bar'>
                        <button
                            className='lightbox___top_bar___back'
                            onClick={() => {
                                visibleHandler()
                                document.getElementById('main_body').style.overflow = 'unset'
                                document.getElementById('main_body').style.marginRight = '0px'
                            }}>
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
                        <button
                            className='lightbox___top_bar___close'
                            onClick={() => {
                                visibleHandler()
                                document.getElementById('main_body').style.overflow = 'unset'
                                document.getElementById('main_body').style.marginRight = '0px'
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
                                    <div className='lightbox___wrapper'>
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
                                                }
                                                onArrowsUpdated={slide => newIndexHandler(slide.index)}>
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
