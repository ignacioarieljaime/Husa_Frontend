import Link from 'next/link'
import React from 'react'

const HomeAppliancesCardsBox = ({ data }) => {
	const structure = {}
	// theme
	return (
		<section>
			<div className='ha_cards_box text-center'>
				<div className='cards'>
					<div className='item colorful'>
						<div className='content'>
							<h4 className='title'>Dishwasher</h4>
							<img
								src='https://files.hisense-usa.com/storage/hisense/pim/images/126390396d5fb40.png'
								alt='s'
								width={'50%'}
								className='logo'
							/>
							<div>
								<h5
									className='subtitle'
									dangerouslySetInnerHTML={{
										__html:
											'<p>Incredibly quiet and tough on <u> dirty dishes</u></p>'
									}}></h5>

								<Link
									target={
										structure?.link?.target ? structure?.link?.target : '_self'
									}
									href={structure?.link?.value ? structure?.link?.value : '/'}>
									<a
										target={
											structure?.link?.target
												? structure?.link?.target
												: '_self'
										}
										style={{ width: '150px' }}
										className='black text-nowrap n-btn d-block mx-auto  '>
										{/* {structure?.link?.title} */}
										Shop now
										{structure?.link?.target === '_blank' && (
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
					<div className='item'>
						<img
							src='https://files.hisense-usa.com/storage/hisense/asset/images/6649b05ee00926.webp'
							alt='s'
							width={'100%'}
							className='image'
						/>
						<div className='content'>
							<h4 className='title'>Dishwasher</h4>
							<img
								src='https://files.hisense-usa.com/storage/hisense/asset/images/6636b52ac784b0.webp'
								alt='s'
								width={'50%'}
								className='logo'
							/>
							<div>
								<h5
									className='subtitle'
									dangerouslySetInnerHTML={{
										__html:
											'<p>Incredibly quiet and tough on <u> dirty dishes</u></p>'
									}}></h5>
								<Link
									target={
										structure?.link?.target ? structure?.link?.target : '_self'
									}
									href={structure?.link?.value ? structure?.link?.value : '/'}>
									<a
										target={
											structure?.link?.target
												? structure?.link?.target
												: '_self'
										}
										style={{ width: '150px' }}
										className='black text-nowrap n-btn d-block mx-auto  '>
										{/* {structure?.link?.title} */}
										Shop now
										{structure?.link?.target === '_blank' && (
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
				</div>
			</div>
		</section>
	)
}

export default HomeAppliancesCardsBox
