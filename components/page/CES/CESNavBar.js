import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
import LightBoxModal from '../NewComponents/LightBoxModal'
import CESCloseIcon from 'components/icons/CESCloseIcon'
import CESHamburgerMenuIcon from 'components/icons/CESHamburgerMenuIcon'

const CESNavBar = ({ data }) => {
	const { structure } = data
	const [content, setContent] = useState()
	const [lightBoxStatus, setLightBoxStatus] = useState(false)
	const [lightBoxActiveIndex, setLightBoxActiveIndex] = useState(-1)
	const [menuStatus, setMenuStatus] = useState(false)
	useEffect(() => {
		setContent(structure)
	}, [])

	return (
		<section
			style={
				content?.version?.value === 'primary'
					? {
							position: ' sticky',
							zIndex: ' 99999',
							top: ' 0'
					  }
					: {}
			}
			id={data?.name + data?.id}>
			<div
				className={`ces_navbar ${content?.version?.value} ${
					content?.version?.value === 'primary'
						? menuStatus
							? ''
							: 'closed'
						: ''
				}`}
				style={{
					backgroundColor: content?.backgroundColor?.value || '#fff'
				}}>
				<ul className='ces_navbar___items_wrapper'>
					{content?.list?.value.map((item, index) =>
						content?.version?.value === 'primary' ? (
							item?.lightBox?.value ? (
								<li className='ces_navbar___items_wrapper___link' key={index}>
									<span
										style={{ color: content?.fontColor?.value || '#000' }}
										onClick={() => {
											setLightBoxStatus(true)
											setLightBoxActiveIndex(index)
										}}>
										{item?.link?.title}
									</span>
									{index === 0 ? (
										<span
											onClick={() => setMenuStatus(prev => !prev)}
											className='ces_navbar___items_wrapper___link___menu_btn'>
											{menuStatus ? <CESCloseIcon /> : <CESHamburgerMenuIcon />}
										</span>
									) : null}
								</li>
							) : (
								<li className='ces_navbar___items_wrapper___link' key={index}>
									<Link
										target={item?.link?.target ? item?.link?.target : '_self'}
										key='index'
										href={item?.link?.value}>
										<a
											style={{ color: content?.fontColor?.value || '#000' }}
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
									{index === 0 ? (
										<span
											onClick={() => setMenuStatus(prev => !prev)}
											className='ces_navbar___items_wrapper___link___menu_btn'>
											{menuStatus ? <CESCloseIcon /> : <CESHamburgerMenuIcon />}
										</span>
									) : null}
								</li>
							)
						) : (
							<li className='ces_navbar___items_wrapper___link' key={index}>
								<Link
									target={item?.link?.target ? item?.link?.target : '_self'}
									key='index'
									href={item?.link?.value}>
									<a
										style={{ color: content?.fontColor?.value || '#000' }}
										target={item?.link?.target ? item?.link?.target : '_self'}>
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
						)
					)}
				</ul>
			</div>
			{content?.list?.value[lightBoxActiveIndex]?.lightBox?.value && (
				<LightBoxModal
					id={data?.id}
					caption={
						content?.list?.value[lightBoxActiveIndex]?.lightBoxObject?.value
							?.caption
					}
					video={
						content?.list?.value[lightBoxActiveIndex]?.lightBoxObject?.value
							?.video
					}
					image={
						content?.list?.value[lightBoxActiveIndex]?.lightBoxObject?.value
							?.image
					}
					link={
						content?.list?.value[lightBoxActiveIndex]?.lightBoxObject?.value
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
