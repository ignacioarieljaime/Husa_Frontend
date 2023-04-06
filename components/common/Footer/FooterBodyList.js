import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const FooterBodyList = ({ data }) => {
	const [collapsed, setCollapsed] = useState(true)
	return (
		<>
			<h6
				className={`heading ${collapsed ? '' : 'rotated'}`}
				onClick={() => setCollapsed(prevState => !prevState)}>
				<Link href={data?.header?.url ? data?.header?.url : ''}>
					<a>{data?.header?.name}</a>
				</Link>
				<FontAwesomeIcon icon={faChevronCircleRight} size='xl' />
			</h6>
			{!collapsed && (
				<ul>
					{data?.columns.map((listItem, index) => (
						<li key={index}>
							<Link href={listItem?.url ? listItem?.url : ''}>
								<a>{listItem?.name}</a>
							</Link>
						</li>
					))}
				</ul>
			)}
		</>
	)
}

export default FooterBodyList
