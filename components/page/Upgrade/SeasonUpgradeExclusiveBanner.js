import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const SeasonUpgradeExclusiveBanner = ({ data }) => {
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
				style={{
					backgroundImage: `url(${content?.background?.src})`
				}}
				className='season_upgrade_exclusive_banner'>
				<div className='content'>
					<img
						src={content?.image?.src}
						alt={content?.image?.alt}
						className='image'
					/>
					<p className='pretitle'>{content?.subtitle?.value}</p>
					<h3
						className='title'
						dangerouslySetInnerHTML={{
							__html: content?.title?.value
						}}></h3>
					<p
						className='text mb-n1'
						dangerouslySetInnerHTML={{
							__html: content?.text?.value
						}}></p>
					{content?.link?.value && (
						<Link href={content?.link?.value}>
							<a className='n-btn large danger-upgrade full_btn_md'>
								{content?.link?.title}
							</a>
						</Link>
					)}
				</div>
			</div>
		</section>
	)
}

export default SeasonUpgradeExclusiveBanner
