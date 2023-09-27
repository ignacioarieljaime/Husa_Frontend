import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const SeasonUpgrade2KSweepstakes = ({ data }) => {
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(data?.structure)
	}, [])
	return (
		<section>
			<div
				id={data?.name + data?.id}
				className='season_upgrade_2k_sweepstakes'
				style={{ backgroundImage: `url(${content?.background?.src})` }}>
				<img
					className='top_image'
					src={content?.topImage?.src}
					alt={content?.topImage?.alt}
				/>
				<h3
					className='title'
					dangerouslySetInnerHTML={{ __html: content?.title?.value }}></h3>
				<img
					className='image'
					src={content?.image?.src}
					alt={content?.image?.alt}
				/>
			</div>
		</section>
	)
}

export default SeasonUpgrade2KSweepstakes
