import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const GoogleTvBanner = ({ data: { structure } }) => {
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.title?.value)
	}, [])
	return (
		<section>
			<div className='google-tv-banner'>
				<div className='background'>
					<img
						src={structure?.backgroundImage?.src}
						alt={structure?.backgroundImage?.alt}
						className='image'
					/>
				</div>
				<div className='content'>
					<div className='logos'>
						<img src={structure?.image1?.src} alt={structure?.image1?.alt} />
						<img src={structure?.image2?.src} alt={structure?.image2?.alt} />
					</div>
					<div
						className='title'
						dangerouslySetInnerHTML={{ __html: text }}></div>
					{structure?.link?.value && (
						<Link href={structure?.link?.value ? structure?.link?.value : '/'}>
							<a className='n-btn white text-center d-block w-fit mx-auto'>
								{structure?.link?.title}
							</a>
						</Link>
					)}
				</div>
			</div>
		</section>
	)
}

export default GoogleTvBanner
