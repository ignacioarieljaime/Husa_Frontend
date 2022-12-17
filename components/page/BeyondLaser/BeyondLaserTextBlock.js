import React, { useEffect, useState } from 'react'

const BeyondLaserTextBlock = ({ data }) => {
	const { structure } = data
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.text?.value)
	}, [])
	return (
		<section>
			<div id={data?.name + data?.id} className='beyond_laser_text_block'>
				<div
					className='content'
					data-aos='fade-up'
					data-aos-delay='500'
					data-aos-duration='1000'
					dangerouslySetInnerHTML={{ __html: text }}></div>
			</div>
		</section>
	)
}

export default BeyondLaserTextBlock
