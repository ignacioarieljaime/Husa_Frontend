import Link from 'next/link'
import React from 'react'

const HomeAppliancesTitleAndCardsBox = ({ data }) => {
	const structure = {}
	// theme
	return (
		<section>
			<div className='ha_title_cards_box text-center'>
				<div
					className='subtitle'
					dangerouslySetInnerHTML={{
						__html: '<p>Hisense Kitchen Packages</p>'
					}}></div>
				<h2
					className='title'
					dangerouslySetInnerHTML={{
						__html: '<p>Build your kitchen suite.</p>'
					}}></h2>
				<div className='cards'>
					{[{}, {}].map((item, index) => (
						<div className='item' key={index}>
							<img
								src='https://files.hisense-usa.com/storage/hisense/asset/images/6649b05ee00926.webp'
								alt='s'
								width={'100%'}
								className='image'
							/>
							<div className='content'>
								<h4 className='title'>Dishwasher</h4>
								<div>
									<h5
										className='subtitle'
										dangerouslySetInnerHTML={{
											__html:
												'<p>Incredibly quiet and tough on <u> dirty dishes</u></p>'
										}}></h5>
									<Link
										target={item?.link?.target ? item?.link?.target : '_self'}
										href={item?.link?.value ? item?.link?.value : '/'}>
										<a
											target={item?.link?.target ? item?.link?.target : '_self'}
											style={{ width: '150px' }}
											className='black text-nowrap n-btn d-block mx-auto  '>
											{/* {item?.link?.title} */}
											Shop now
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
