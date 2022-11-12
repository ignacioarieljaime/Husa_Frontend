import { alt } from 'joi'
import Link from 'next/link'
import React from 'react'

const TelevisionsTvHero = ({ data: { structure } }) => {
	structure = {
		image: {
			src: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/458eb01487/Soundbar-Main__ScaleMaxWidthWzMwNDhd.jpg-wlpjvr.jpg',
			alt: 'Hero'
		},
		title: {
			value: '<h2>We make award<br />winning TVs.</h2>'
		},
		subtitle: {
			value:
				'<p>In all platforms and sizes.  The power of choice is in your hands.</p>'
		},
		link: {
			value: '/',
			title: 'Shop the lineup'
		},
		fullSize: {
			backgroundImage: {
				src: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/5bb5d14b06/22-9_LASER-TV-min_ScaleMaxWidthWzMwNDhd__ScaleMaxWidthWzMwNDhd.png-7ece41.png-3m63nq.png',
				alt: ''
			},
			badge: {
				src: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/1b3c2d5052/A6H_Feature-03__ScaleMaxWidthWzMwNDhd.jpg-9ywd81.jpg',
				alt: ''
			},
			titleImage: {
				src: 'https://assets.hisense-usa.com/assets/RetailerLogos/85e01a7c6d/image-v4__ScaleMaxWidthWzI1Nl0.png',
				alt: ''
			},
			title: {
				value: '<h4>Bringing MINI-LED to the people.</h4>'
			},
			link: {
				title: 'Learn More',
				value: '/'
			}
		},
		colored: {
			value: [
				{
					theme: {
						value: 'light'
					},
					backgroundColor: {
						value: '#fff'
					},
					image: {
						src: 'https://assets.hisense-usa.com/assets/GalleryImages/Product/483/47f6f2eaf6/A7H-Reward__ScaleMaxHeightWzc1MF0.png',
						alt: ''
					},
					title: {
						value: '<h4>Shop Hisense<br/>Google TVs</h4>'
					},
					link: {
						title: 'Learn More',
						value: '/'
					}
				},
				{
					theme: {
						value: 'dark'
					},
					backgroundColor: {
						value: '#954AC9'
					},
					image: {
						src: 'https://assets.hisense-usa.com/assets/GalleryImages/Product/483/47f6f2eaf6/A7H-Reward__ScaleMaxHeightWzc1MF0.png',
						alt: ''
					},
					title: {
						value: '<h4>Shop Hisense<br/>Roku Tvs</h4>'
					},
					link: {
						title: 'Learn More',
						value: '/'
					}
				}
			]
		},
		simple: {
			image: {
				src: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/d23d7365de/wide-color-gamut__ScaleMaxWidthWzMwNDhd.jpg-vbcmqu.jpg',
				alt: ''
			}
		},
		noBg: {
			logo: {
				src: 'https://www.amazon.com/Hisense-85-Inch-Google-Remote-85A7H/dp/B0B7CPRRYJ/ref=sr_1_2?crid=4YB7F7NT2MK5&keywords=hisense+85a7h&qid=1664820036&sprefix=hisense+85a7h%2Caps%2C227&sr=8-2',
				alt: ''
			},
			titleImage: {
				src: 'https://assets.hisense-usa.com/resources/themes/default/images/brandassets/logo-lasertv.svg',
				alt: ''
			},
			title: {
				value: '<h4>Big. Bold. Beautiful.</h4>'
			},
			link: {
				title: 'Learn More',
				value: '/'
			}
		}
	}
	return (
		<section>
			<div className='televisions-tv-hero'>
				<div className='container'>
					<div className='content'>
						<div
							className='title gradient-text mb-3 mb-md-7'
							dangerouslySetInnerHTML={{
								__html: structure?.title?.value
							}}></div>
						<div
							className='subtitle mb-3 mb-md-7'
							dangerouslySetInnerHTML={{
								__html: structure?.subtitle?.value
							}}></div>
					</div>
					<div className='row justify-content-center align-items-center'>
						<div className='col-12 py-3'>
							<div
								className='tv-item full-size'
								style={{
									backgroundImage: `url(${structure?.fullSize?.backgroundImage?.src})`
								}}>
								<img
									src={structure?.fullSize?.badge?.src}
									alt={structure?.fullSize?.badge?.alt}
									className='badge'
								/>
								<div className='content'>
									<img
										src={structure?.fullSize?.titleImage?.src}
										alt={structure?.fullSize?.titleImage?.alt}
										className='image'
									/>
									<div
										className='title'
										dangerouslySetInnerHTML={{
											__html: structure?.fullSize?.title?.value
										}}></div>
									{structure?.fullSize?.link?.value ? (
										<Link href={structure?.fullSize?.link?.value}>
											<a className='n-btn outline-black transparent d-block w-fit'>
												{structure?.fullSize?.link?.title}
											</a>
										</Link>
									) : null}
								</div>
							</div>
						</div>
						{structure?.colored?.value.map((item, index) => (
							<div className='col-12 col-lg-6 py-3'>
								<div
									className='tv-item colored-bg'
									style={{
										backgroundColor: item?.backgroundColor?.value
									}}>
									<div className='content'>
										<img
											src={item?.image?.src}
											alt={item?.image?.alt}
											className='image'
										/>
										<div>
											<div
												className={`title ${
													item?.theme?.value === 'dark' ? 'text-white' : ''
												}`}
												dangerouslySetInnerHTML={{
													__html: item?.title?.value
												}}></div>
											{item?.link?.value ? (
												<Link href={item?.link?.value}>
													<a
														className={`n-btn transparent d-block w-fit ${
															item?.theme?.value === 'dark'
																? 'outline-white'
																: 'outline-black'
														}`}>
														{item?.link?.title}
													</a>
												</Link>
											) : null}
										</div>
									</div>
								</div>
							</div>
						))}
						<div className='col-12 col-lg-6 py-3'>
							<div className='tv-item no-bg'>
								<img
									src={structure?.noBg?.logo?.src}
									alt={structure?.noBg?.logo?.alt}
									className='logo'
								/>
								<img
									src={structure?.noBg?.titleImage?.src}
									alt={structure?.noBg?.titleImage?.alt}
									className='image'
								/>
								<div
									className='title'
									dangerouslySetInnerHTML={{
										__html: structure?.noBg?.title?.value
									}}></div>
								{structure?.noBg?.link?.value ? (
									<Link href={structure?.noBg?.link?.value}>
										<a className='n-btn outline-white transparent d-block w-fit'>
											{structure?.noBg?.link?.title}
										</a>
									</Link>
								) : null}
							</div>
						</div>
						<div className='col-12 col-lg-6 py-3'>
							<div
								className='tv-item simple'
								style={{
									backgroundImage: `url(${structure?.simple?.image?.src})`
								}}></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TelevisionsTvHero
