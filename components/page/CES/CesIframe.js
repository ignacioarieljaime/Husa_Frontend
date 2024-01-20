import React, { useEffect, useState } from 'react'

const CesIframe = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState()
	// useEffect(() => {
	// 	setContent(data?.structure)
	// }, [])

	return (
		<section>
			<div className='ces_iframe'>
				<div className='iframe_container'>
					<iframe
						width='100%'
						height='400px'
						src={structure?.iframeLink?.value}
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowFullScreen=''></iframe>
				</div>
				<article className='article'>
					<div
						className='text-white pt-7'
						dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
				</article>
			</div>
		</section>
	)
}

export default CesIframe
