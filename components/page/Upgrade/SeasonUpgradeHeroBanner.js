import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const SeasonUpgradeHeroBanner = ({ data }) => {
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
				className='season_upgrade_hero_banner'>
				<img
					src={structure?.backgound?.src}
					alt={structure?.backgound?.alt}
					className='background'
				/>
				{structure?.image?.src && (
					<img
						src={structure?.image?.src}
						alt={structure?.image?.alt}
						className='image'
					/>
				)}
				{structure?.link?.value && (
					<Link
						target={structure?.link?.target ? structure?.link?.target : '_self'}
						href={structure?.link?.value}>
						<a
							target={
								structure?.link?.target ? structure?.link?.target : '_self'
							}
							className='link'>
							{structure?.link?.title}
						</a>
					</Link>
				)}
			</div>
		</section>
	)
}

export default SeasonUpgradeHeroBanner
