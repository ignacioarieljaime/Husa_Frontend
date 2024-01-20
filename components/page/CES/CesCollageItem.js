import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import LightBoxModal from '../NewComponents/LightBoxModal'
import { useWindowSize } from 'hooks/useWindowSize'
import CesPlayIcon from 'public/assets/images/ces_play_icon.png'

const CesCollageItem = ({ data, wrapperRef }) => {
	const [collapsed, setCollapsed] = useState(true)
	const [lightBoxStatus, setLightBoxStatus] = useState(false)
	const [lightBoxActiveIndex, setLightBoxActiveIndex] = useState(-1)
	const windowSize = useWindowSize()

	const collageScreenSizeHandler = cIndex => {
		if (windowSize[0] >= 900) return cIndex < data?.desktopColumns?.value * 2
		else return cIndex < data?.mobileColumns?.value * 2
	}

	return (
		<>
			<div className='ces_collage___collage_wrapper'>
				<h5
					className='ces_collage___collage_wrapper___title'
					dangerouslySetInnerHTML={{ __html: data?.title?.value }}></h5>
				<div
					className='ces_collage___collage_wrapper___media_list'
					style={{
						gridTemplateColumns: `repeat(${
							windowSize[0] >= 900
								? data?.desktopColumns?.value
								: data?.mobileColumns?.value
						},1fr)`
					}}>
					{data?.mediaList?.value && data?.mediaList?.value.length && (
						<>
							{data?.mediaList?.value.map((cItem, cIndex) =>
								(cItem?.video?.value || cItem?.image?.src) &&
								(collapsed ? collageScreenSizeHandler(cIndex) : true) ? (
									<div
										key={cIndex}
										className='ces_collage___collage_wrapper___media_list___item'>
										{cItem?.video?.value ? (
											cItem?.thumbnail_image?.src ? (
												<>
													<img
														src={cItem?.thumbnail_image?.src}
														alt={cItem?.thumbnail_image?.alt}
														className='ces_collage___collage_wrapper___media_list___item___thumbnail'
														width='100%'
														height='100%'
													/>
													<div
														className='ces_collage___collage_wrapper___media_list___item___thumbnail_overlay'
														onClick={() => {
															setLightBoxStatus(true)
															setLightBoxActiveIndex(cIndex)
														}}>
														<div className='ces_collage___collage_wrapper___media_list___item___thumbnail_overlay___content'>
															<img src={CesPlayIcon.src} alt='play icon' />
															<h6>Watch Video</h6>
														</div>
													</div>
												</>
											) : (
												<>
													<iframe
														id={'LandingVideoIframe' + cIndex}
														src={cItem?.video?.value}
														alt={
															'LandingVideoIframe' + cIndex + cItem?.video?.alt
														}
														title={
															'LandingVideoIframe' +
															cIndex +
															cItem?.video?.title
														}
														width='100%'
														height='100%'
														allow='fullscreen; picture-in-picture'
														mozallowfullscreen
														webkitallowfullscreen
														allowFullScreen
														dataready={true}></iframe>
													<div
														className='ces_collage___collage_wrapper___media_list___item___overlay'
														onClick={() => {
															setLightBoxStatus(true)
															setLightBoxActiveIndex(cIndex)
														}}></div>
												</>
											)
										) : (
											<img
												src={cItem?.image?.src}
												alt={cItem?.image?.alt}
												className='ces_collage___collage_wrapper___media_list___item___image'
												width='100%'
												height='100%'
												onClick={() => {
													setLightBoxStatus(true)
													setLightBoxActiveIndex(cIndex)
												}}
											/>
										)}
										{/* <div
											className='ces_collage___collage_wrapper___media_list___item___overlay'
											onClick={() => {
												setLightBoxStatus(true)
												setLightBoxActiveIndex(cIndex)
											}}></div> */}
									</div>
								) : null
							)}
						</>
					)}
				</div>
				{(windowSize[0] >= 900 &&
					data?.desktopColumns?.value * 2 < data?.mediaList?.value.length) ||
				(windowSize[0] < 900 &&
					data?.mobileColumns?.value * 2 < data?.mediaList?.value.length) ? (
					<button
						onClick={() => {
							setCollapsed(prev => !prev)
							!collapsed &&
								setTimeout(() => {
									wrapperRef.current.scrollIntoView({ behavior: 'smooth' })
								}, 0)
						}}
						className={`ces_collage___collage_wrapper___button ${
							collapsed ? '' : 'rotate'
						}`}>
						<span>{collapsed ? 'View More' : 'View Less'}</span>
						<FontAwesomeIcon icon={faChevronDown} size='sm' color='#fff' />
					</button>
				) : null}
			</div>
			{lightBoxStatus && (
				<LightBoxModal
					zIndex={99997}
					id={data?.id}
					caption={data?.mediaList?.value[lightBoxActiveIndex]?.caption}
					video={data?.mediaList?.value[lightBoxActiveIndex]?.video}
					image={data?.mediaList?.value[lightBoxActiveIndex]?.image}
					link={data?.mediaList?.value[lightBoxActiveIndex]?.link}
					isVisible={lightBoxStatus}
					visibleHandler={() => setLightBoxStatus(prevState => !prevState)}
					activateSwiper
					dataList={data?.mediaList?.value}
					activeItemIndex={lightBoxActiveIndex}
				/>
			)}
		</>
	)
}

export default CesCollageItem
