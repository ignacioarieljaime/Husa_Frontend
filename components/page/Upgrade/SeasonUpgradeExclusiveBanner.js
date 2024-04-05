import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const SeasonUpgradeExclusiveBanner = ({ data }) => {
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
				style={{
					backgroundImage: `url(${structure?.background?.src})`
				}}
				className='season_upgrade_exclusive_banner'>
				<div className='content'>
					<img
						src={structure?.image?.src}
						alt={structure?.image?.alt}
						className='image'
					/>
					<p 
						className='pretitle' 
						dangerouslySetInnerHTML={{
							__html: structure?.subtitle?.value
						}}></p>
					<h3
						className='title'
						dangerouslySetInnerHTML={{
							__html: structure?.title?.value
						}}></h3>
					<div
						className='text mb-n1'
						dangerouslySetInnerHTML={{
							__html: structure?.text?.value
						}}></div>
					{structure?.link?.value && (
						<Link
							target={
								structure?.link?.target ? structure?.link?.target : '_self'
							}
							href={structure?.link?.value}>
							<a
								target={
									structure?.link?.target ? structure?.link?.target : '_self'
								}
								className='n-btn large danger-upgrade full_btn_md'>
								{structure?.link?.title}
							</a>
						</Link>
					)}
				</div>
			</div>
		</section>
	)
}

export default SeasonUpgradeExclusiveBanner
