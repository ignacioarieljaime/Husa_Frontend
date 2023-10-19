import React from 'react'

import Link from 'next/link'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { useWindowSize } from 'hooks/useWindowSize'

const NewsRoomSlider = ({ data }) => {
	let { structure } = data
	const windowSize = useWindowSize()
	return (
		<div className='news_room_slider'>
			<Splide
				options={{
					pagination: true,
					perPage: 1,
					perMove: 1,
					gap: '1rem',
					classes: {
						arrows:
							structure?.list?.value.length > 1
								? 'splide__arrows'
								: 'splide__arrows hide'
					}
				}}
				className='news_room_slider_box'>
				{structure?.list?.value.map((item, index) => (
					<SplideSlide key={'slider-item-' + index}>
						<Link
							href={item?.btn?.value || '/'}
							// style={{ backgroundImage: `url(${item?.image?.src})` }}
						>
							<a className='slider_item d-block'>
								<div className='slider_bg'>
									{windowSize[0] >= 768 ? (
										<img
											src={item?.image?.src}
											alt={item?.image?.alt}
											className={'bg'}
										/>
									) : (
										<img
											src={item?.mobileImage?.src}
											alt={item?.mobileImage?.alt}
											className={'bg'}
										/>
									)}
								</div>
								<div className='slider_content'>
									{item?.title?.value && <h5>{item?.title?.value}</h5>}
									{item?.subtitle?.value && <h6>{item?.subtitle?.value}</h6>}
									{item?.btn?.value && item?.btn?.title && (
										<Link
											target={item?.btn?.target || '_self'}
											href={item?.btn?.value}>
											<a target={item?.btn?.target || '_self'}>
												{item?.btn?.title}
											</a>
										</Link>
									)}
								</div>
							</a>
						</Link>
						<h3 className='subheading'>{item?.subheading?.value}</h3>
					</SplideSlide>
				))}
			</Splide>
		</div>
	)
}

export default NewsRoomSlider
