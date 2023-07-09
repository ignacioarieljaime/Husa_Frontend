import Link from 'next/link'
import React from 'react'

const HomeAppliancesSingleCardBanner = ({ data }) => {
	const structure = {}

	return (
		<section>
			<div className='ha_single_cards_box text-center'>
				<div className='card text-center'>
					<img
						src='https://files.hisense-usa.com/storage/hisense/asset/images/6649b05ee00926.webp'
						alt='s'
						width={'160'}
						height={'210'}
						className='little_img'
					/>
					<h2
						className='title'
						dangerouslySetInnerHTML={{
							__html:
								'<p>Buy with confidence with an industry leading <u>2-Year Warranty</u> on Parts & Labor*</p>'
						}}></h2>
				</div>
				<img
					src='https://files.hisense-usa.com/storage/hisense/pim/images/126390396d5fb40.png'
					alt='s'
					width={'90%'}
					className='image'
				/>
				<Link
					target={structure?.link?.target ? structure?.link?.target : '_self'}
					href={structure?.link?.value ? structure?.link?.value : '/'}>
					<a
						target={structure?.link?.target ? structure?.link?.target : '_self'}
						style={{ width: '150px' }}
						className='black text-nowrap n-btn d-block mx-auto link_btn'>
						{/* {structure?.link?.title} */}
						Shop now
						{structure?.link?.target === '_blank' && (
							<img style={{ marginLeft: '10px' }} src={OpenPageOnNewTab.src} />
						)}
					</a>
				</Link>
			</div>
		</section>
	)
}

export default HomeAppliancesSingleCardBanner
