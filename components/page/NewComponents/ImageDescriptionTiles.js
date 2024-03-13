import React, { useRef } from 'react'

const ImageDescriptionTiles = ({ data }) => {
	const { structure } = data

	const containerRef = useRef()
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])
	const dividerSizeHandler = (boolean) => {
		const isForHeight = boolean
		if (containerRef && containerRef?.current?.clientHeight && containerRef?.current?.childNodes[0]?.childNodes[0]?.clientHeight) {

			// subtracting height of image container from the container element height
			// 128px to subtract bottom + top padding of 64px
			// 16px for inner content padding
			if (isForHeight) return containerRef.current.clientHeight - containerRef.current.childNodes[0].childNodes[0].clientHeight - 128 - 16
			return containerRef.current.childNodes[0].childNodes[0].clientHeight + 16
		}
	}
	const dividerHeight = dividerSizeHandler(true)
	const dividerPosition = dividerSizeHandler(false)

	return (
		<section id={data.name + data.id}>
			<div className='key_feature'>
				<div ref={containerRef} className={'content'}>
					{structure?.list?.value.map((item, index) => (
						<div
							key={index}
							className={`centered-item item ${
								structure?.list?.value.length < 4 ? 'banner' : 'small'
							} ${structure?.shadow?.value ? 'hover_active' : ''}`}
							style={{ width: 100 / structure?.list?.value.length + '%' }}>
							<div className={`image_wrapper rounded-image`}>
								{item?.image?.src && (
									<img
										src={item?.image?.src}
										alt={item?.image?.alt}
										className='image rounded-image'
									/>
								)}
							</div>
							<div
								className={`centered-content content ${
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
								{item?.title?.value ? (
									structure?.list?.value.length > 2 ? (
										<h5
											className='description-tile-title'
											dangerouslySetInnerHTML={{
												__html: item?.title?.value
											}}></h5>
									) : (
										<h4
											className='description-tile-title'
											dangerouslySetInnerHTML={{
												__html: item?.title?.value
											}}></h4>
									)
								) : null}
								{item?.subtitle?.value && (
									<div
										className='description-tile-subtitle'
										dangerouslySetInnerHTML={{
											__html: item?.subtitle?.value
										}}></div>
								)}
								{item?.text?.value && (
									<div
										className='description-tile-description'
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

							{index < (structure?.list?.value?.length - 1) &&
							<div className='description-tile-divider'
							style={{height: dividerHeight, top: dividerPosition}}
							/>
						}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default ImageDescriptionTiles
