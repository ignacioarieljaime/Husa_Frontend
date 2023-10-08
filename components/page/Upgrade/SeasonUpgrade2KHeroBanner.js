import { useRouter } from 'next/router'
import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const SeasonUpgrade2KHeroBanner = ({ data }) => {
	const [content, setContent] = useState(null)
	const router = useRouter()
	const ref = useRef()
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
			<div
				id={data?.name + data?.id}
				ref={ref}
				className='season_upgrade_2k_hero'
				style={{ backgroundColor: content?.backgroundColor?.value }}>
				<div
					className='content_wrapper'
					style={{ backgroundImage: `url(${content?.background?.src})` }}>
					<img
						className='top_image'
						src={content?.image?.src}
						alt={content?.image?.alt}
					/>
					<div className='background_wrapper'>
						<img
							className='background'
							src={content?.background?.src}
							alt={content?.background?.alt}
						/>
					</div>
					<div className='dummy'></div>
					<div className='content'>
						<p className='pretitle'>{content?.subtitle?.value}</p>
						<h4
							className='title'
							dangerouslySetInnerHTML={{
								__html: content?.title?.value
							}}></h4>
						<div className='awards'>
							{content?.list?.value.map((item, index) => (
								<img
									key={index}
									src={item?.image?.src}
									alt={item?.image?.alt}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SeasonUpgrade2KHeroBanner
