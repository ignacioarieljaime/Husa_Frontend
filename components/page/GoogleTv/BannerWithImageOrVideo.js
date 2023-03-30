import React, { useEffect, useState } from 'react'
import CustomImage from 'components/common/CustomImage'
import Link from 'next/link'

const BannerWithImageOrVideo = ({ data }) => {
	const { structure } = data
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.title?.value)
	}, [])
	return (
		<section>
			<div className='banner_image_video'>
				<div className='background'>
					{structure?.video?.value ? (
						<video muted={true} playsInline={true} autoPlay={true} loop={true}>
							<source src={structure?.video?.value} />
						</video>
					) : (
						<CustomImage
							src={structure?.image?.src}
							alt={structure?.image?.alt}
							wrapperHeight='100%'
							wrapperWidth='100%'
							className='image'
						/>
					)}
				</div>
				<div className='content'>
					<div
						className='title'
						dangerouslySetInnerHTML={{ __html: text }}></div>
					{structure?.link?.value && (
						<Link href={structure?.link?.value ? structure?.link?.value : '/'}>
							<a className='n-btn white text-center d-block w-fit mx-auto p-4 link'>
								{structure?.link?.title}
							</a>
						</Link>
					)}
				</div>
			</div>
		</section>
	)
}

export default BannerWithImageOrVideo
