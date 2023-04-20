import Link from 'next/link'
import React from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
const TelevisionsBlockSpotlightItem = ({ data }) => {
	return (
		<div className='col-12 col-sm-6 col-lg-3 televisions-spotlight-item'>
			<img src={data?.image?.src} alt={data?.image?.alt} className='image' />
			<div className='content'>
				<h4>{data?.title?.value}</h4>
				<div dangerouslySetInnerHTML={{ __html: data?.text?.value }}></div>
				{data?.link?.value ? (
					<Link
						target={data?.link?.target ? data?.link?.target : '_self'}
						href={data?.link?.value}>
						<a
							target={data?.link?.target ? data?.link?.target : '_self'}
							className='n-btn outline-white transparent d-block w-fit mx-auto'>
							{data?.link?.title}
							{data?.link?.target === '_blank' && (
								<img
									style={{ marginLeft: '10px' }}
									src={OpenPageOnNewTab.src}
								/>
							)}
						</a>
					</Link>
				) : null}
			</div>
		</div>
	)
}

export default TelevisionsBlockSpotlightItem
