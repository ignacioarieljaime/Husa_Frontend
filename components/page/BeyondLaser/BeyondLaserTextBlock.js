import React from 'react'

const BeyondLaserTextBlock = ({ data: { structure } }) => {
	return (
		<section>
			<div className='beyond_laser_text_block'>
				<div
					className='content'
					dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
			</div>
		</section>
	)
}

export default BeyondLaserTextBlock
