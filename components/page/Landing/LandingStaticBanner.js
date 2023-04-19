import React from 'react'
import CustomImage from 'components/common/CustomImage'
import Link from 'next/link'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
const LandingStaticBanner = ({ data }) => {
	const { structure } = data
	return (
		<section>
			<div className='landing_new_banner'>
				<div className='background'>
					{structure?.image?.src ? (
						<CustomImage
							src={structure?.image?.src}
							alt={structure?.image?.alt}
							wrapperHeight='100%'
							wrapperWidth='100%'
							wrapperClass='insider'
						/>
					) : structure?.video?.value ? (
						<video
							autoPlay={true}
							muted={true}
							loop={true}
							playsinline={true}
							width='100%'
							height='100%'>
							<source src={structure?.video?.value} data-wf-ignore='true' />
						</video>
					) : null}
				</div>
				<div className='content'>
					{structure?.link?.value ? (
						<Link
							target={
								structure?.link?.target ? structure?.link?.target : '_self'
							}
							href={structure?.link?.value}>
							<a
								className={`n-btn py-3 px-6 transparent ${
									structure?.theme?.value === 'dark'
										? 'outline-black'
										: 'outline-white'
								}`}>
								{structure?.link?.title}

								{structure?.link?.target === '_blank' && (
									<img
										style={{ marginLeft: '10px' }}
										src={OpenPageOnNewTab.src}
									/>
								)}
							</a>
						</Link>
					) : null}
				</div>
			</div>
		</section>
	)
}

export default LandingStaticBanner
