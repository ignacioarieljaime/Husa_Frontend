import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const HomeAppliancesTitleAndCardsBox = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState(null)
	const router = useRouter()

	// useEffect(() => {
	// 	setContent(structure)
	// }, [])
	// theme
	return (
		<section>
			<div className='ha_title_cards_box text-center'>
				<div className='subtitle'>{structure?.subtitle?.value}</div>
				<h2
					className='title'
					dangerouslySetInnerHTML={{
						__html: structure?.title?.value
					}}></h2>
				<div className='cards'>
					{structure?.list?.value.map((item, index) => (
						<div
							onClick={() =>
								item?.link?.value && router.push(item?.link?.value)
							}
							className={`item ${item?.theme?.value} box-group-link`}
							key={index}>
							<div>
								<img
									src={item?.image?.src}
									alt={item?.image?.alt}
									width={'100%'}
									className='image'
								/>
								<div className='content'>
									<h4
										className='title'
										dangerouslySetInnerHTML={{
											__html: item?.title?.value
										}}></h4>
									<div>
										<h5
											className='subtitle'
											dangerouslySetInnerHTML={{
												__html: item?.subtitle?.value
											}}></h5>
										{item?.link?.value && (
											<Link
												target={
													item?.link?.target ? item?.link?.target : '_self'
												}
												href={item?.link?.value ? item?.link?.value : '/'}>
												<a
													target={
														item?.link?.target ? item?.link?.target : '_self'
													}
													style={{ width: '150px' }}
													className={` text-nowrap n-btn d-block mx-auto medium ${
														item?.theme?.value === 'dark' ? 'black' : 'white'
													}`}>
													{item?.link?.title}
													{item?.link?.target === '_blank' && (
														<img
															style={{ marginLeft: '10px' }}
															src={OpenPageOnNewTab.src}
														/>
													)}
												</a>
											</Link>
										)}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default HomeAppliancesTitleAndCardsBox
