import { useAspectRatio } from 'hooks/useAspectRatio'
import React from 'react'

const HomeAppliancesBanner = ({ data }) => {
	const aspectRatio = useAspectRatio(
		'https://files.hisense-usa.com/storage/hisense/asset/images/6649b05ee00926.webp'
	)
	return (
		<section>
			<div
				className='ha_banner'
				style={
					aspectRatio < 1
						? { paddingTop: (aspectRatio * 100).toFixed(2) + '%' }
						: {}
				}>
				<img
					src='https://files.hisense-usa.com/storage/hisense/asset/images/6649b05ee00926.webp'
					alt='s'
				/>
				<div className='content'>
					<h4
						className='subtitle'
						dangerouslySetInnerHTML={{
							__html: '<p>HISENSE HOME APPLIANCES</p>'
						}}></h4>
					<h1
						className='title'
						dangerouslySetInnerHTML={{
							__html: '<p>Dreamy appliances for your dream kitchen</p>'
						}}></h1>
				</div>
			</div>
		</section>
	)
}

export default HomeAppliancesBanner
