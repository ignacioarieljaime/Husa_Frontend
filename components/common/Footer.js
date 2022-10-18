import axios from 'axios'
import FaceBookIcon from 'components/icons/FacebookIcon'
import InstagramIcon from 'components/icons/InstagramIcon'
import Logo from 'components/icons/Logo'
import TwitterIcon from 'components/icons/TwitterIcon'
import YouTubeIcon from 'components/icons/YouTubeIcon'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFooterData } from 'redux/slices/layout'

function Footer() {
	const dispatch = useDispatch()
	const { footerData } = useSelector(state => state.layoutData)

	useEffect(() => {
		!footerData && getFooter()
	}, [])

	const getFooter = async () => {
		try {
			let response = await axios.get(
				'https://imcxm.dev-api.hisenseportal.com/api/husa/getMenus'
			)

			dispatch(
				setFooterData(response.data.data.find(item => item.title === 'footer'))
			)

		} catch (error) {
			console.log(error)
		}
	}

	return (
		<footer className='footer p-6 pt-md-16 px-md-6 pb-md-6'>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-12 col-lg-7 col-xl-6 full-width-border-sm'>
						<div className='row justify-content-between align-items-start'>
							<a href='/pages/landing/index.html' className='p-0 px-md-3 mb-11'>
								<Logo color={'#009E91'} height={'14'} width={'86'} />
							</a>
							{footerData?.widgets.columns.map(columns => (
								<div className='px-0 footer-nav'>
									<ul>
										{columns.map(colum => (
											<li className='pb-5 pt-2'>
												<Link href={colum.url}>
													<a>
														<span className='underline-on-hover'>
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
					<div className='col-12 col-lg-5 col-xl-6 full-width-border-sm mt-6 mt-md-0'>
						<div className='row justify-content-start justify-content-md-end align-items-start'>
							<div className='social-media me-12'>
								<label className='mb-4'>Follow Us</label>
								<div className='row justify-content-start align-items-center'>
									{footerData?.widgets.socials.map(item => (
										<Link href={item.url}>
											<a>
												{item.name === 'facebook' ? (
													<FaceBookIcon />
												) : item.name === 'twitter' ? (
													<TwitterIcon />
												) : item.name === 'youtube' ? (
													<YouTubeIcon />
												) : item.name === "instagram" ? (
													<InstagramIcon />
												) : null}
											</a>
										</Link>
									))}
								</div>
							</div>
							<div className='footer-nav col-md-4 my-8 mt-md-0'>
								<a href='#'>
									<span className='underline-on-hover'>GLOBAL</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className='row website-info mt-md-16 mt-6'>
					{footerData?.widgets.links.map(link => (
						<Link href={link.url}>
							<a>
								<span className='underline-on-hover'>{link.name}</span>
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
