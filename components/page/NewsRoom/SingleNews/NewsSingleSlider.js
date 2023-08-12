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

	async function forceDownload(url, fileName) {
		var xhr = new XMLHttpRequest()
		xhr.open('GET', url, true)
		xhr.responseType = 'blob'
		xhr.onload = function () {
			var urlCreator = window.URL || window.webkitURL
			var imageUrl = urlCreator.createObjectURL(this.response)
			var tag = document.createElement('a')
			tag.href = imageUrl
			tag.download = fileName
			document.body.appendChild(tag)
			tag.click()
			document.body.removeChild(tag)
		}
		xhr.send()
	}

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
						<div className={`slider_item`}>
							<CustomImage
								src={item?.image?.src}
								alt={item?.image?.alt}
								wrapperHeight={'100%'}
								wrapperWidth={'100%'}
								className='background'
							/>
							<div className='buttons'>
								<button
									className='n-btn outline-white'
									onClick={() =>
										setImageUrl(imageUrl ? null : item?.image?.src)
									}>
									<span style={{ paddingTop: '3px' }}>
										{item?.EnlargeBtn?.value}{' '}
									</span>
									<ResizeIcon />
								</button>
								<button
									className='n-btn outline-white'
									onClick={() =>
										forceDownload(item?.image?.src, 'Featured Image')
									}>
									<span style={{ paddingTop: '3px' }}>
										{item?.downloadBtn?.title}
									</span>{' '}
									<DownloadIconV2 />
								</button>
							</div>
							<Link href={item?.link?.value || '/'}>
								<a
									className='d-block w-100 h-100 position-absolute left-0 top-0'
									style={{ zIndex: '2' }}></a>
							</Link>

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
