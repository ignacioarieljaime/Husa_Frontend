import { useAspectRatio } from 'hooks/useAspectRatio'
import React, { useEffect, useState } from 'react'

const HomeAppliancesBanner = ({ data }) => {
	const { structure } = data
	const [content, setContent] = useState(null)
	const aspectRatio = useAspectRatio(structure?.image?.src)

	useEffect(() => {
		setContent(structure)
	}, [])

	return (
		<section>
			<div
				className='ha_banner'
				style={
					aspectRatio < 1
						? {
								paddingTop:
									aspectRatio * 100 > 52
										? '52%'
										: (aspectRatio * 100).toFixed(2) + '%'
						  }
						: {}
				}>
				<img src={content?.image?.src} alt={content?.image?.alt} />
				<div className='content'>
					<h4 className='subtitle'>{content?.subtitle?.value}</h4>
					<h1
						className='title'
						dangerouslySetInnerHTML={{
							__html: content?.title?.value
						}}></h1>
				</div>
			</div>
		</section>
	)
}

export default HomeAppliancesBanner
