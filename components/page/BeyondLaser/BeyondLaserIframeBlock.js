import React from 'react'

const BeyondLaserIframeBlock = ({ data: { structure } }) => {
	return (
		<section>
			<div className='beyond_laser_iframe_block'>
				<div className='title'>{structure?.title?.value}</div>
				<div className='iframe_container'>
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
