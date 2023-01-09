import CustomImage from 'components/common/CustomImage'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const CESEventsBlock = ({ data }) => {
	const [content, setContent] = useState({ data })

	useEffect(() => {
		setContent(data?.structure)
	}, [])

	return (
		<section>
			<div className='py-10 ces_events'>
				<article
					className='article mx-auto px-3'
					style={{ maxWidth: '1000px' }}>
					<CustomImage
						src={content?.image?.src}
						alt={content?.image?.alt}
						wrapperWidth={'120px'}
						wrapperHeight={'120px'}
					/>
					<h2
						className='mb-2'
						dangerouslySetInnerHTML={{
							__html: content?.title?.value
						}}></h2>
					{content?.description?.value ? (
						<div
							className='text-black'
							style={{ fontSize: '20px' }}
							dangerouslySetInnerHTML={{
								__html: content?.description?.value
							}}></div>
					) : null}
					{content?.link?.value ? (
						<Link href={content?.link?.value}>
							<a className='n-btn black-text d-block w-fit p-0'>
								{content?.link?.title} {'>'}
							</a>
						</Link>
					) : null}
				</article>
			</div>
		</section>
	)
}

export default CESEventsBlock
