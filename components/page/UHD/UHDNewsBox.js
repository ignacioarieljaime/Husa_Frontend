import React, { useEffect, useState } from 'react'
import UHDNewsItem from './UHDNewsItem'

function UHDNewsBox({ data }) {
	const { structure } = data
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(structure)
	}, [])

	return (
		<section id={data.name + data.id}>
			<div className='key_feature'>
				<div className={'content'}>
					{content?.list?.value.map((item, index) => (
						<div
							key={index}
							className={`item ${
								content?.list?.value.length < 4 ? 'banner' : 'small'
							} hover_active`}
							style={{ width: 100 / content?.list?.value.length + '%' }}>
							<div className={`image_wrapper `}>
								{item?.image?.src && (
									<img
										src={item?.image?.src}
										alt={item?.image?.alt}
										className='image'
									/>
								)}
							</div>
							<div className={`content divider`}>
								{(item?.smallImage?.value?.image?.src ||
									item?.smallImage?.value?.text?.value) && (
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
									content?.list?.value.length > 2 ? (
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
								{item?.description?.value && (
									<div
										className='description'
										dangerouslySetInnerHTML={{
											__html: item?.description?.value
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

export default UHDNewsBox
