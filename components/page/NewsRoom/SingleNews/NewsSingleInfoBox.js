import DownloadIconV2 from 'components/icons/DownloadIconV2'
import FacebookIcon from 'components/icons/FacebookIcon'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import NewsSingleInfoLittleBox from './NewsSingleInfoLittleBox'

const NewsSingleInfoBox = ({ data }) => {
	const [aboutUs, setAboutUs] = useState()
	const [mediaContent, setMediaContent] = useState()

	let { structure } = data

	useEffect(() => {
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
							<Link href={'/'}>
								<a>
									<FacebookIcon />
								</a>
							</Link>
						</li>
					</ul>
				</div>
				{structure?.downloads?.value?.length !== 0 && (
					<ul className='download_box'>
						{structure?.downloads?.value?.map(item => (
							<li>
								<a download={true} href={item?.file?.src}>
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
