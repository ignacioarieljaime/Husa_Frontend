import CustomImage from 'components/common/CustomImage'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
const CesEventsBlock = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState({ data })

	// useEffect(() => {
	// 	setContent(structure)
	// }, [])

	return (
		<section>
			<div className='py-10 ces_events'>
				<article
					className='article mx-auto px-3'
					style={{ maxWidth: '1000px' }}>
					<CustomImage
						src={structure?.image?.src}
						alt={structure?.image?.alt}
						wrapperWidth={'120px'}
						wrapperHeight={'120px'}
					/>
					<h2
						className='mb-2'
						dangerouslySetInnerHTML={{
							__html: structure?.title?.value
						}}></h2>
					{structure?.description?.value ? (
						<div
							className='text-black'
							style={{ fontSize: '20px' }}
							dangerouslySetInnerHTML={{
								__html: structure?.description?.value
							}}></div>
					) : null}
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
								className='n-btn medium black-text d-block w-fit p-0'>
								{structure?.link?.title} {'>'}
								{structure?.link?.target === '_blank' && (
									<img
										style={{ marginLeft: '10px' }}
										src={OpenPageOnNewTab.src}
									/>
								)}
							</a>
						</Link>
					) : null}
				</article>
			</div>
		</section>
	)
}
export default CesEventsBlock
