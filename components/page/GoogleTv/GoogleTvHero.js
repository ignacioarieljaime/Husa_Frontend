import React, { useEffect, useState } from 'react'

const GoogleTvHero = ({ data: { structure } }) => {
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.title?.value)
	}, [])
	return (
		<section className='google_tv_hero'>
			<div className='custom_container'>
				<div className='title' dangerouslySetInnerHTML={{ __html: text }}></div>
				<div className='image_container'>
					<img src={structure?.image?.src} alt={structure?.image?.alt} />
				</div>
			</div>
		</section>
	)
}

export default GoogleTvHero
