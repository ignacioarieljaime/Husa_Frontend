import React from 'react'

const GoogleTvHero = ({ data: { structure } }) => {
	return (
		<section>
			<div className='google_tv_hero'>
				<div className='custom_container'>
					<div
						className='title'
						dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></div>
					<div>
						<img src={structure?.image?.src} alt={structure?.image?.alt} />
					</div>
				</div>
			</div>
		</section>
	)
}

export default GoogleTvHero
