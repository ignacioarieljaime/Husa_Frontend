import CustomImage from 'components/common/CustomImage'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
import { useCountdown } from 'hooks/useCountdown'
import { useSwiper } from 'swiper/react'

const BlockFeaturedItem = ({
	data,
	activateLightBox,
	isLightBoxValid,
	length
}) => {
	const [days, hours, minutes, seconds] = useCountdown(data?.date?.value)

	const swiper = useSwiper()

	useEffect(() => {
		swiper.slideTo(length > 2 ? 1 : 0)
	}, [length])

	return (
		<>
			<h3 className='slider-title fs-2'>{data?.title?.value}</h3>
			<div
				onClick={() => isLightBoxValid && activateLightBox()}
				className={`slider-body ${isLightBoxValid ? 'cursor-pointer' : ''}`}>
				{data?.video?.value ? (
					<div className='slider-video'>
						<video autoPlay={true} muted={true} loop={true}>
							<source src={data?.video?.value} />
							{data?.image?.alt}
						</video>
					</div>
				) : data?.image?.src ? (
					<CustomImage
						src={data?.image?.src}
						alt={data?.image?.alt}
						className='slider-image'
						wrapperWidth={'100%'}
					/>
				) : null}
				<div className='slider-content'>
					{data?.activate_date?.value && (
						<div className='countdown_timer'>
							<div>
								<div>{days}</div>
								<div>DAYS</div>
							</div>
							<div>
								<div>{hours}</div>
								<div>HRS</div>
							</div>
							<div>
								<div>{minutes}</div>
								<div>MIN</div>
							</div>
							<div>
								<div>{seconds}</div>
								<div>SEC</div>
							</div>
						</div>
					)}
					<h5 className='description d-none d-md-block'>
						{data?.description?.value}
					</h5>
					{data?.link?.title ? (
						isLightBoxValid ? (
							<button
								onClick={() => activateLightBox()}
								className='n-btn outline-white transparent d-block w-fit medium mx-auto'>
								{data?.link?.title}
							</button>
						) : data?.link?.value ? (
							<Link
								target={data?.link?.target ? data?.link?.target : '_self'}
								href={data?.link?.value}>
								<a
									target={data?.link?.target ? data?.link?.target : '_self'}
									className='n-btn outline-white transparent d-block w-fit medium mx-auto'>
									{data?.link?.title}
									{data?.link?.target === '_blank' && (
										<img
											style={{ marginLeft: '10px' }}
											src={OpenPageOnNewTab.src}
										/>
									)}
								</a>
							</Link>
						) : null
					) : null}
					{data?.video?.value && (
						<span className='play'>
							<FontAwesomeIcon
								icon={faPlayCircle}
								size={'xl'}
								className='ms-2'
							/>
						</span>
					)}
				</div>
			</div>
		</>
	)
}

export default BlockFeaturedItem
