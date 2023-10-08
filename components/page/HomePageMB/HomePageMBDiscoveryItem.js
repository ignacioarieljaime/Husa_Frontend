import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const HomePageMBDiscoveryItem = ({ image, title, paragraph, link, width }) => {
	return (
		<div
			className={'home-page-mb-discovery-item py-10 px-6 px-md-13 py-md-15'}
			style={{ width: width + '%' }}>
			<img height={'100px'} src={image.src} alt={image.alt} className='mb-7' />
			<h3 className='fs-base mb-7'>{title}</h3>
			<p className='fs-base mb-9'>{paragraph}</p>
			<a href={link.value} className='n-btn primary-text medium'>
				{link.title}
				{link.value && (
					<span>
						<FontAwesomeIcon
							icon={faChevronRight}
							size={'sm'}
							className='ms-2'
						/>
					</span>
				)}
			</a>
		</div>
	)
}

export default HomePageMBDiscoveryItem
