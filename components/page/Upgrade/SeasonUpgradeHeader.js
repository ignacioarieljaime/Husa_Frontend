import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MenuWhite from 'components/icons/MenuIcon'
import SearchIcon from 'components/icons/SearchIcon'
import { useWindowSize } from 'hooks/useWindowSize'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const SeasonUpgradeHeader = ({ data }) => {
	const [content, setContent] = useState(null)
	const [openMenu, setOpenMenu] = useState(false)
	const router = useRouter()
	useEffect(() => {
		setContent(data?.structure)
	}, [])
	const windowSize = useWindowSize()

	useEffect(() => {
		if (windowSize[0] > 991 && openMenu) setOpenMenu(false)
	}, [windowSize])

	return (
		<>
			<section className='season_upgrade_header_sticky'>
				<div id={data?.name + data?.id} className='season_upgrade_header'>
					<div>
						{content?.imageLink?.value ? (
							<Link
								target={
									content?.imageLink?.target
										? content?.imageLink?.target
										: '_self'
								}
								href={content?.imageLink?.value}>
								<a
									target={
										content?.imageLink?.target
											? content?.imageLink?.target
											: '_self'
									}
									className={`d-block`}>
									<img
										src={content?.image?.src}
										alt={content?.image?.alt}
										className='image'
									/>
								</a>
							</Link>
						) : (
							<img
								src={content?.image?.src}
								alt={content?.image?.alt}
								className='image'
							/>
						)}
						<p className='gradient_text'>{content?.title?.value}</p>
					</div>
					{windowSize[0] > 991 ? (
						<ul className='nav flex-nowrap'>
							{content?.list?.value.map(
								(item, index) =>
									item?.link?.value && (
										<li key={index}>
											<Link href={item?.link?.value}>
												<a
													className={`text-decoration-none ${
														item?.link?.value
															? router.asPath.split('#').length > 1
																? item?.link?.value ===
																  '#' + router.asPath.split('#')[1]
																	? 'active'
																	: ''
																: item?.link?.value === router.asPath
																? 'active'
																: ''
															: ''
													}`}>
													{item?.link?.title}
												</a>
											</Link>
										</li>
									)
							)}
						</ul>
					) : (
						<div className='buttons'>
							<button>
								<SearchIcon />
							</button>
							<button onClick={() => setOpenMenu(state => !state)}>
								{openMenu ? (
									<FontAwesomeIcon icon={faXmark} size='xl' />
								) : (
									<MenuWhite />
								)}
							</button>
						</div>
					)}
				</div>
			</section>
			<div className={`hamburger_menu_nav ${openMenu ? 'open' : ''}`}>
				<p className='gradient_text'>{content?.title?.value}</p>
				<ul className='nav'>
					{content?.list?.value.map(
						(item, index) =>
							item?.link?.value && (
								<li key={index}>
									<Link
										target={item?.link?.target ? item?.link?.target : '_self'}
										href={item?.link?.value}>
										<a
											className={`text-decoration-none ${
												item?.link?.value
													? router.asPath.split('#').length > 1
														? item?.link?.value ===
														  '#' + router.asPath.split('#')[1]
															? 'active'
															: ''
														: item?.link?.value === router.asPath
														? 'active'
														: ''
													: ''
											}`}
											target={
												item?.link?.target ? item?.link?.target : '_self'
											}>
											{item?.link?.title}
										</a>
									</Link>
								</li>
							)
					)}
				</ul>
			</div>
		</>
	)
}

export default SeasonUpgradeHeader
