import CustomImage from 'components/common/CustomImage'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

const GoogleTvBanner = ({ data: { structure } }) => {
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.title?.value)
	}, [])
	return (
		<section>
			<div className='google-tv-banner'>
				<div className='background'>
					<CustomImage
						src={structure?.backgroundImage?.src}
						alt={structure?.backgroundImage?.alt}
						wrapperHeight='100%'
						wrapperWidth='100%'
						className='image'
					/>
				</div>
				<div className='content'>
					<div className='logos'>
						<img src={structure?.image1?.src} alt={structure?.image1?.alt} />
						<img
							src={structure?.image2?.src}
							alt={structure?.image2?.alt}
							style={{ maxWidth: '320px', width: '32%' }}
						/>
					</div>
					<div
						className='title'
						dangerouslySetInnerHTML={{ __html: text }}></div>
					{structure?.link?.value && (
						<Link
							target={
								structure?.link?.target ? structure?.link?.target : '_self'
							}
							href={structure?.link?.value ? structure?.link?.value : '/'}>
							<a
								target={
									structure?.link?.target ? structure?.link?.target : '_self'
								}
								className='n-btn white medium text-center d-block w-fit mx-auto'>
								{structure?.link?.title}
								{structure?.link?.target === '_blank' && (
									<img
										style={{ marginLeft: '10px' }}
										src={OpenPageOnNewTab.src}
									/>
								)}
							</a>
						</Link>
					)}
				</div>
			</div>
		</section>
	)
}

export default GoogleTvBanner
