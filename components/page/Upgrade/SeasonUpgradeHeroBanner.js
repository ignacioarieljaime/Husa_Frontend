import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const SeasonUpgradeHeroBanner = ({ data }) => {
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(data?.structure)
	}, [])

	return (
		<section>
			<div id={data?.name + data?.id} className='season_upgrade_hero_banner'>
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
