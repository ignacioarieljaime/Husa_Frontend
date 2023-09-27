import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const SeasonUpgrade2KHeroBanner = ({ data }) => {
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(data?.structure)
	}, [])
	return (
		<section>
			<div id={data?.name + data?.id} className='season_upgrade_2k_hero'></div>
		</section>
	)
}

export default SeasonUpgrade2KHeroBanner
