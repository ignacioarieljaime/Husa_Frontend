import React from 'react'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

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
						<h1 data-aos='fade' data-aos-delay='2000' data-aos-duration='1000'>
							{structure?.tinyTitle?.value}
						</h1>
						<h2
							data-aos='fade-up'
							data-aos-delay='500'
							data-aos-duration='1000'>
							{structure?.title?.value}
						</h2>
					</div>
				</div>
				{structure?.link?.value && (
					<Link href={structure?.link?.value ? structure?.link?.value : '/'}>
						<a
							className='chevron_link'
							data-aos='fade-down'
							data-aos-delay='600'
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
