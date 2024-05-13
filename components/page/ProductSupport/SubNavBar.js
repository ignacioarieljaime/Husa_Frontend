import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
import DownloadIconV1 from 'components/icons/DownloadIconV1'
import Assignment from 'components/icons/Assignment'
import TubePlayIcon from 'components/icons/TubePlayIcon'
import FaqIcon from 'components/icons/FaqIcon'
import SettingIcon from 'components/icons/SettingIcon'
import FirmwareIcon from 'components/icons/FirmwareIcon'
import ChatIcon from 'components/icons/ChatIcon'
import ExternalLink from 'public/assets/images/ExternalLink.png'

function SubNavBar({ pim, data }) {
	let { structure } = data
	const [fix, setFix] = useState(false)
	const menu = useRef()

    console.log('structure: ', structure.tags.newItem );

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (menu?.current?.offsetTop <= window.scrollY + 72) {
				setFix(true)
			} else {
				setFix(false)
			}
		})
	}, [])
	return (
		<section
			id={data.name + data.id}
			ref={menu}
			style={{
				zIndex: fix ? 100005 : 10,
				padding: fix ? '19px 0px' : '0.75rem 0px'
			}}
			className='catalog-navbar bg-black pdp-support-custom-nav'>
			<nav className='container'>
				<div className="navbar-container row justify-content-between align-items-center p-0 m-0">
					<div className="model-number-box">
					<span className='text-secondary'>{pim?.model}</span>
					</div>
					<ul className='row justify-content-center justify-content-md-center align-items-center p-0 m-0'>
					{structure?.tags?.value.map((item, index) => (
						<>
						<li key={index}>
							<Link
								target={item?.target?.target ? item?.target?.target : '_self'}
								href={item?.target?.value ? item?.target?.value : '/'}>
								<a
									target={
										item?.target?.target ? item?.target?.target : '_self'
									}>
									<DownloadIconV1 height='21' />
									<span className='underline-on-hover'>
									{data.name}
									</span>
								</a>
							</Link>
						</li>
						<li key={index}>
						<Link
							target={item?.target?.target ? item?.target?.target : '_self'}
							href={item?.target?.value ? item?.target?.value : '/'}>
							<a
								target={
									item?.target?.target ? item?.target?.target : '_self'
								}>
								<Assignment height='21' />
								<span className='underline-on-hover'>
								Register
								</span>
							</a>
						</Link>
					</li>
					<li key={index}>
					<Link
						target={item?.target?.target ? item?.target?.target : '_self'}
						href={item?.target?.value ? item?.target?.value : '/'}>
						<a
							target={
								item?.target?.target ? item?.target?.target : '_self'
							}>
							<TubePlayIcon height='21' />
							<span className='underline-on-hover'>
							Videos
							</span>
						</a>
					</Link>
				</li>
						<li key={index}>
						<Link
							target={item?.target?.target ? item?.target?.target : '_self'}
							href={item?.target?.value ? item?.target?.value : '/'}>
							<a
								target={
									item?.target?.target ? item?.target?.target : '_self'
								}>
								<FaqIcon height='21' />
								<span className='underline-on-hover'>
								FAQS
								</span>
							</a>
						</Link>
					</li>
						<li key={index}>
						<Link
							target={item?.target?.target ? item?.target?.target : '_self'}
							href={item?.target?.value ? item?.target?.value : '/'}>
							<a
								target={
									item?.target?.target ? item?.target?.target : '_self'
								}>
								<SettingIcon height='21' />
								<span className='underline-on-hover'>
								Parts
								<img style={{ marginLeft: '5px' }} src={ExternalLink.src} />
								</span>
							</a>
						</Link>
					</li>
						<li key={index}>
						<Link
							target={item?.target?.target ? item?.target?.target : '_self'}
							href={item?.target?.value ? item?.target?.value : '/'}>
							<a
								target={
									item?.target?.target ? item?.target?.target : '_self'
								}>
								<FirmwareIcon height='21' />
								<span className='underline-on-hover'>
											Firmware
											<img style={{ marginLeft: '5px' }} src={ExternalLink.src} />			
								</span>
							</a>
						</Link>
							</li>
							</>
					))}
					</ul>
					<div className="contact-us-box">
					<Link href="#">
								<a>
								<ChatIcon height='21' />
									<span className='underline-on-hover'>
									Contact Us
									<img style={{ marginLeft: '5px' }} src={ExternalLink.src} />
									</span>
								</a>
							</Link>
					</div>
				</div>
			</nav>
		</section>
	)
}

export default SubNavBar
