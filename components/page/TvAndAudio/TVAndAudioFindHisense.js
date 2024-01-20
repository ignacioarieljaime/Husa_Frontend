import React from 'react'
import TVAndAudioFindHisenseItem from './TVAndAudioFineHisenseItem'

function TVAndAudioFindHisense({ data }) {
	const { structure } = data
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])

	return (
		<section id={data.name + data.id}>
			<div className='key_feature'>
				<div className={'content'}>
					{structure?.list?.value.map((item, index) => (
						<div
							key={index}
							className={`item ${
								structure?.list?.value.length < 4 ? 'banner' : 'small'
							} hover_active`}
							style={{ width: 100 / structure?.list?.value.length + '%' }}>
							<div className={`image_wrapper `}>
								{item?.image?.src && (
									<img
										src={item?.image?.src}
										alt={item?.image?.alt}
										className='image'
									/>
								)}
							</div>
							<div className={`content`}>
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
								{item?.description?.value && (
									<div
										className='description'
										dangerouslySetInnerHTML={{
											__html: item?.description?.value
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

export default TVAndAudioFindHisense
