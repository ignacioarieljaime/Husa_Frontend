import Link from 'next/link'
import React from 'react'

const Header = ({ data: { structure } }) => {
	structure = {
		leftLogo: {
			src: 'https://www.hisense-usa.com/beyondlaser/images/Hisense_White.svg',
			alt: ''
		},
		middleLogo: {
			src: '	https://www.hisense-usa.com/beyondlaser/images/LaserTV_White.svg',
			alt: ''
		},
		leftLogoLink: {
			value: '/',
			title: ''
		},
		link: {
			value: '/',
			title: 'learn more'
		}
	}

	return (
		<section>
			<div className='beyond_laser_header'>
				<div className='content'>
					<div className='header_item justify-content-start'>
						<Link href={structure?.leftLogoLink?.value}>
							<a>
								<img
									className='left_logo'
									src={structure?.leftLogo?.src}
									alt={structure?.leftLogo?.alt}
									style={{ maxWidth: '150px' }}
								/>
							</a>
						</Link>
					</div>
					<div className='header_item'>
						<img
							className='middle_logo'
							src={structure?.middleLogo?.src}
							alt={structure?.middleLogo?.alt}
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

export default Header
