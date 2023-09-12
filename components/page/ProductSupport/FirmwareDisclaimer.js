import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const FirmwareDisclaimer = ({ data }) => {
	const [content, setContent] = useState(null)
	const [showModal, setShowModal] = useState(true)

	useEffect(() => {
		setContent(data?.structure)
	}, [])

	return (
		showModal && (
			<div className='firmware_disclaimer'>
				<div className='box'>
					<h4
						className='title'
						dangerouslySetInnerHTML={{ __html: content?.title?.value }}></h4>
					<div
						className='text'
						dangerouslySetInnerHTML={{ __html: content?.text?.value }}></div>
					<button
						onClick={() => setShowModal(false)}
						className='n-btn outline-black'>
						{content?.button?.value}
					</button>
				</div>
			</div>
		)
	)
}

export default FirmwareDisclaimer
