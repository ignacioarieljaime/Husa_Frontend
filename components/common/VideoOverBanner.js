import React from 'react'
import CustomImage from './CustomImage'
import { useAspectRatio } from 'hooks/useAspectRatio'

const VideoOverBanner = ({ data }) => {
	const { structure } = data

	return (
		<section>
			<div className='video_over_banner'>
				<div className='video_container'>
					<video
						loop={true}
						autoplay={true}
						muted={true}
						src={structure?.video?.value}></video>
					<div className='image_container'>
						<CustomImage
							src={structure?.image?.src}
							alt={structure?.image?.alt}
							WrapperMaxWidth={'100%'}
							WrapperMaxHeight={'100%'}
							wrapperHeight={'100%'}
							className='image'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default VideoOverBanner
