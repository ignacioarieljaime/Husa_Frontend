import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import LightBoxModal from '../NewComponents/LightBoxModal'
import { useWindowSize } from 'hooks/useWindowSize'

const CesCollageItem = ({ data, wrapperRef }) => {
	const [collapsed, setCollapsed] = useState(true)
	const [lightBoxStatus, setLightBoxStatus] = useState(false)
	const [lightBoxActiveIndex, setLightBoxActiveIndex] = useState(-1)
	const windowSize = useWindowSize()

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
								cItem?.video?.value ||
								(cItem?.image?.src && (collapsed ? cIndex < 10 : true)) ? (
									<div
										key={cIndex}
										className='ces_collage___collage_wrapper___media_list___item'>
										{cItem?.video?.value ? (
											<iframe
												id={'LandingVideoIframe' + cIndex}
												src={cItem?.video?.value}
												alt={'LandingVideoIframe' + cIndex + cItem?.video?.alt}
												title={
													'LandingVideoIframe' + cIndex + cItem?.video?.title
												}
												width='100%'
												height='100%'
												allow='fullscreen; picture-in-picture'
												mozallowfullscreen
												webkitallowfullscreen
												allowfullscreen
												dataready={true}></iframe>
										) : (
											<img
												src={cItem?.image?.src}
												alt={cItem?.image?.alt}
												width='100%'
												height='100%'
											/>
										)}
										<div
											className='ces_collage___collage_wrapper___media_list___item___overlay'
											onClick={() => {
												setLightBoxStatus(true)
												setLightBoxActiveIndex(cIndex)
											}}></div>
									</div>
								) : null
							)}
						</>
					)}
				</div>
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
			</div>
			{lightBoxStatus && (
				<LightBoxModal
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
