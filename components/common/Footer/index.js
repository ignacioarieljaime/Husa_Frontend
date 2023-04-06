import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import FacebookIcon from 'components/icons/FacebookIcon'
import InstagramIcon from 'components/icons/InstagramIcon'
import Logo from 'components/icons/Logo'
import TwitterIcon from 'components/icons/TwitterIcon'
import YouTubeIcon from 'components/icons/YouTubeIcon'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import FooterBodyList from './FooterBodyList'
// import { setFooterData } from 'redux/slices/layout'

function Footer() {
	const [footerData, setFooterData] = useState()
	const { footerData: footerReduxData } = useSelector(state => state.layoutData)

	useEffect(() => {
		if (sessionStorage.getItem('footerData')) {
			setFooterData(JSON.parse(sessionStorage.getItem('footerData')))
		}
	}, [footerReduxData])

	const bodyData = {
		id: 2,
		title: 'footer',
		widgets: {
			links: [
				{ url: '/legal-disclaimer', name: 'Legal Disclaimer' },
				{ url: '/privacy-policy', name: 'Privacy Policy' },
				{ url: '/recycling-information', name: 'Recycling Information' },
				{ id: 4, url: null, name: 'Sitemap' },
				{
					id: 5,
					url: 'https://app.cookiepro.com/app/#/webform/b861842b-f225-4fcc-afcc-2b5930c9c2a2',
					name: 'California Consumer Privacy Act Portal'
				}
			],
			columns: [
				[
					{
						header: { url: '/', name: 'Header Title 1' },
						columns: [
							{ url: '/company', name: 'COMPANY' },
							{ url: '/authorized-retailers', name: 'AUTHORIZED RETAILERS' },
							{ url: '/careers', name: 'CAREERS' },
							{ url: '/compliance', name: 'COMPLIANCE' },
							{
								url: 'https://app.cookiepro.com/app/#/webform/b861842b-f225-4fcc-afcc-2b5930c9c2a2',
								name: 'DO NOT SELL'
							}
						]
					},
					{
						header: { url: '/', name: 'Header Title 1 - 2' },
						columns: [
							{ url: '/company', name: 'COMPANY' },
							{ url: '/authorized-retailers', name: 'AUTHORIZED RETAILERS' },
							{ url: '/careers', name: 'CAREERS' },
							{ url: '/compliance', name: 'COMPLIANCE' },
							{
								url: 'https://app.cookiepro.com/app/#/webform/b861842b-f225-4fcc-afcc-2b5930c9c2a2',
								name: 'DO NOT SELL'
							}
						]
					}
				],
				[
					{
						header: { url: '/', name: 'Header Title 2' },
						columns: [
							{ url: '/tv-and-audio', name: 'TV + AUDIO' },
							{ url: '/home-appliance', name: 'HOME APPLIANCES' },
							{ url: '/air-products', name: 'AIR PRODUCTS' },
							{
								url: 'http://www.hisense-b2b.com/',
								name: 'COMMERCIAL DISPLAYS'
							},
							{ url: '/commercial', name: 'COMMERCIAL REFRIGERATORS' }
						]
					}
				],
				[
					{
						header: { url: '/', name: 'Header Title 3' },
						columns: [
							{ url: '/support', name: 'SUPPORT' },
							{ url: '/support/faq', name: 'FAQ' },
							{ url: '/product-safety-recall', name: 'RECALL INFORMATION' },
							{ url: '/contact', name: 'CONTACT' },
							{ url: '/support/register', name: 'REGISTER' }
						]
					}
				],
				[
					{
						header: { url: '/', name: 'Header Title 4' },
						columns: [{ url: '/', name: 'Sample Item' }]
					}
				],
				[
					{
						header: { url: '/', name: 'Header Title 5' },
						columns: [{ url: '/', name: 'Sample Item' }]
					}
				]
			],
			socials: [
				{ url: 'https://www.facebook.com/hisenseusa/', name: 'facebook' },
				{ url: 'https://twitter.com/hisense_usa', name: 'twitter' },
				{ url: 'https://www.instagram.com/hisense_usa/', name: 'instagram' },
				{ url: 'https://www.youtube.com/user/HisenseUSA', name: 'youtube' }
			]
		},
		brand_id: 3
	}

	const theme = 'light'

	console.log(footerData);
	return (
		// <footer className='footer px-6 py-10 pt-md-16 px-md-6 pb-md-6'>
		// 	<div className='container-fluid'>
		// 		<div className='row'>
		// 			<div className='col-12 col-xxl-6 full-width-border-sm'>
		// 				<div className='row align-items-start'>
		// 					<Link href='/'>
		// 						<a className='footer-logo px-0 mb-1 mb-md-11'>
		// 							<Logo color={'#009E91'} height={'14'} width={'86'} />
		// 						</a>
		// 					</Link>

		// 					{footerData?.widgets?.columns.map((columns, index) => (
		// 						<div className='footer-nav px-0 px-md-3' key={index}>
		// 							<ul>
		// 								{columns.map((colum, index) => (
		// 									<li className='pb-5 pt-2' key={index}>
		// 										<Link href={colum.url ? colum.url : ''}>
		// 											<a>
		// 												<span className='lh-base underline-on-hover'>
		// 													{colum.name}
		// 												</span>
		// 											</a>
		// 										</Link>
		// 									</li>
		// 								))}
		// 							</ul>
		// 						</div>
		// 					))}
		// 				</div>
		// 			</div>
		// 			<div className='col-12 col-xxl-6 full-width-border-sm'>
		// 				<div className='row justify-content-start justify-content-md-end align-items-start me-20 me-xxl-0'>
		// 					<div className='social-media me-12 px-0 px-md-3'>
		// 						<label className='mb-4'>Follow Us</label>
		// 						<div className='row justify-content-start align-items-center'>
		// 							{footerData?.widgets?.socials.map((item, index) => (
		// 								<a
		// 									key={index}
		// 									href={item.url ? item.url : ''}
		// 									className={`socicon socicon-${item.name}`}
		// 									style={{ fontSize: '22px', color: '#fff' }}></a>
		// 							))}
		// 						</div>
		// 					</div>
		// 					{/* <div className='footer-nav col-md-4 my-8 mt-md-0 px-0 px-md-3'>
		// 						<a href='#'>
		// 							<span className='underline-on-hover'>GLOBAL</span>
		// 						</a>
		// 					</div> */}
		// 				</div>
		// 			</div>
		// 		</div>
		// 		<div className='row website-info mt-md-16 mt-6 mb-md-4'>
		// 			{footerData?.widgets?.links.map((link, index) => (
		// 				<Link key={index} href={link.url ? link.url : ''}>
		// 					<a>
		// 						<span className='lh-base underline-on-hover'>{link.name}</span>
		// 					</a>
		// 				</Link>
		// 			))}

		// 			<div className='full-width-border-sm'></div>
		// 			<span>2022 © Copyright Hisense.</span>
		// 		</div>
		// 	</div>
		// </footer>
		<footer>
			<div className={`new_footer ${theme}`}>
				<div className='content'>
					<div className='headline'>
						<Logo color='#00AAA6' />
						<div className='social_media'>
							<div className='d-flex justify-content-between align-items-center'>
								{footerData?.widgets?.socials.map((item, index) => (
									<a
										key={index}
										href={item.url ? item.url : ''}
										className={`social_media_link socicon socicon-${item.name}`}
										style={{
											fontSize: '22px',
											color: theme === 'dark' ? '#ffffffb3' : '#000000b3'
										}}></a>
								))}
							</div>
							<p className='social_media_id'>@Hisense_USA</p>
						</div>
					</div>
					<div className='line'></div>
					<div className='body'>
						{footerData?.widgets?.columns.map((list, index) => (
							<div className='px-3'>
								{list.map((item, index) => (
									<FooterBodyList data={item} key={index} />
								))}
							</div>
						))}
					</div>
					<div className='bottom_links'>
						<ul>
							{footerData?.widgets?.links.map((item, index) => (
								<li key={index}>
									<Link href={item.url ? item.url : ''}>
										<a>{item?.name}</a>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
