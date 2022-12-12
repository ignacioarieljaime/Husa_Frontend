import React from 'react'

const BeyondLaserTextBlock = ({ data }) => {
	const { structure } = data

	return (
		<section>
			<div id={data?.name + data?.id} className='beyond_laser_text_block'>
				<div
					className='content'
					data-aos='fade-up'
					data-aos-delay='500'
					data-aos-duration='1000'
					dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
			</div>
		</section>
	)
}

export default BeyondLaserTextBlock
