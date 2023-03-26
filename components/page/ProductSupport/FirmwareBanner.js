import {
	faCircleExclamation,
	faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomImage from 'components/common/CustomImage'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import FirmwareBannerModelNumberDialog from './FirmwareBannerModelNumberDialog'

const FirmwareBanner = ({ data }) => {
	const [content, setContent] = useState(null)
	const [showModal, setShowModal] = useState(false)
	useEffect(() => {
		setContent(data?.structure)
	}, [])
	return (
		<section>
			<div className='firmware_banner'>
				<div className='background'>
					<CustomImage
						src={content?.image?.src}
						alt={content?.image?.alt}
						wrapperHeight='100%'
						wrapperWidth='100%'
					/>
				</div>
				<div className='content'>
					<h2
						className='title'
						dangerouslySetInnerHTML={{ __html: content?.title?.value }}></h2>
					<div className='search_container'>
						<input type='text' placeholder='start typing your model number' />
						<FontAwesomeIcon
							icon={faMagnifyingGlass}
							size='lg'
							className='text-white'
						/>
					</div>
					<button
						className='n-btn outline-white transparent p-4'
						type='button'
						onClick={() => setShowModal(prevState => !prevState)}>
						<FontAwesomeIcon
							icon={faCircleExclamation}
							size='lg'
							className='me-2'
						/>
						Where do I find my model number?
					</button>
				</div>
			</div>
			{showModal && (
				<FirmwareBannerModelNumberDialog
					text={content?.text?.value}
					onClose={() => setShowModal(false)}
				/>
			)}
		</section>
	)
}

export default FirmwareBanner
