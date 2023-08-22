import React, { useEffect, useState } from 'react'
import LandingVideoPlayer from '../Landing/LandingVideoPlayer'
const ProductSupportVideoGallery = ({ data }) => {
	const { structure } = data
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(structure)
	}, [])

	return (
		<section id={data?.name + data?.id}>
			<div className='product_support_video_gallery'>
				<h4
					className='title'
					dangerouslySetInnerHTML={{ __html: content?.title?.value }}></h4>

				<div className='videos'>
					{content?.list?.value.map((item, index) => (
						<div className='video_wrapper'>
							<LandingVideoPlayer
								data={{
									name: 'LandingVideoPlayer',
									id: 0,
									structure: { ...item, videoType: { value: 'link' } }
								}}
							/>
							<div className='info'>
								<p className='title'>video title</p>
								<p className='caption'>Video description lorem ipsum.</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
export default ProductSupportVideoGallery
