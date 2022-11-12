import React from 'react'
import TelevisionsBlockCardsItem from './TelevisionsBlockCardsItem'

import img from 'public/assets/images/contact.png'
import Link from 'next/link'

const TelevisionsBlockCards = ({ data: { structure } }) => {
	structure = {
		title: {
			value: '<h2>Already purchased?</h2>'
		},
		subtitle: {
			value: '<p>Here’s few things that could help you enjoy your new TV.</p>'
		},
		list: {
			value: [
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/e84932379d/laser-tv__ScaleMaxWidthWzMwNDhd.png-hkxn30.png',
						alt: 'tv'
					},
					title: {
						value: '<h4>Register your product</h4>'
					},
					subtitle: {
						value: '<h6>Register today to get the most out of your TV</h6>'
					},
					link: {
						title: 'Register today',
						value: '/'
					}
				},
				{
					backgroundImage: {
						src: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/39f6c6b03f/content_dp-beautiful-screen-min-clikhq.png',
						alt: 'bg'
					},
					title: {
						value: '<h4>Setup & Install</h4>'
					},
					subtitle: {
						value: ''
					},
					link: {
						title: 'Learn More',
						value: '/'
					}
				}
			]
		},
		support: {
			image: {
				src: img.src,
				alt: ''
			},
			title: {
				value: '<h4>Hisense<br />Support</h4>'
			},
			link: {
				title: 'Register today',
				value: '/'
			}
		}
	}

	return (
		<section>
			<div className='televisions-cards'>
				<div className='container'>
					<div
						className='title'
						dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></div>
					<div
						className='subtitle'
						dangerouslySetInnerHTML={{
							__html: structure?.subtitle?.value
						}}></div>
					<div className='row justify-content-center'>
						{structure?.list?.value.map((item, index) => (
							<TelevisionsBlockCardsItem data={item} key={index} />
						))}
						<div className='col-12'>
							<div
								className='hisense-support-card card-item'
								style={{
									backgroundImage: `url(${structure?.support?.image?.src})`
								}}>
								<div className='box'>
									<div
										dangerouslySetInnerHTML={{
											__html: structure?.support?.title?.value
										}}></div>
									{structure?.support?.link?.value ? (
										<Link href={structure?.support?.link?.value}>
											<a className='n-btn outline-white transparent d-block w-fit'>
												{structure?.support?.link?.title}
											</a>
										</Link>
									) : null}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TelevisionsBlockCards
