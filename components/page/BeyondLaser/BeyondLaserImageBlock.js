import React from 'react'

const BeyondLaserImageBlock = ({ data }) => {
	const { structure } = data
	return (
		<section>
			<div id={data?.name + data?.id} style={{ backgroundColor: '#111' }}>
				<div
					data-aos='fade'
					data-aos-delay='800'
					data-aos-duration='1500'
					className='beyond_laser_image_block'
					style={{ backgroundImage: `url(${structure?.image?.src})` }}>
					<div className='content'>
						<div
							className='text'
							dangerouslySetInnerHTML={{
								__html: structure?.text?.value
							}}></div>
						<div
							className='primary'
							data-aos='fade-up'
							data-aos-delay='1800'
							data-aos-duration='1000'>
							{structure?.coloredTitle.value}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BeyondLaserImageBlock
