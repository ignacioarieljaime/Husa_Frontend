import Link from 'next/link'
import React, { useState } from 'react'
import DismissIcon from '../../icons/DismissIcon'

function HeaderNotification({ data }) {
	const [notificationDismiss, serNotificationDismiss] = useState(true)

	return (
		<div
			style={{ background: data?.background_color }}
			className={`container-fluid home-top-advertisement ${
				notificationDismiss ? 'd-block' : 'd-none'
			}`}>
			<button onClick={() => serNotificationDismiss(false)}>
				<span className={'me-3 mt-1'}>Dismiss</span>
				<DismissIcon />
			</button>
			<Link
				style={{ color: data?.text_color }}
				href={data?.link ? data?.link : '/'}>
				<a>{data?.text}</a>
			</Link>
		</div>
	)
}

export default HeaderNotification
