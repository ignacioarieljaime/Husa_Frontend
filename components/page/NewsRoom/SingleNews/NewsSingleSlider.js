import React, { useState } from 'react'

import { Pagination, Navigation } from 'swiper'
import CustomImage from 'components/common/CustomImage'
import ResizeIcon from 'components/icons/ResizeIcon'
import DownloadIconV2 from 'components/icons/DownloadIconV2'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

import Link from 'next/link'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import axios from 'axios'
const NewsSingleSlider = ({ data }) => {
	let { structure } = data
	const [imageUrl, setImageUrl] = useState(null)

	// async function forceDownload(url, fileName) {
	// 	var xhr = new XMLHttpRequest()
	// 	xhr.open('GET', url, true)
	// 	xhr.responseType = 'blob'
	// 	xhr.onload = function () {
	// 		var urlCreator = window.URL || window.webkitURL
	// 		var imageUrl = urlCreator.createObjectURL(this.response)
	// 		var tag = document.createElement('a')
	// 		tag.href = imageUrl
	// 		tag.download = fileName
	// 		document.body.appendChild(tag)
	// 		tag.click()
	// 		document.body.removeChild(tag)
	// 	}
	// 	xhr.send()
	// }

	return (
		<>
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
				className='news_single_slider'>
				{structure?.list?.value.map((item, index) => (
					<SplideSlide key={'slider-item-' + index}>
						<div className={`slider_item `}>
							<CustomImage
								src={item?.image?.src}
								alt={item?.image?.alt}
								wrapperHeight={'100%'}
								wrapperWidth={'100%'}
								className='background'
							/>
							<div
								onClick={() => setImageUrl(imageUrl ? null : item?.image?.src)}
								className='d-block w-100 h-100 position-absolute left-0 top-0'
								style={{ zIndex: '2' }}></div>
							<div className='buttons'>
								<button
									className='n-btn white medium'
									onClick={() =>
										setImageUrl(imageUrl ? null : item?.image?.src)
									}>
									<span>{item?.EnlargeBtn?.value} </span>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='10'
										height='10'
										viewBox='0 0 10 10'
										fill='none'>
										<path
											d='M0 10V6.66667H1.11111V8.11111L2.83333 6.38889L3.61111 7.16667L1.88889 8.88889H3.33333V10H0ZM6.66667 10V8.88889H8.11111L6.38889 7.16667L7.16667 6.38889L8.88889 8.11111V6.66667H10V10H6.66667ZM2.83333 3.61111L1.11111 1.88889V3.33333H0V0H3.33333V1.11111H1.88889L3.61111 2.83333L2.83333 3.61111ZM7.16667 3.61111L6.38889 2.83333L8.11111 1.11111H6.66667V0H10V3.33333H8.88889V1.88889L7.16667 3.61111Z'
											fill='black'
										/>
									</svg>
								</button>
								<a
									className='n-btn white medium'
									href={
										item?.image?.src.split('.com')[0] +
										'.com/download/f' +
										item?.image?.src.split('.com')[1]
									}>
									<span>{item?.downloadBtn?.title}</span>{' '}
									<DownloadIconV2 width='16' height='15' />
								</a>
							</div>

							<h6>{item?.subtitle?.value}</h6>
						</div>
					</SplideSlide>
				))}
			</Splide>
			{imageUrl && (
				<div className='news_single_slider_resize_image'>
					<TransformWrapper>
						<TransformComponent>
							<img src={imageUrl} alt='enlarged' />
						</TransformComponent>
					</TransformWrapper>
					<button onClick={() => setImageUrl(null)}>
						<ResizeIcon />
					</button>
				</div>
			)}
		</>
	)
}

export default NewsSingleSlider
