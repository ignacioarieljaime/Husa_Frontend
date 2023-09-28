import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const SeasonUpgradeHeroBanner = ({ data }) => {
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
				className='season_upgrade_hero_banner'>
				<img
					src={content?.backgound?.src}
					alt={content?.backgound?.alt}
					className='background'
				/>
				<img
					src={content?.image?.src}
					alt={content?.image?.alt}
					className='image'
				/>
			</div>
		</section>
	)
}

export default SeasonUpgradeHeroBanner
