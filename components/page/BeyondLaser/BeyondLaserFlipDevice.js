import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const BeyondLaserFlipDevice = ({ data: { structure } }) => {
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.text?.value)
	}, [])
	return (
		<div className='beyond_laser_flip_device'>
			<div className='flip_device_container'>
				<Link
					target={structure?.link?.target ? structure?.link?.target : '_self'}
					href={structure?.link?.value ? structure?.link?.value : '/'}>
					<a
						target={structure?.link?.target ? structure?.link?.target : '_self'}
						className='image'>
						<img
							src={structure?.image?.src}
							alt={structure?.image?.alt}
							width='150'
						/>
					</a>
				</Link>
				<div className='title' dangerouslySetInnerHTML={{ __html: text }}></div>
			</div>
		</div>
	)
}

export default BeyondLaserFlipDevice
