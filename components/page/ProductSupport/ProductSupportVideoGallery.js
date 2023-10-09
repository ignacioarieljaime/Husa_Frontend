import React, { useEffect, useState } from 'react'
import LandingVideoPlayer from '../Landing/LandingVideoPlayer'
const ProductSupportVideoGallery = ({ data, pim }) => {
	const { structure } = data
	const [content, setContent] = useState(null)
	const [videos, setVideos] = useState(null)
	const [newsItemOrder, setNewsItemOrder] = useState([1, 2, 2, 3, 3, 3])

	useEffect(() => {
		setContent(structure)

		let newOrder = []
		for (let i = 1; i < 4; i++)
			newOrder = [
				...newOrder,
				...new Array(structure['row-' + i]?.value).fill(
					structure['row-' + i]?.value
				)
			]
		setNewsItemOrder(newOrder)
	}, [])

	useEffect(() => {
		setVideos(
			pim?.assets
				.filter(video => video.type_id === 5)
				.map((video, index) => ({
					...video,
					col: newsItemOrder.length > index ? newsItemOrder[index] : 3
				}))
		)
	}, [newsItemOrder])

	return (
		<section id={data?.name + data?.id}>
			<div className='product_support_video_gallery'>
				<h4 className='title'>{pim?.name} Video</h4>

				<div className='videos'>
					{videos &&
						videos.length &&
						videos.map((item, index) => (
							<div key={index} className={`video_wrapper hold_${item?.col}`}>
								<LandingVideoPlayer
									data={{
										name: 'LandingVideoPlayer',
										id: 0,
										structure: {
											video: { value: item?.title },
											videoType: { value: 'iframe' }
										}
									}}
								/>
								<div className='info'>
									<p className='title'>{item?.title}</p>
									<p className='caption'>{item?.caption}</p>
								</div>
							</div>
						))}
				</div>
			</div>
		</section>
	)
}
export default ProductSupportVideoGallery
