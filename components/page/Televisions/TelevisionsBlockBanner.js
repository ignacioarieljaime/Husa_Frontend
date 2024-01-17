import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
import { useWindowSize } from 'hooks/useWindowSize'
const TelevisionsBlockBanner = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState(null)
	const window = useWindowSize()
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])
	return (
		<section>
			<div className='televisions-banner'>
				{window[0] > 575 ? (
					<img
						src={structure?.image?.src}
						alt={structure?.image?.alt}
						className='image'
					/>
				) : (
					<img
						src={structure?.mobile?.src}
						alt={structure?.mobile?.alt}
						className='image'
					/>
				)}
				<div className='content'>
					<div
						className='title mb-3 mb-md-7'
						dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></div>
					<div
						className='subtitle mb-3 mb-md-7'
						dangerouslySetInnerHTML={{
							__html: structure?.subtitle?.value
						}}></div>
					{structure?.link?.value ? (
						<Link
							target={
								structure?.link?.target ? structure?.link?.target : '_self'
							}
							href={structure?.link?.value}>
							<a
								target={
									structure?.link?.target ? structure?.link?.target : '_self'
								}
								className='n-btn outline-white transparent medium d-block w-fit'>
								{structure?.link?.title}
								{structure?.link?.target === '_blank' && (
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
