import React, { useEffect, useState } from 'react'

const FullFeature = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])

	return (
		<section>
			<div className={`full_feature ${structure?.theme?.value}`}>
				<img
					src={structure?.background?.src}
					alt={structure?.background?.alt}
					className='background'
				/>
				<div className='content'>
					<img
						src={structure?.topImage?.src}
						alt={structure?.topImage?.alt}
						className='image'
					/>
					<p className='subtitle'>{structure?.subtitle?.value}</p>
					<h3
						className='title'
						dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></h3>
					<div
						className='text'
						dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
					<div className='images_row'>
						<img
							src={structure?.bottomImage1?.src}
							alt={structure?.bottomImage1?.alt}
							className='image'
						/>
						<img
							src={structure?.bottomImage2?.src}
							alt={structure?.bottomImage2?.alt}
							className='image'
						/>
					</div>
					<p className='note'>{structure?.note?.value}</p>
				</div>
			</div>
		</section>
	)
}

export default FullFeature
