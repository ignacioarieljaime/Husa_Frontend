import Link from 'next/link'
import React, { useState } from 'react'
import DismissIcon from '../../icons/DismissIcon'

function HeaderNotification({ data }) {
	const [notificationDismiss, serNotificationDismiss] = useState(true)
	return (
		<div
			style={{ background: data?.background_color }}
			className={`container-fluid home-top-advertisement justify-content-start justify-content-sm-center ${
				notificationDismiss ? 'd-flex' : 'd-none'
			}`}>
			<Link href={data?.link ? data?.link : '/'}>
				<a style={{ color: data?.text_color }}>{data?.text}</a>
			</Link>
			<button onClick={() => serNotificationDismiss(false)}>
				<span
					style={{ color: data?.text_color }}
					className={'me-3 mt-1 d-none d-md-block'}>
					Dismiss
				</span>
				<DismissIcon
					color={data?.text_color}
					background={data?.background_color}
				/>
			</button>
		</div>
	)
}

export default HeaderNotification
