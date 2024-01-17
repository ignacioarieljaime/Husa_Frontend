import React, { useEffect, useState } from 'react'

const GoogleTvFeaturesIntro = ({ data }) => {
	let { structure } = data
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])
	return (
		<section className='google_tv_feature_blocks'>
			<div className='custom_container' style={{ paddingBottom: '100px' }}>
				<div className={`google-tv-text-box transparent`}>
					<article className='article'>
						<div
							dangerouslySetInnerHTML={{
								__html: structure?.text?.value
							}}></div>
					</article>
				</div>
				<div className='image'>
					<img src={structure?.image?.src} alt={structure?.image?.alt} />
				</div>
			</div>
		</section>
	)
}

export default GoogleTvFeaturesIntro
