import axios from 'axios'
import Logo from 'components/icons/Logo'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
// import { setFooterData } from 'redux/slices/layout'

function Footer() {
	const [footerData, setFooterData] = useState()
	// const { footerData } = useSelector(state => state.layoutData)

	useEffect(() => {
		sessionStorage.getItem('footerData')
			? setFooterData(JSON.parse(sessionStorage.getItem('footerData')))
			: getFooter()
	}, [])

	const getFooter = async () => {
		try {
			let response = await axios.get(
				'https://imcxm.dev-api.hisenseportal.com/api/husa/getMenus'
			)
			setFooterData(response.data.data.find(item => item.title === 'footer'))
			sessionStorage.setItem(
				'footerData',
				JSON.stringify(response.data.data.find(item => item.title === 'footer'))
			)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<footer className='footer px-6 py-10 pt-md-16 px-md-6 pb-md-6'>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-12 col-lg-7 col-xl-6 full-width-border-sm'>
						<div className='row justify-content-between align-items-start'>
							<a href='/pages/landing/index.html' className='p-0 mb-1 mb-md-11'>
								<Logo color={'#009E91'} height={'14'} width={'86'} />
							</a>

							{footerData?.widgets?.columns.map(columns => (
								<div className='px-0 footer-nav'>
									<ul>
										{columns.map(colum => (
											<li className='pb-5 pt-2'>
												<Link href={colum.url ? colum.url : ''}>
													<a>
														<span className='lh-base underline-on-hover'>
															{colum.name}
														</span>
													</a>
												</Link>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
					<div className='col-12 col-lg-5 col-xl-6 full-width-border-sm'>
						<div className='row justify-content-start justify-content-md-end align-items-start'>
							<div className='social-media me-12 px-0 px-md-3'>
								<label className='mb-4'>Follow Us</label>
								<div className='row justify-content-start align-items-center'>
									{footerData?.widgets?.socials.map(item => (
										<a
											href={item.url ? item.url : ''}
											className={`socicon socicon-${item.name}`}
											style={{ fontSize: '22px', color: '#fff' }}></a>
									))}
								</div>
							</div>
							{/* <div className='footer-nav col-md-4 my-8 mt-md-0 px-0 px-md-3'>
								<a href='#'>
									<span className='underline-on-hover'>GLOBAL</span>
								</a>
							</div> */}
						</div>
					</div>
				</div>
				<div className='row website-info mt-md-16 mt-6 mb-md-4'>
					{footerData?.widgets?.links.map(link => (
						<Link href={link.url ? link.url : ''}>
							<a>
								<span className='lh-base underline-on-hover'>{link.name}</span>
							</a>
						</Link>
					))}

					<div className='full-width-border-sm'></div>
					<span>2022 © Copyright Hisense.</span>
				</div>
			</div>
		</footer>
	)
}

export default Footer
