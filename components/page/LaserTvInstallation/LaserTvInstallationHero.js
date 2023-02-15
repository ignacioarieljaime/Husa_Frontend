import React, { useEffect, useState } from 'react'

const LaserTvInstallationHero = ({ data: { structure } }) => {
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.title?.value)
	}, [])
	return (
		<section className='laser_installation_hero'>
			<div className='custom_container'>
				<h2 className='title' dangerouslySetInnerHTML={{ __html: text }}></h2>
				<div className='image_container'>
					<img src={structure?.image?.src} alt={structure?.image?.alt} />
				</div>
			</div>
		</section>
	)
}

export default LaserTvInstallationHero
