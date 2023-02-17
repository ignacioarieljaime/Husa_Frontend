import React, { useEffect, useState } from 'react'

const ProductSupportVideoGallery = ({ data }) => {
	const [grid, setGrid] = useState([])
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(data?.structure)
	}, [])

	useEffect(() => {
		const collection = []
		const items = []
		content?.list?.value.forEach((item, index) => {
			items.push(item)
			// console.log(content?.list?.value.length - 1 === index)
			if (index % 3 === 2) {
				collection.push(items)
				items = []
			} else if (
				content?.list?.value.length - 1 === index &&
				items.length < 3
			) {
				items.map(iframe => collection.push(iframe))
			}
		})
		setGrid(collection)
	}, [content])

	return (
		<section id={data?.name + data?.id}>
			<div className='product_support_video_gallery container'>
				<h2
					className='title'
					dangerouslySetInnerHTML={{ __html: content?.title?.value }}></h2>
				<div className='row align-items-stretch videos'>
					{grid.length > 0 &&
						grid?.map((item, index) => {
							if (item.length === 3)
								return (
									<>
										<div key={index} className='col-12 col-md-7 py-3'>
											<div className='video_container h-100'>
												<iframe
													width='100%'
													height='100%'
													src={item[0]?.video?.value}
													title='YouTube video player'
													frameBorder='0'
													allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
													allowFullScreen></iframe>
											</div>
										</div>
										<div className='col-12 col-md-5 py-3'>
											<div className='pb-3'>
												<div className='video_container half mb-0'>
													<iframe
														width='100%'
														height='100%'
														src={item[1]?.video?.value}
														title='YouTube video player'
														frameBorder='0'
														allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
														allowFullScreen></iframe>
												</div>
											</div>
											<div className='pt-3'>
												<div className='video_container half mb-0'>
													<iframe
														width='100%'
														height='100%'
														src={item[2]?.video?.value}
														title='YouTube video player'
														frameBorder='0'
														allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
														allowFullScreen></iframe>
												</div>
											</div>
										</div>
									</>
								)
							else
								return (
									<div key={index} className='col-12 py-3'>
										<div className='video_container full_size mb-0'>
											<iframe
												width='100%'
												height='100%'
												src={item?.video?.value}
												title='YouTube video player'
												frameBorder='0'
												allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
												allowFullScreen></iframe>
										</div>
									</div>
								)
						})}
				</div>
			</div>
		</section>
	)
}

export default ProductSupportVideoGallery
