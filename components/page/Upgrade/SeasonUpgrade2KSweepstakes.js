import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const SeasonUpgrade2KSweepstakes = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState(null)
	const router = useRouter()
	const ref = useRef()
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
				className='season_upgrade_2k_sweepstakes'
				style={{ backgroundImage: `url(${structure?.background?.src})` }}>
				<img
					className='top_image'
					src={structure?.topImage?.src}
					alt={structure?.topImage?.alt}
				/>
				<h3
					className='title'
					dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></h3>
				<img
					className='image'
					src={structure?.image?.src}
					alt={structure?.image?.alt}
				/>
				<div>
					<div
						className='subtitle'
						dangerouslySetInnerHTML={{
							__html: structure?.subtitle?.value
						}}></div>
					{structure?.link?.value && (
						<Link
							href={structure?.link?.value}
							target={
								structure?.link?.target ? structure?.link?.target : '_self'
							}>
							<a
								className='n-btn black medium d-block w-fit mx-auto'
								target={
									structure?.link?.target ? structure?.link?.target : '_self'
								}>
								{structure?.link?.title}
							</a>
						</Link>
					)}
				</div>
			</div>
		</section>
	)
}

export default SeasonUpgrade2KSweepstakes
