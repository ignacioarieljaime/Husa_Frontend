import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useWindowSize } from 'hooks/useWindowSize'
import { useEffect } from 'react'

const FooterBodyList = ({ data, theme }) => {
	const [collapsed, setCollapsed] = useState(true)
	const windowSize = useWindowSize()

	useEffect(() => {
		if (windowSize[0] > 769) {
			setCollapsed(false)
		}
	}, [windowSize])

	return (
		<>
			<h6
				className={`heading ${collapsed ? 'mb-1' : 'rotated'}`}
				onClick={() => setCollapsed(prevState => !prevState)}>
				<Link href={data?.header?.value ? data?.header?.value : ''}>
					<a>{data?.header?.title}</a>
				</Link>
				{windowSize[0] < 769 && (
					<FontAwesomeIcon
						icon={faChevronCircleRight}
						size='xl'
						color={theme === 'dark' ? '#FFF' : '#000'}
					/>
				)}
			</h6>
			{!collapsed && (
				<ul>
					{data?.columns &&
						data?.columns.map((listItem, index) => (
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
