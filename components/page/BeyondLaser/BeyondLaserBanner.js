import React from 'react'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

const BeyondLaserBanner = ({ data: { structure } }) => {
	return (
		<section>
			<div className='beyond_laser_banner'>
				<div className='video_container'>
					<video autoPlay={true} muted={true} loop={true} playsinline={true}>
						<source src={structure?.video?.value} data-wf-ignore='true' />
					</video>
				</div>
				<div className='content'>
					<div className='text'>
						<h1 data-aos='fade' data-aos-delay='1300' data-aos-duration='1000'>
							{structure?.tinyTitle?.value}
						</h1>
						<h2
							data-aos='fade-up'
							data-aos-delay='200'
							data-aos-duration='1000'>
							{structure?.title?.value}
						</h2>
					</div>
				</div>
				{structure?.link?.value && (
					<Link
						target={
							structure?.link?.target ? structure?.link?.target : '_blank'
						}
						href={structure?.link?.value ? structure?.link?.value : '/'}>
						<a
							className='chevron_link'
							data-aos='fade-down'
							data-aos-delay='1800'
							data-aos-duration='1000'>
							<FontAwesomeIcon icon={faChevronDown} size='2xl' />
						</a>
					</Link>
				)}
			</div>
		</section>
	)
}

export default BeyondLaserBanner
