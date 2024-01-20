import Link from 'next/link'
import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
import LightBoxModal from '../NewComponents/LightBoxModal'
import CESCloseIcon from 'components/icons/CESCloseIcon'
import CESHamburgerMenuIcon from 'components/icons/CESHamburgerMenuIcon'
import { useWindowSize } from 'hooks/useWindowSize'

const CESNavBar = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState()
	const [lightBoxStatus, setLightBoxStatus] = useState(false)
	const [lightBoxActiveIndex, setLightBoxActiveIndex] = useState(-1)
	const [menuStatus, setMenuStatus] = useState(false)
	const [fix, setFix] = useState(false)
	const menu = useRef()
	const windowSize = useWindowSize()

	useEffect(() => {
		// setContent(structure)

		window.addEventListener('scroll', () => {
			if (menu?.current?.offsetTop <= window.scrollY + 64) {
				setFix(true)
			} else {
				setFix(false)
			}
		})
	}, [])

	useEffect(() => {
		if (windowSize[0] >= 768) {
			setMenuStatus(false)
		}
	}, [windowSize])

	return (
		<section
			ref={menu}
			style={
				structure?.version?.value === 'primary'
					? {
							position: ' sticky',
							zIndex: `${
								lightBoxStatus
									? fix
										? '99999'
										: !fix
										? '9998'
										: '99998'
									: fix
									? '99999'
									: !fix
									? '100'
									: '99998'
							}`,
							top: ' 0'
					  }
					: {}
			}
			id={data?.name + data?.id}>
			<div
				className={`ces_navbar ${structure?.version?.value} ${
					structure?.version?.value === 'primary'
						? menuStatus
							? ''
							: 'closed'
						: ''
				}`}
				style={
					fix
						? {
								backgroundColor: structure?.backgroundColor?.value || '#fff'
						  }
						: {
								backgroundColor: structure?.backgroundColor?.value || '#fff'
						  }
				}>
				<ul
					className={`ces_navbar___items_wrapper  ${
						structure?.list?.value.length >= 3 ? 'stack' : ''
					}`}
					style={{
						justifystructure:
							structure?.list?.value?.length > 1 ? 'space-between' : 'center'
					}}>
					{structure?.list?.value.map((item, index) =>
						item?.link?.title ? (
							structure?.version?.value === 'primary' ? (
								item?.lightBox?.value ? (
									<li className='ces_navbar___items_wrapper___link' key={index}>
										<span
											style={{ color: structure?.fontColor?.value || '#000' }}
											onClick={() => {
												setLightBoxStatus(true)
												setLightBoxActiveIndex(index)
											}}>
											{item?.link?.title}
										</span>
										{index === 0 && structure?.list?.value?.length > 1 ? (
											<span
												onClick={() => setMenuStatus(prev => !prev)}
												className='ces_navbar___items_wrapper___link___menu_btn'>
												{menuStatus ? (
													<CESCloseIcon />
												) : (
													<CESHamburgerMenuIcon />
												)}
											</span>
										) : null}
									</li>
								) : item?.link?.value ? (
									<li className='ces_navbar___items_wrapper___link' key={index}>
										<Link
											target={item?.link?.target ? item?.link?.target : '_self'}
											key='index'
											href={item?.link?.value}>
											<a
												style={{ color: structure?.fontColor?.value || '#000' }}
												target={
													item?.link?.target ? item?.link?.target : '_self'
												}>
												{item?.link?.title}
												{item?.link?.target === '_blank' && (
													<img
														style={{ marginLeft: '10px' }}
														src={OpenPageOnNewTab.src}
													/>
												)}
											</a>
										</Link>
										{index === 0 && structure?.list?.value?.length > 1 ? (
											<span
												onClick={() => setMenuStatus(prev => !prev)}
												className='ces_navbar___items_wrapper___link___menu_btn'>
												{menuStatus ? (
													<CESCloseIcon />
												) : (
													<CESHamburgerMenuIcon />
												)}
											</span>
										) : null}
									</li>
								) : (
									<li className='ces_navbar___items_wrapper___link' key={index}>
										<span
											style={{
												color: structure?.fontColor?.value || '#000',
												cursor: 'auto'
											}}>
											{item?.link?.title}
										</span>
										{index === 0 && structure?.list?.value?.length > 1 ? (
											<span
												onClick={() => setMenuStatus(prev => !prev)}
												className='ces_navbar___items_wrapper___link___menu_btn'>
												{menuStatus ? (
													<CESCloseIcon />
												) : (
													<CESHamburgerMenuIcon />
												)}
											</span>
										) : null}
									</li>
								)
							) : item?.link?.value ? (
								<li className={`ces_navbar___items_wrapper___link`} key={index}>
									<Link
										target={item?.link?.target ? item?.link?.target : '_self'}
										href={item?.link?.value}>
										<a
											style={{ color: structure?.fontColor?.value || '#000' }}
											target={
												item?.link?.target ? item?.link?.target : '_self'
											}>
											{item?.link?.title}
											{item?.link?.target === '_blank' && (
												<img
													style={{ marginLeft: '10px' }}
													src={OpenPageOnNewTab.src}
												/>
											)}
										</a>
									</Link>
								</li>
							) : (
								<li className={`ces_navbar___items_wrapper___link`} key={index}>
									<span
										style={{
											color: structure?.fontColor?.value || '#000',
											cursor: 'auto'
										}}>
										{item?.link?.title}
									</span>
								</li>
							)
						) : null
					)}
				</ul>
			</div>
			{structure?.list?.value[lightBoxActiveIndex]?.lightBox?.value && (
				<LightBoxModal
					id={data?.id}
					caption={
						structure?.list?.value[lightBoxActiveIndex]?.lightBoxObject?.value
							?.caption
					}
					video={
						structure?.list?.value[lightBoxActiveIndex]?.lightBoxObject?.value
							?.video
					}
					image={
						structure?.list?.value[lightBoxActiveIndex]?.lightBoxObject?.value
							?.image
					}
					link={
						structure?.list?.value[lightBoxActiveIndex]?.lightBoxObject?.value
							?.link
					}
					isVisible={lightBoxStatus}
					visibleHandler={() => setLightBoxStatus(prevState => !prevState)}
				/>
			)}
		</section>
	)
}

export default CESNavBar
