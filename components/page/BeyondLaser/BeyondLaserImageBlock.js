import React from 'react'

const BeyondLaserImageBlock = ({ data: { structure } }) => {
	return (
		<section>
			<div style={{ backgroundColor: '#111' }}>
				<div
					data-aos='fade'
					data-aos-delay='800'
					data-aos-duration='1500'
					className='beyond_laser_image_block'
					style={{ backgroundImage: `url(${structure?.image?.src})` }}>
					<div
						data-aos='fade'
						data-aos-delay='1500'
						data-aos-duration='1000'
						className='content'
						dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
				</div>
			</div>
		</section>
	)
}

export default BeyondLaserImageBlock
