import Link from 'next/link'
import React from 'react'

const FlipDevice = ({ data: { structure } }) => {
	return (
		<div className='beyond_laser_flip_device'>
			<div className='flip_device_container'>
				<Link href={structure?.link?.value}>
					<a className='image'>
						<img
							src={structure?.image?.src}
							alt={structure?.image?.alt}
							width='150'
						/>
					</a>
				</Link>
				<div
					className='title'
					dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
			</div>
		</div>
	)
}

export default FlipDevice
