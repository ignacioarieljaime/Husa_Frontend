import Link from 'next/link'
import React from 'react'

const HomeAppliancesTitleAndCardsBox = ({ data }) => {
	const { structure } = data

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
						<div className={`item ${item?.theme?.value}`} key={index}>
							<img
								src={item?.image?.src}
								alt={item?.image?.alt}
								width={'100%'}
								className='image'
							/>
							<div className='content'>
								<h4
									className='title'
									dangerouslySetInnerHTML={{ __html: item?.title?.value }}></h4>
								<div>
									<h5
										className='subtitle'
										dangerouslySetInnerHTML={{
											__html: item?.subtitle?.value
										}}></h5>
									<Link
										target={item?.link?.target ? item?.link?.target : '_self'}
										href={item?.link?.value ? item?.link?.value : '/'}>
										<a
											target={item?.link?.target ? item?.link?.target : '_self'}
											style={{ width: '150px' }}
											className={` text-nowrap n-btn d-block mx-auto ${
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
