import React, { useEffect, useState } from 'react'

const GoogleTvFeaturesIntro = ({ data }) => {
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(data?.structure)
	}, [])
	return (
		<section className='google_tv_feature_blocks'>
			<div className='custom_container' style={{ paddingBottom: '100px' }}>
				<div className={`google-tv-text-box transparent`}>
					<article className='article'>
						<div
							dangerouslySetInnerHTML={{
								__html: content?.text?.value
							}}></div>
					</article>
				</div>
				<div className='image'>
					<img src={content?.image?.src} alt={content?.image?.alt} />
				</div>
			</div>
		</section>
	)
}

export default GoogleTvFeaturesIntro
