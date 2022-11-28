import React from 'react'

const ImageBlock = ({ data: { structure } }) => {
	return (
		<section>
			<div
				className='beyond_laser_image_block'
				style={{ backgroundImage: `url(${structure?.image?.src})` }}>
				<div
					className='content'
					dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
			</div>
		</section>
	)
}

export default ImageBlock
