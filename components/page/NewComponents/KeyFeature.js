import React, { useEffect, useState } from 'react'

const KeyFeature = ({ data }) => {
	const { structure } = data
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(structure)
	}, [])

	return (
		<section id={data.name + data.id}>
			<div className='key_feature'>
				<div className={'content'}>
					{structure?.list?.value.map((item, index) => (
						<div
							key={index}
							className={`item ${
								structure?.list?.value.length < 4 ? 'banner' : ''
							} ${item?.hover?.value ? 'hover_active' : 'hover_active'}`}
							style={{ width: 100 / structure?.list?.value.length + '%' }}>
							<div className={`image_wrapper `}>
								<img
									src={item?.image?.src}
									alt={item?.image?.alt}
									className='image'
								/>
							</div>
							<div
								className={`content ${
									item?.dvider?.value ? 'divider' : 'divider'
								}`}>
								{structure?.list?.value.length > 2 ? (
									<h5 className='title small'>{item?.title?.value}</h5>
								) : (
									<h4 className='title large'>{item?.title?.value}</h4>
								)}
								<p className='subtitle'>{item?.subtitle?.value}dasdarwef</p>
								<div
									className='description'
									dangerouslySetInnerHTML={{
										__html: item?.description?.value
									}}></div>
								<p className='disclaimer'>{item?.subtitle?.value}asdas</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default KeyFeature
