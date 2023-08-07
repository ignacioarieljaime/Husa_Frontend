import React, { useEffect, useState } from 'react'

const FullFeature = ({ data }) => {
	const { structure } = data
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(structure)
	}, [])

	return (
		<section>
			<div className={`full_feature ${content?.theme?.value}`}>
				<img
					src={content?.background?.src}
					alt={content?.background?.alt}
					className='background'
				/>
				<div className='content'>
					<img
						src={content?.topImage?.src}
						alt={content?.topImage?.alt}
						className='image'
					/>
					<p className='subtitle'>{content?.subtitle?.value}</p>
					<h3
						className='title'
						dangerouslySetInnerHTML={{ __html: content?.title?.value }}></h3>
					<div
						className='text'
						dangerouslySetInnerHTML={{ __html: content?.text?.value }}></div>
					<div className='images_row'>
						<img
							src={content?.bottomImage1?.src}
							alt={content?.bottomImage1?.alt}
							className='image'
						/>
						<img
							src={content?.bottomImage2?.src}
							alt={content?.bottomImage2?.alt}
							className='image'
						/>
					</div>
					<p className='note'>{content?.note?.value}</p>
				</div>
			</div>
		</section>
	)
}

export default FullFeature
