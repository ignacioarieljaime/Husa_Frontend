import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import WhiteArrow from 'public/assets/images/white-arrow.png'
import { useRouter } from 'next/router'
import { useRef } from 'react'

const SeasonUpgrade2KProcessBlock = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState(null)
	const router = useRouter()
	const ref = useRef()
	useEffect(() => {
		// setContent(structure)
		if (router.asPath.includes(data?.name + data?.id)) {
			setTimeout(() => {
				ref.current.scrollIntoView()
			}, 1000)
		}
	}, [])
	return (
		<section>
			<div
				id={data?.name + data?.id}
				ref={ref}
				className='season_upgrade_2k_process'>
				<img
					src={structure?.background?.src}
					alt={structure?.background?.alt}
					className='fixed_bg'
				/>
				<div className='text_content'>
					{structure?.title?.value && (
						<h4
							className='title'
							dangerouslySetInnerHTML={{
								__html: structure?.title?.value
							}}></h4>
					)}
					{structure?.text?.value && (
						<h6
							className='text'
							dangerouslySetInnerHTML={{
								__html: structure?.text?.value
							}}></h6>
					)}
				</div>
				<div className='process'>
					{structure?.list?.value.map((item, index) => (
						<div
							key={index}
							className='item'
							style={{ gridColumn: index + 1 + '/' + (index + 2) }}>
							{item?.bubbleLink?.value ? (
								<Link
									href={item?.bubbleLink?.value}
									target={
										item?.bubbleLink?.target
											? item?.bubbleLink?.target
											: '_self'
									}>
									<a
										target={
											item?.bubbleLink?.target
												? item?.bubbleLink?.target
												: '_self'
										}
										className='ball'
										style={{
											width: 750 / structure?.list?.value.length + 'px',
											height: 750 / structure?.list?.value.length + 'px'
										}}>
										<div className='number'>{index + 1}</div>
										<h5
											className='title'
											dangerouslySetInnerHTML={{
												__html: item?.title?.value
											}}></h5>
									</a>
								</Link>
							) : (
								<div
									className='ball'
									style={{
										width: 750 / structure?.list?.value.length + 'px',
										height: 750 / structure?.list?.value.length + 'px'
									}}>
									<div className='number'>{index + 1}</div>
									<h5
										className='title'
										dangerouslySetInnerHTML={{
											__html: item?.title?.value
										}}></h5>
								</div>
							)}
							<div
								className='text'
								dangerouslySetInnerHTML={{
									__html: item?.text?.value
								}}></div>
							{item?.link?.value && (
								<Link
									target={item?.link?.target ? item?.link?.target : '_self'}
									href={item?.link?.value}>
									<a
										target={item?.link?.target ? item?.link?.target : '_self'}
										className='n-btn medium primary-text'>
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
									width={68 / structure?.list?.value.length + '%'}
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
