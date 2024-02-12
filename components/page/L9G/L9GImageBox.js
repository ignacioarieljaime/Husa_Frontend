import CustomImage from 'components/common/CustomImage'
import React, { useEffect, useState } from 'react'

const L9GImageBox = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])
	return (
		<section>
			<div
				id={data?.name + data?.id}
				className='header-secondary2 air_products_image_box'>
				<CustomImage
					src={structure?.image?.src}
					wrapperClass={'position-absolute top-0'}
					wrapperHeight={'100%'}
					wrapperWidth='100%'
					alt={structure?.image?.alt}
				/>
				<div className='content'>
					<div
						className='title'
						dangerouslySetInnerHTML={{
							__html: structure?.title?.value
						}}></div>
					<div
						className='subtitle'
						dangerouslySetInnerHTML={{
							__html: structure?.subtitle?.value
						}}></div>
					<article className='article'>
						<p
							className='paragraph'
							dangerouslySetInnerHTML={{
								__html: structure?.text?.value
							}}></p>
					</article>
				</div>
			</div>
		</section>
	)
}

export default L9GImageBox
