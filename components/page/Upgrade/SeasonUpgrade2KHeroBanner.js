import { useWindowSize } from 'hooks/useWindowSize'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const SeasonUpgrade2KHeroBanner = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState(null)
	const router = useRouter()
	const ref = useRef()
	const windowSize = useWindowSize()
	useEffect(() => {
		// setContent(structure)
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
				style={{ backgroundColor: structure?.backgroundColor?.value }}>
				<div
					className='content_wrapper'
					style={{ backgroundImage: `url(${structure?.background?.src})` }}>
					<div className='content top'>
						{structure?.subtitle?.value && (
							<p className='pretitle'>{structure?.subtitle?.value}</p>
						)}
						<h4
							className='title'
							dangerouslySetInnerHTML={{
								__html: structure?.title?.value
							}}></h4>
					</div>
					{windowSize[0] <= 768 && structure?.link?.value ? (
						<Link
							href={structure?.link?.value}
							target={
								structure?.link?.target ? structure?.link?.target : '_self'
							}>
							<a
								className='background_wrapper d-block'
								target={
									structure?.link?.target ? structure?.link?.target : '_self'
								}>
								<img
									className='background'
									src={structure?.background?.src}
									alt={structure?.background?.alt}
								/>
							</a>
						</Link>
					) : (
						<div className='background_wrapper'>
							<img
								className='background'
								src={structure?.background?.src}
								alt={structure?.background?.alt}
							/>
						</div>
					)}

					{structure?.link?.value ? (
						<Link
							href={structure?.link?.value}
							target={
								structure?.link?.target ? structure?.link?.target : '_self'
							}>
							<a
								className='dummy d-none d-md-block'
								target={
									structure?.link?.target ? structure?.link?.target : '_self'
								}></a>
						</Link>
					) : (
						<div className='dummy'></div>
					)}
					<div className='content'>
						<div className='awards'>
							{structure?.list?.value.map((item, index) => (
								<img
									key={index}
									src={item?.image?.src}
									alt={item?.image?.alt}
									style={{
										width:
											'calc(' +
											100 / structure?.list?.value.length +
											'% - 24px)'
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
