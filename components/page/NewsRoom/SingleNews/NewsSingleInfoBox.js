import DownloadIconV2 from 'components/icons/DownloadIconV2'
import FacebookIcon from 'components/icons/FacebookIcon'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import NewsSingleInfoLittleBox from './NewsSingleInfoLittleBox'
import FacebookNewsRoomIcon from 'components/icons/FacebookNewsRoomIcon'
import TwitterNewsRoomIcon from 'components/icons/TwitterNewsRoomIcon'
import CopyNewsIcon from 'components/icons/CopyNewsIcon'
import MailNewsIcon from 'components/icons/MailNewsIcon'
import { toast } from 'react-toastify'

const NewsSingleInfoBox = ({ data }) => {
	const [aboutUs, setAboutUs] = useState()
	const [mediaContent, setMediaContent] = useState()
	const [pageUrl, setPageUrl] = useState()
	let { structure } = data

	useEffect(() => {
		setPageUrl(window.location.href)
		setAboutUs(structure?.about?.value?.text?.value)
		setMediaContent(structure?.about?.value?.text?.value)
	}, [])

	return (
		<div className='container news_single_info_box'>
			<div className='content'>
				<div className='media'>
					<span>Share Article</span>
					<ul>
						<li>
							<a
								href={`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`}
								target='_blank'>
								<FacebookNewsRoomIcon />
							</a>
						</li>
						<li>
							<a
								target='_blank'
								href={`https://twitter.com/intent/tweet?url=<?=urlencode(${pageUrl})?>`}>
								<TwitterNewsRoomIcon />
							</a>
						</li>{' '}
						<li>
							<a
								target='_blank'
								href={`mailto:user@example.com?subject=Subject&body=${pageUrl}`}>
								<MailNewsIcon />
							</a>
						</li>
						<li>
							<button
								onClick={() => {
									navigator.clipboard.writeText(pageUrl)
									toast.success('URL copy to clipboard successfully')
								}}>
								<CopyNewsIcon />
							</button>
						</li>
					</ul>
				</div>
				{structure?.downloads?.value?.length !== 0 && (
					<ul className='download_box'>
						{structure?.downloads?.value?.map(item => (
							<li>
								<a download href={item?.file?.src}>
									{item?.file?.title} <DownloadIconV2 />
								</a>
							</li>
						))}
					</ul>
				)}

				<div className='info'>
					<div>
						<h5>{structure?.contact?.value?.title?.value}</h5>
						<div>
							{structure?.contact?.value?.list?.value.map(item => (
								<NewsSingleInfoLittleBox data={item} />
							))}
						</div>
					</div>
					<div>
						<h5> {structure?.about?.value?.title?.value}</h5>
						<div dangerouslySetInnerHTML={{ __html: aboutUs }}></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewsSingleInfoBox
