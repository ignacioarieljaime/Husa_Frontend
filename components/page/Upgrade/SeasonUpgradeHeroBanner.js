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
					// src={content?.background?.src}
					src='https://files.hisense-usa.com/storage/hisense/asset/images/664e4cd3ae897e.webp'
					alt={content?.background?.alt}
					className='background'
				/>
				<img
					src='https://files.hisense-usa.com/storage/hisense/asset/images/664b16ff138258.webp'
					//  src={content?.image?.src}

					alt={content?.image?.alt}
					className='image'
				/>
			</div>
		</section>
	)
}

export default SeasonUpgradeHeroBanner
