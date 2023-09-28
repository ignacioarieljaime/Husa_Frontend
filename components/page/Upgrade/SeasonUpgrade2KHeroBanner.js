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
			<div
				id={data?.name + data?.id}
				className='season_upgrade_2k_hero'
				style={{ backgroundColor: content?.backgroundColor?.value }}>
				<img
					className='top_image'
					src={content?.image?.src}
					alt={content?.image?.alt}
				/>
				<img
					className='background'
					src={content?.background?.src}
					alt={content?.background?.alt}
				/>
				<div className='content'>
					<p className='pretitle'>{content?.subtitle?.value}</p>
					<h4
						className='title'
						dangerouslySetInnerHTML={{
							__html: content?.title?.value
						}}></h4>
					<div className='awards'>
						{content?.list?.value.map((item, index) => (
							<img key={index} src={item?.image?.src} alt={item?.image?.alt} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default SeasonUpgrade2KHeroBanner
