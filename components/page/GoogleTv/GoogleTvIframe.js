import React from 'react'

function GoogleTvIframe({ data }) {
	let { structure } = data
	return (
		<div id={data?.name + data?.id} className='google_tv_iframe'>
			<iframe
				src={structure?.iframe?.value}
				width='100%'
				height='100%'
				allow='autoplay; fullscreen'
				allowFullScreen=''
				dataready={true}></iframe>
		</div>
	)
}

export default GoogleTvIframe
