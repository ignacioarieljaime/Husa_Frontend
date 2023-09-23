import Link from 'next/link'
import React from 'react'

const HomeAppliancesSingleCardBanner = ({ data }) => {
	const { structure } = data

	return (
		<section>
			<div className='ha_single_cards_box text-center'>
				<div className='card text-center'>
					<img
						src={structure?.badge?.src}
						alt={structure?.badge?.alt}
						width={'160'}
						height={'210'}
						className='little_img'
					/>
					<h2
						className='title'
						dangerouslySetInnerHTML={{
							__html: structure?.title?.value
						}}></h2>
				</div>
				<img
					src={structure?.image?.src}
					alt={structure?.image?.alt}
					width={'90%'}
					className='image'
				/>
				{structure?.link?.value && (
					<Link
						target={structure?.link?.target ? structure?.link?.target : '_self'}
						href={structure?.link?.value ? structure?.link?.value : '/'}>
						<a
							target={
								structure?.link?.target ? structure?.link?.target : '_self'
							}
							style={{ width: '150px' }}
							className='black text-nowrap n-btn d-block mx-auto link_btn medium'>
							{structure?.link?.title}
							{structure?.link?.target === '_blank' && (
								<img
									style={{ marginLeft: '10px' }}
									src={OpenPageOnNewTab.src}
								/>
							)}
						</a>
					</Link>
				)}
			</div>
		</section>
	)
}

export default HomeAppliancesSingleCardBanner
