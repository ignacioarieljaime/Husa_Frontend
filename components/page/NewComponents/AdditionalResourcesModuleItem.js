import axios from 'axios'
import DownloadIconV2 from 'components/icons/DownloadIconV2'
import PlayIcon from 'components/icons/PlayIconV2'
import ArrowRight from 'components/icons/ArrowRight'
import { useWindowSize } from 'hooks/useWindowSize'
import moment from 'moment'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'

const AdditionalResourcesModuleItem = ({
	data,
	index,
	lightboxHandler,
	setLightBoxActiveIndex,
	hasVideo
}) => {
	const [cardData, setCardData] = useState({
		link: '/',
		target: '_self',
		title: '',
		subtitle: '',
		date: '',
		image: '',
		video: '',
		type: '',
		button_title: '',
		lightbox: {
			caption: '',
			video: '',
			image: '',
			link: ''
		}
	})
	const [width] = useWindowSize()
	const swiper = useSwiper()
	console.log(data)

	function setPostData(_data) {
		setCardData({
			link: _data?.route,
			title: _data?.title,
			subtitle: _data?.tags.join(' '),
			type: data?.type?.value,
			date:
				moment(_data?.published_at).format('MMM DD YYYY').split(' ')[0] +
				' ' +
				moment(_data?.published_at).format('MMM DD YYYY').split(' ')[1] +
				' ' +
				moment(_data?.published_at).format('MMM DD YYYY').split(' ')[2],
			image: _data?.meta?.find(item => item.name === 'property="og:image"')
				?.content,
			button_title: data?.button_title?.value
		})
	}

	async function getPostData(type, id) {
		try {
			let response = await axios.get(
				`${process.env.NEXT_PUBLIC_CXM_API_ROUTE}/getPosts?type=${type}&brand_id=3&perPage=200`,
				{
					headers: {
						BrandId: process.env.NEXT_PUBLIC_BRAND_ID
					}
				}
			)
			setPostData(response?.data?.data.find(item => item?.id == id))
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		if (swiper) {
			// swiper.slideTo(width >= 860 ? 1 : 0)
			// console.log('moved')
		}
		if (
			data?.type?.value === 'link' ||
			data?.type?.value === 'download' ||
			data?.type?.value === 'lightbox'
		) {
			setCardData({
				link: data?.link?.value,
				target: data?.link?.target,
				title: data?.title?.value,
				subtitle: data?.subtitle?.value,
				type: data?.type?.value,
				date: data?.date?.value,
				image: data?.image?.src,
				video: data?.video?.value,
				button_title: data?.button_title?.value
			})
		} else if (data?.type?.value === 'news') {
			getPostData('news', data?.selected_news?.value)
		} else {
			getPostData('blog', data?.selected_blog?.value)
		}
	}, [])

	console.log({"index": index, "data": cardData})
	console.log({"hasVid": hasVideo})

	const ModuleContentDiv = ({ children }) => {
		return (
			<div
				className='additional_resources_module___content___slider___item___wrapper cursor-pointer'
				onClick={e => {
					e.stopPropagation()
					if (
						data?.lightbox?.value?.image?.src ||
						data?.lightbox?.value?.video?.value
					) {
						setLightBoxActiveIndex(index)
						lightboxHandler()
					}
				}}>
				{children}
			</div>
		)
	}

	const ModuleContentLink = ({ children }) => {
		if (cardData.type === 'download') {
			if (cardData.link) {
				return (
					<Link href={cardData.link} target={cardData.target}>
						<a
							target={cardData.target}
							className='additional_resources_module___content___slider___item___wrapper'>
							{children}
						</a>
					</Link>
				)
			}
			if (cardData.image) {
				return (
					<a
						href={
							cardData.image.split('.com')[0] +
							'.com/download/f' +
							cardData.image.split('.com')[1]
						}
						target={cardData.target}
						className='additional_resources_module___content___slider___item___wrapper'>
						{children}
					</a>
				)
			}
		}
		return (
			<Link href={cardData?.link} target={cardData?.target}>
				<a
					target={cardData?.target}
					className='additional_resources_module___content___slider___item___wrapper'>
					{children}
				</a>
			</Link>
		)
	}

	const ModuleInnerContent = () => {
		return (
			<>
				<div className='additional_resources_module___content___slider___item___wrapper___image_wrapper'>
					{cardData?.video ? (
						<iframe
							src={cardData?.video}
							alt={cardData?.title}
							width='100%'
							height='100%'
							allow='autoplay; fullscreen; picture-in-picture'
							mozallowfullscreen='true'
							webkitallowfullscreen='true'
							className='additional_resources_module___content___slider___item___wrapper___image_wrapper___image'
							allowFullScreen={true}
							dataready='true'></iframe>
					) : (
						<img
							className='additional_resources_module___content___slider___item___wrapper___image_wrapper___image'
							src={cardData?.image}
							alt={cardData?.title}
						/>
					)}
				</div>
				<div className='additional_resources_module___content___slider___item___wrapper___body'>
					<div>
						<p className='additional_resources_module___content___slider___item___wrapper___body___subtitle'>
							{cardData?.subtitle}
						</p>
						<div
							className='additional_resources_module___content___slider___item___wrapper___body___title'
							dangerouslySetInnerHTML={{ __html: cardData?.title }}></div>
					</div>
					<div className='additional_resources_module___content___slider___item___wrapper___body___bottom_row'>
						<p className='additional_resources_module___content___slider___item___wrapper___body___bottom_row___date'>
							{cardData?.date}
						</p>
						{cardData.type === 'download' ? (
							cardData.link ? (
								<Link href={cardData.link} target={cardData.target}>
									<a
										target={cardData.target}
										className='additional_resources_module___content___slider___item___wrapper___body___bottom_row___link hoverEffect'>
										<span>{cardData?.button_title}</span>
										<DownloadIconV2 color='#00AAA6' />
									</a>
								</Link>
							) : cardData.image ? (
								<a
									href={
										cardData.image.split('.com')[0] +
										'.com/download/f' +
										cardData.image.split('.com')[1]
									}
									target={cardData.target}
									className='additional_resources_module___content___slider___item___wrapper___body___bottom_row___link hoverEffect'>
									<span>{cardData?.button_title}</span>
									<DownloadIconV2 color='#00AAA6' />
								</a>
							) : null
						) : cardData.type === 'lightbox' ? (
							<Link href={cardData.link} target={cardData.target}>
								<a
									target={cardData.target}
									className='additional_resources_module___content___slider___item___wrapper___body___bottom_row___link hoverEffect'>
									<span>{cardData?.button_title}</span>
									{hasVideo ? (
											<PlayIcon color='#00AAA6' />
										) :
										(
											<ArrowRight color='#00AAA6' height='8px' width='8px'/>
										)
									}
									
								</a>
							</Link>
						) : cardData.link && cardData.button_title ? (
							<Link href={cardData.link} target={cardData.target}>
								<a
									target={cardData.target}
									className='additional_resources_module___content___slider___item___wrapper___body___bottom_row___link hoverEffect'>
									<span>{cardData?.button_title}</span>
									<ArrowRight color='#00AAA6' height='8px' width='8px'/>
								</a>
							</Link>
						) : null}
					</div>
				</div>
			</>
		)
	}

	if (
		data?.lightbox?.value?.image?.src ||
		data?.lightbox?.value?.video?.value
	) {
		return (
			<ModuleContentDiv>
				<ModuleInnerContent />
			</ModuleContentDiv>
		)
	} else if (cardData?.link || cardData?.type === "download") {
		return (
			<ModuleContentLink>
				<ModuleInnerContent />
			</ModuleContentLink>
		)
	} else {
		return (
			<div className='additional_resources_module___content___slider___item___wrapper'>
				<ModuleInnerContent />
			</div>
		)
	}
}

export default AdditionalResourcesModuleItem
