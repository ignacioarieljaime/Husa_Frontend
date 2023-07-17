import { useAspectRatio } from 'hooks/useAspectRatio'
import React from 'react'

const HomeAppliancesBanner = ({ data }) => {
	const { structure } = data
	const aspectRatio = useAspectRatio(structure?.image?.src)
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
				<img src={structure?.image?.src} alt={structure?.image?.alt} />
				<div className='content'>
					<h4 className='subtitle'>{structure?.subtitle?.value}</h4>
					<h1
						className='title'
						dangerouslySetInnerHTML={{
							__html: structure?.title?.value
						}}></h1>
				</div>
			</div>
		</section>
	)
}

export default HomeAppliancesBanner
