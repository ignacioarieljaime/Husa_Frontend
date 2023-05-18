import FacebookIcon from 'components/icons/FacebookIcon'
import FacebookNewsRoomIcon from 'components/icons/FacebookNewsRoomIcon'
import MailNewsIcon from 'components/icons/MailNewsIcon'
import TwitterNewsRoomIcon from 'components/icons/TwitterNewsRoomIcon'
import Link from 'next/link'
import React from 'react'

const NewsIntro = ({ data }) => {
	let { structure } = data
	return (
		<div className=' container news_intro_box'>
			<div>
				<h6>{structure?.subject?.value}</h6>
				<h3>{structure?.title?.value}</h3>
				<span>{structure?.title?.value}</span>
				<div>
					<span>Share Article</span>
					<ul>
						<li>
							<a>
								<FacebookNewsRoomIcon />
							</a>
						</li>
						<li>
							<a>
								<TwitterNewsRoomIcon />
							</a>
						</li>{' '}
						<li>
							<a>
								<MailNewsIcon />
							</a>
						</li>
						<li>
							<a>
								<MailNewsIcon />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default NewsIntro
