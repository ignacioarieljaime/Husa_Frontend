import CopyNewsIcon from 'components/icons/CopyNewsIcon'
import FacebookIcon from 'components/icons/FacebookIcon'
import FacebookNewsRoomIcon from 'components/icons/FacebookNewsRoomIcon'
import MailNewsIcon from 'components/icons/MailNewsIcon'
import TwitterNewsRoomIcon from 'components/icons/TwitterNewsRoomIcon'
import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'

const NewsIntro = ({ data }) => {
	let { structure } = data
	const [pageUrl, setPageUrl] = useState()

	useEffect(() => {
		setPageUrl(window.location.href)
	}, [])

	return (
		<div className=' container news_intro_box'>
			<div>
				<h6>{structure?.subject?.value}</h6>
				<h3>{structure?.title?.value}</h3>
				<span>{structure?.date?.value}</span>
				<div>
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
			</div>
		</div>
	)
}

export default NewsIntro
