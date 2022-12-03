import Link from 'next/link'
import React from 'react'

const BeyondLaserHeader = ({ data: { structure } }) => {
	return (
		<section>
			<div className='beyond_laser_header'>
				<div className='content'>
					<div className='header_item justify-content-start'>
						<Link href={structure?.leftImageLink?.value}>
							<a>
								<img
									className='left_logo'
									src={structure?.leftImage?.src}
									alt={structure?.leftImage?.alt}
									style={{ maxWidth: '150px' }}
								/>
							</a>
						</Link>
					</div>
					<div className='header_item'>
						<img
							className='middle_logo'
							src={structure?.middleImage?.src}
							alt={structure?.middleImage?.alt}
							style={{ maxWidth: '175px' }}
						/>
					</div>
					<div className='header_item justify-content-end'>
						{structure?.link?.value && (
							<Link href={structure?.link?.value}>
								<a className='header_link'>{structure?.link?.title}</a>
							</Link>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default BeyondLaserHeader
