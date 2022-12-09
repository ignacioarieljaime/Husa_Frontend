import Link from 'next/link'
import React, { useState } from 'react'
import DismissIcon from '../../icons/DismissIcon'

function HeaderNotification({ data }) {
	const [notificationDismiss, serNotificationDismiss] = useState(true)
	console.log(data)
	return (
		<div
			style={{ background: data?.background_color}}
			className={`container-fluid home-top-advertisement ${
				notificationDismiss ? 'd-block' : 'd-none'
			}`}>
			<button onClick={() => serNotificationDismiss(false)}>
				<span style={{ color: data?.text_color }} className={'me-3 mt-1'}>
					Dismiss
				</span>
				<DismissIcon
					color={data?.text_color}
					background={data?.background_color}
				/>
			</button>
			<Link href={data?.link ? data?.link : '/'}>
				<a style={{ color: data?.text_color }}>{data?.text}</a>
			</Link>
		</div>
	)
}

export default HeaderNotification
