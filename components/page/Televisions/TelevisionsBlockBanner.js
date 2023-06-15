import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
import { useWindowSize } from 'hooks/useWindowSize'
const TelevisionsBlockBanner = ({ data }) => {
	const [content, setContent] = useState(null)
	const window = useWindowSize()
	useEffect(() => {
		setContent(data?.structure)
	}, [])
	return (
		<section>
			<div className='televisions-banner'>
				{window[0] > 575 ? (
					<img
						src={content?.image?.src}
						alt={content?.image?.alt}
						className='image'
					/>
				) : (
					<img
						src={content?.mobile?.src}
						alt={content?.mobile?.alt}
						className='image'
					/>
				)}
				<div className='content'>
					<div
						className='title mb-3 mb-md-7'
						dangerouslySetInnerHTML={{ __html: content?.title?.value }}></div>
					<div
						className='subtitle mb-3 mb-md-7'
						dangerouslySetInnerHTML={{
							__html: content?.subtitle?.value
						}}></div>
					{content?.link?.value ? (
						<Link
							target={content?.link?.target ? content?.link?.target : '_self'}
							href={content?.link?.value}>
							<a
								target={content?.link?.target ? content?.link?.target : '_self'}
								className='n-btn outline-white transparent d-block w-fit'>
								{content?.link?.title}
								{content?.link?.target === '_blank' && (
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
		</section>
	)
}

export default TelevisionsBlockBanner
