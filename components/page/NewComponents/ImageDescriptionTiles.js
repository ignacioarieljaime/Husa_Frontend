import { useWindowSize } from 'hooks/useWindowSize'
import React, { useEffect, useState } from 'react'

const ImageDescriptionTiles = ({ data }) => {
	const { structure } = data
	const [width] = useWindowSize()
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])

	return (
		<section id={data.name + data.id}>
			<div className='key_feature'>
				<div
					className={'content'}
					style={{
						gridTemplateColumns: `repeat(${structure?.list?.value.length}, 1fr)`
					}}>
					{structure?.list?.value.map((item, index) => (
						<div
							key={index}
							className={`item ${
								structure?.list?.value.length < 4 ? 'banner' : 'small'
							} ${structure?.shadow?.value ? 'hover_active' : ''}`}
							style={{
								gridColumn:
									width > 991
										? `${index + 1}/${index + 2}`
										: width > 575
										? index % 2 === 0
											? '1/2'
											: '2/3'
										: '1/2'
							}}>
							<div className={`image_wrapper `}>
								{item?.image?.src && (
									<img
										src={item?.image?.src}
										alt={item?.image?.alt}
										className='image'
									/>
								)}
							</div>
							<div
								className={`content ${
									structure?.divider?.value ? 'divider' : ''
								}`}>
								{item?.smallImage?.value?.image?.src &&
									item?.smallImage?.value?.text?.value && (
										<div className='small_image'>
											{item?.smallImage?.value?.image?.src && (
												<img
													src={item?.smallImage?.value?.image?.src}
													alt={item?.smallImage?.value?.image?.alt}
													width='48'
												/>
											)}
											{item?.smallImage?.value?.text?.value && (
												<p>{item?.smallImage?.value?.text?.value}</p>
											)}
										</div>
									)}
								<div className='titles_box'>
									{item?.title?.value ? (
										structure?.list?.value.length > 2 ? (
											<h5
												className='title small'
												dangerouslySetInnerHTML={{
													__html: item?.title?.value
												}}></h5>
										) : (
											<h4
												className='title large'
												dangerouslySetInnerHTML={{
													__html: item?.title?.value
												}}></h4>
										)
									) : null}
									{item?.subtitle?.value && (
										<div
											className='subtitle'
											dangerouslySetInnerHTML={{
												__html: item?.subtitle?.value
											}}></div>
									)}
								</div>
								{item?.text?.value && (
									<div
										className='description'
										dangerouslySetInnerHTML={{
											__html: item?.text?.value
										}}></div>
								)}
								{item?.note?.value && (
									<div
										className='disclaimer'
										dangerouslySetInnerHTML={{
											__html: item?.note?.value
										}}></div>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default ImageDescriptionTiles
