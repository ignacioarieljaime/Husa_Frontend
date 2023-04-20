import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
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
							<Link
								target={content?.link?.target ? content?.link?.target : '_self'}
								href={content?.link?.value}>
								<a
									target={
										content?.link?.target ? content?.link?.target : '_self'
									}
									className='n-btn outline-white transparent d-block w-fit mx-auto'>
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
			</div>
		</div>
	)
}

export default TelevisionsBlockCardsItem
