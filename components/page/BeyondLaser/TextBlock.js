import React from 'react'

const TextBlock = ({ data: { structure } }) => {
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

export default TextBlock
