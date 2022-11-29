import React from 'react'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const Banner = ({ data: { structure } }) => {
	return (
		<section>
			<div className='beyond_laser_banner'>
				<div className='video_container'>
					<video autoPlay={true} muted={true} loop={true} playsinline={true}>
						<source src={structure?.video?.value} data-wf-ignore='true' />
						<source
							src='videos/laserbgv-transcode.webm'
							data-wf-ignore='true'
						/>
					</video>
				</div>
				<div className='content'>
					<div className='text'>
						<h1>{structure?.tinyTitle?.value}</h1>
						<h2>{structure?.title?.value}</h2>
					</div>
				</div>
				{structure?.link?.value && (
					<Link href={structure?.link?.value}>
						<a className='chevron_link'>
							<FontAwesomeIcon icon={faChevronDown} size='2xl' />
						</a>
					</Link>
				)}
			</div>
		</section>
	)
}

export default Banner
