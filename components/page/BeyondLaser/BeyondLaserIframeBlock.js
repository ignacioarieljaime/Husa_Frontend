import React from 'react'

const BeyondLaserIframeBlock = ({ data }) => {
	const { structure } = data
	return (
		<section>
			<div id={data?.name + data?.id} className='beyond_laser_iframe_block'>
				<div
					data-aos='fade'
					data-aos-delay='700'
					data-aos-duration='1000'
					className='title'
					dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></div>
				<div
					className='iframe_container'
					data-aos='fade-up'
					data-aos-delay='200'
					data-aos-duration='1000'>
					<iframe
						src={structure?.iframe?.value}
						frameBorder='0'
						allow='autoplay; encrypted-media'
						allowFullScreen=''></iframe>
				</div>
			</div>
		</section>
	)
}

export default BeyondLaserIframeBlock
