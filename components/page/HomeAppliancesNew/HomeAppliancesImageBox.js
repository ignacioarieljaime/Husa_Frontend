import Link from 'next/link'
import React from 'react'

const HomeAppliancesImageBox = ({ data }) => {
	const structure = {}
	return (
		<section>
			<div className='ha_image_box'>
				<div className='content'>
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
					<Link
						target={structure?.link?.target ? structure?.link?.target : '_self'}
						href={structure?.link?.value ? structure?.link?.value : '/'}>
						<a
							target={
								structure?.link?.target ? structure?.link?.target : '_self'
							}
							style={{ width: '150px' }}
							className='black text-nowrap n-btn d-block mx-auto mb-14 '>
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
					<img
						src='https://files.hisense-usa.com/storage/hisense/asset/images/6649b05ee00926.webp'
						alt='s'
						width={'100%'}
						className='image'
					/>
				</div>
			</div>
		</section>
	)
}

export default HomeAppliancesImageBox
