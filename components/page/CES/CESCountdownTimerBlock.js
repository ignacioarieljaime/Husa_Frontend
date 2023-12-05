import { useCountdown } from 'hooks/useCountdown'
import { useRouter } from 'next/router'
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const CESCountdownTimerBlock = ({ data }) => {
	const [content, setContent] = useState(null)
	const router = useRouter()
	const ref = useRef()
	const [days, hours, minutes, seconds] = useCountdown(content?.date?.value)
	useEffect(() => {
		setContent(data?.structure)
		if (router.asPath.includes(data?.name + data?.id)) {
			setTimeout(() => {
				ref.current.scrollIntoView()
			}, 1000)
		}
	}, [])
	return (
		<section>
			<div ref={ref} id={data?.name + data?.id} className='ces_countdown_timer'>
				<div className='ces_countdown_timer___background'>
					<img src={content?.background?.src} alt={content?.background?.alt} />
				</div>
				<div className='ces_countdown_timer___content'>
					<div className='ces_countdown_timer___content___top'>
						<div className='ces_countdown_timer___content___top___image_wrapper'>
							{content?.left_image?.src && (
								<img
									src={content?.left_image?.src}
									alt={content?.left_image?.alt}
									className='ces_countdown_timer___content___top___image_wrapper___left_image'
								/>
							)}
							{content?.left_image?.src && content?.right_image?.src && (
								<div className='ces_countdown_timer___content___top___image_wrapper___divider'></div>
							)}
							{content?.right_image?.src && (
								<img
									src={content?.right_image?.src}
									alt={content?.right_image?.alt}
									className='ces_countdown_timer___content___top___image_wrapper___right_image'
								/>
							)}
						</div>
						<h4
							className='ces_countdown_timer___content___top___subtitle'
							dangerouslySetInnerHTML={{
								__html: content?.subtitle?.value
							}}></h4>
					</div>
					<div className='ces_countdown_timer___content___body'>
						<h1
							className='ces_countdown_timer___content___body___title'
							dangerouslySetInnerHTML={{ __html: content?.title?.value }}></h1>
						<div className='ces_countdown_timer___content___body___timer'>
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
						<div className='ces_countdown_timer___content___body___texts'>
							<h4
								className='ces_countdown_timer___content___body___texts___upper_text'
								dangerouslySetInnerHTML={{
									__html: content?.upper_text?.value
								}}></h4>
							<h5
								className='ces_countdown_timer___content___body___texts___lower_text'
								dangerouslySetInnerHTML={{
									__html: content?.lower_text?.value
								}}></h5>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CESCountdownTimerBlock
