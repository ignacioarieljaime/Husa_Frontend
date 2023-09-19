import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const SeasonUpgradeLimitedTimeOfferBanner = ({ data }) => {
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(data?.structure)
	}, [])
	return (
		<section>
			<div
				id={data?.name + data?.id}
				style={{
					backgroundImage: `url(${content?.background?.src})`
				}}
				className='season_upgrade_limited_time_banner'>
				<div className='text_content'>
					<p className='pretitle'>{content?.subtitle?.value}</p>
					<h4
						className='title'
						dangerouslySetInnerHTML={{
							__html: content?.title?.value
						}}></h4>
					<p
						className='text'
						dangerouslySetInnerHTML={{
							__html: content?.text?.value
						}}></p>
					{content?.link?.value && (
						<Link href={content?.link?.value}>
							<a className='n-btn medium danger-upgrade full_btn_md'>
								{content?.link?.title}
							</a>
						</Link>
					)}
				</div>
				<img
					src={content?.image?.src}
					alt={content?.image?.alt}
					className='image'
				/>
			</div>
		</section>
	)
}

export default SeasonUpgradeLimitedTimeOfferBanner
