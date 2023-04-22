import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CustomImage from './CustomImage'
import { useAspectRatio } from 'hooks/useAspectRatio'

const VideoAndImageBanner = ({ data }) => {
	const { structure } = data
	const [text, setText] = useState(null)
	const aspectRatio = useAspectRatio(structure?.backgroundImage?.src)

	useEffect(() => {
		setText(structure?.subtitle?.value)
	}, [])
	return (
		<section>
			<div className='video_and_image_banner'>
				<div
					className='background'
					style={
						aspectRatio < 1
							? { paddingTop: (aspectRatio * 100).toFixed(2) + '%' }
							: {}
					}>
					<CustomImage
						src={structure?.backgroundImage?.src}
						alt={structure?.backgroundImage?.alt}
						WrapperMaxHeight={'100%'}
						WrapperMaxWidth={'100%'}
						wrapperWidth={'100%'}
						className='image'
					/>
				</div>
				<div className='content'>
					<CustomImage
						src={structure?.image?.src}
						alt={structure?.image?.alt}
						WrapperMaxHeight={'100%'}
						WrapperMaxWidth={'40%'}
						wrapperWidth={'100%'}
						className='second_image'
					/>
					<div className='video_container'>
						<video
							loop={true}
							autoplay={true}
							muted={true}
							src={structure?.video?.value}></video>
						<div dangerouslySetInnerHTML={{ __html: text }}></div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default VideoAndImageBanner
