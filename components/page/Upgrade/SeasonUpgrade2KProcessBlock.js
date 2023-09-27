import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import WhiteArrow from 'public/assets/images/white-arrow.png'

const SeasonUpgrade2KProcessBlock = ({ data }) => {
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(data?.structure)
	}, [])
	return (
		<section>
			<div
				id={data?.name + data?.id}
				className='season_upgrade_2k_process'
				style={{
					backgroundImage: `url(${content?.background?.src})`
				}}>
				<div className='text_content'>
					<h4
						className='title'
						dangerouslySetInnerHTML={{
							__html: content?.title?.value
						}}></h4>
					<h6
						className='text'
						dangerouslySetInnerHTML={{
							__html: content?.text?.value
						}}></h6>
				</div>
				<div className='process'>
					{content?.list?.value.map((item, index) => (
						<div
							key={index}
							className='item'
							style={{ gridColumn: index + 1 + '/' + (index + 2) }}>
							<div
								className='ball'
								style={{
									width: 750 / content?.list?.value.length + 'px',
									height: 750 / content?.list?.value.length + 'px'
								}}>
								<h5
									className='title'
									dangerouslySetInnerHTML={{
										__html: item?.title?.value
									}}></h5>
							</div>
							<div
								className='text'
								dangerouslySetInnerHTML={{
									__html: item?.text?.value
								}}></div>
							{item?.link?.value && (
								<Link href={item?.link?.value}>
									<a className='n-btn medium primary-text'>
										<span>{item?.link?.title}</span>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='8'
											height='12'
											viewBox='0 0 8 12'
											fill='none'>
											<path
												d='M1.69922 -5.24537e-07L7.69922 6L1.69922 12L0.634219 10.935L5.56922 6L0.63422 1.065L1.69922 -5.24537e-07Z'
												fill='url(#paint0_linear_8173_15)'
											/>
											<defs>
												<linearGradient
													id='paint0_linear_8173_15'
													x1='7.69922'
													y1='12'
													x2='-2.47362'
													y2='3.90608'
													gradientUnits='userSpaceOnUse'>
													<stop offset='0.258333' stop-color='#AEF53B' />
													<stop offset='1' stop-color='#60E2B7' />
												</linearGradient>
											</defs>
										</svg>
									</a>
								</Link>
							)}
							{index ? (
								<img
									src={WhiteArrow.src}
									alt={'arrow'}
									className='arrow'
									width={68 / content?.list?.value.length + '%'}
								/>
							) : null}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default SeasonUpgrade2KProcessBlock
