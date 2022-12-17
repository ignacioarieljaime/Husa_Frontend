import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const TelevisionsBlockBanner = ({ data }) => {
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(data?.structure)
	}, [])
	return (
		<section>
			<div className='televisions-banner'>
				<img
					src={content?.image?.src}
					alt={content?.image?.alt}
					className='image'
				/>
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
						<Link href={content?.link?.value}>
							<a className='n-btn outline-white transparent d-block w-fit'>
								{content?.link?.title}
							</a>
						</Link>
					) : null}
				</div>
			</div>
		</section>
	)
}

export default TelevisionsBlockBanner
