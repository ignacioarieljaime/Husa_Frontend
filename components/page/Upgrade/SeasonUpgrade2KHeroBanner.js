import { useWindowSize } from 'hooks/useWindowSize'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const SeasonUpgrade2KHeroBanner = ({ data }) => {
	const [content, setContent] = useState(null)
	const router = useRouter()
	const ref = useRef()
	const windowSize = useWindowSize()
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
					<div className='content top'>
						{content?.subtitle?.value && (
							<p className='pretitle'>{content?.subtitle?.value}</p>
						)}
						<h4
							className='title'
							dangerouslySetInnerHTML={{
								__html: content?.title?.value
							}}></h4>
					</div>
					{windowSize[0] <= 768 && content?.link?.value ? (
						<Link
							href={content?.link?.value}
							target={content?.link?.target ? content?.link?.target : '_self'}>
							<a
								className='background_wrapper d-block'
								target={
									content?.link?.target ? content?.link?.target : '_self'
								}>
								<img
									className='background'
									src={content?.background?.src}
									alt={content?.background?.alt}
								/>
							</a>
						</Link>
					) : (
						<div className='background_wrapper'>
							<img
								className='background'
								src={content?.background?.src}
								alt={content?.background?.alt}
							/>
						</div>
					)}

					{content?.link?.value ? (
						<Link
							href={content?.link?.value}
							target={content?.link?.target ? content?.link?.target : '_self'}>
							<a
								className='dummy d-none d-md-block'
								target={
									content?.link?.target ? content?.link?.target : '_self'
								}></a>
						</Link>
					) : (
						<div className='dummy'></div>
					)}
					<div className='content'>
						<div className='awards'>
							{content?.list?.value.map((item, index) => (
								<img
									key={index}
									src={item?.image?.src}
									alt={item?.image?.alt}
									style={{
										width:
											'calc(' + 100 / content?.list?.value.length + '% - 24px)'
									}}
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
