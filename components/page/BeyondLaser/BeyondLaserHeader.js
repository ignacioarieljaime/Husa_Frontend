import Link from 'next/link'
import React from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

const BeyondLaserHeader = ({ data: { structure } }) => {
	return (
		<section>
			<div className='beyond_laser_header'>
				<div className='content'>
					<div className='header_item justify-content-start'>
						<Link
							target={
								structure?.leftImageLink?.target
									? structure?.leftImageLink?.target
									: '_self'
							}
							href={
								structure?.leftImageLink?.value
									? structure?.leftImageLink?.value
									: '/'
							}>
							<a
								target={
									structure?.leftImageLink?.target
										? structure?.leftImageLink?.target
										: '_self'
								}>
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
							<Link
								target={
									structure?.link?.target ? structure?.link?.target : '_self'
								}
								href={structure?.link?.value ? structure?.link?.value : '/'}>
								<a
									target={
										structure?.link?.target ? structure?.link?.target : '_self'
									}
									className='header_link'>
									{structure?.link?.title}
									{structure?.link?.target === '_blank' && (
										<img
											style={{ marginLeft: '10px' }}
											src={OpenPageOnNewTab.src}
										/>
									)}
								</a>
							</Link>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default BeyondLaserHeader
