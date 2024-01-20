import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
const TelevisionsBlockCardsItem = ({ data }) => {
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(data)
	// }, [])
	return (
		<div className='col-12 col-lg-6 py-3'>
			<div className='card-item'>
				{data?.backgroundImage?.src ? (
					<img
						src={data?.backgroundImage?.src}
						alt={data?.backgroundImage?.alt}
						className='background-image'
					/>
				) : null}
				<div className='content'>
					<div
						className='title'
						dangerouslySetInnerHTML={{ __html: data?.title?.value }}></div>
					{data?.image?.src ? (
						<img
							src={data?.image?.src}
							alt={data?.image?.alt}
							className='image'
						/>
					) : null}
					<div>
						<div
							className='subtitle'
							dangerouslySetInnerHTML={{
								__html: data?.subtitle?.value
							}}></div>
						{data?.link?.value ? (
							<Link
								target={data?.link?.target ? data?.link?.target : '_self'}
								href={data?.link?.value}>
								<a
									target={data?.link?.target ? data?.link?.target : '_self'}
									className='n-btn outline-white transparent medium d-block mx-auto w-fit'>
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
			</div>
		</div>
	)
}

export default TelevisionsBlockCardsItem
