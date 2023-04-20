import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useWindowSize } from 'hooks/useWindowSize'
import { useEffect } from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

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
					<a target={data?.header?.target}>
						{data?.header?.title}
						{item?.target === '_blank' && (
							<img style={{ marginLeft: '10px' }} src={OpenPageOnNewTab.src} />
						)}
					</a>
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
									<a target={listItem?.target ? listItem?.target : '_self'}>
										{listItem?.name}
										{item?.target === '_blank' && (
											<img
												style={{ marginLeft: '10px' }}
												src={OpenPageOnNewTab.src}
											/>
										)}
									</a>
								</Link>
							</li>
						))}
				</ul>
			)}
		</>
	)
}

export default FooterBodyList
