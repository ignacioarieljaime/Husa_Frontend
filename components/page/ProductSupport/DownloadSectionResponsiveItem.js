import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AdobeAcrobat from 'components/icons/AdobeAcrobat'
import DownloadIconV2 from 'components/icons/DownloadIconV2'
import Link from 'next/link'
import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const DownloadSectionResponsiveItem = ({ data, windowSize, openStatus }) => {
	const [open, setOpen] = useState(false)
	const accordionItem = useRef()
	const accordionItemHeight = useRef()
	const accordionButtonHeight = useRef()

	useEffect(() => {
		setOpen(openStatus)
	}, [])

	useEffect(() => {
		if (open) {
			accordionItem.current.style.maxHeight =
				accordionItemHeight.current.offsetHeight +
				accordionButtonHeight.current.offsetHeight +
				85 +
				'px'
		} else {
			accordionItem.current.style.maxHeight =
				accordionButtonHeight.current.offsetHeight + 30 + 'px'
		}
	}, [open, windowSize])
	return (
		<div className={`table_row ${open ? 'open' : ''}`} ref={accordionItem}>
			<div
				className='file_title'
				onClick={() => setOpen(prev => !prev)}
				ref={accordionButtonHeight}>
				{data.caption ? data.caption : data.title}
				<FontAwesomeIcon
					className='icon'
					icon={faChevronCircleRight}
					size='lg'
					color={'#000'}
				/>
			</div>
			<div ref={accordionItemHeight}>
				<div className='info'>
					<div>
						<div className='size_title'>Size</div>
						<div className='size'>22 KB</div>
					</div>
					<div className='file_type'>
						{data.type_id === 3 ? (
							<>
								<span>PDF</span>
								<AdobeAcrobat color='#fff' />
							</>
						) : (
							'-'
						)}
					</div>
				</div>
				<div>
					{data.url ? (
						data.caption === 'Installation Request' ? (
							<Link
								target='_self'
								href={'/televisions/laser-tv/installation-request'}>
								<a className='download_item'>
									<span>Download Update</span>
									<DownloadIconV2 color='#00AAA6' />
								</a>
							</Link>
						) : (
							<a href={data.url} download={true} className='download_item'>
								<span>Download Update</span>
								<DownloadIconV2 color='#00AAA6' />
							</a>
						)
					) : null}
				</div>
			</div>
		</div>
	)
}

export default DownloadSectionResponsiveItem
