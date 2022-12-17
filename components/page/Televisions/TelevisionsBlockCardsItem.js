import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const TelevisionsBlockCardsItem = ({ data }) => {
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(data)
	}, [])
	return (
		<div className='col-12 col-lg-6 py-3'>
			<div className='card-item'>
				{data?.backgroundImage?.src ? (
					<img
						src={content?.backgroundImage?.src}
						alt={content?.backgroundImage?.alt}
						className='background-image'
					/>
				) : null}
				<div className='content'>
					<div
						className='title'
						dangerouslySetInnerHTML={{ __html: content?.title?.value }}></div>
					{content?.image?.src ? (
						<img
							src={content?.image?.src}
							alt={content?.image?.alt}
							className='image'
						/>
					) : null}
					<div>
						<div
							className='subtitle'
							dangerouslySetInnerHTML={{
								__html: content?.subtitle?.value
							}}></div>
						{content?.link?.value ? (
							<Link href={content?.link?.value}>
								<a className='n-btn outline-white transparent d-block w-fit mx-auto'>
									{content?.link?.title}
								</a>
							</Link>
						) : null}
					</div>
				</div>
			</div>
		</div>
	)
}

export default TelevisionsBlockCardsItem
