import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

const CesTexBlock1 = ({ data }) => {
	const [content, setContent] = useState({ data })

	useEffect(() => {
		setContent(data?.structure)
	}, [])

	return (
		<section>
			<div className='container pt-10 ces_news'>
				<div className='row mb-6'>
					<div className='col-12 col-md-5'>
						<img
							src={content?.image?.src}
							alt={content?.image?.alt}
							width='100%'
						/>
					</div>
					<div className='col-12 col-md-7'>
						<h2 className='fs-1 fw-bolder-700'>{content?.title?.value}</h2>
						<h4 className='fs-3 fw-bolder-700'>{content?.subtitle?.value}</h4>
						<div
							className='description'
							dangerouslySetInnerHTML={{
								__html: content?.description?.value
							}}></div>
						{content?.link?.value ? (
							<Link
								target={content?.link?.target ? content?.link?.target : '_self'}
								href={content?.link?.value}>
								<a
									target={
										content?.link?.target ? content?.link?.target : '_self'
									}
									className='fw-bold medium'
									style={{ color: '#00aaa6', textDecoration: 'none' }}>
									{content?.link?.title} {'>'}
									{content?.link?.target === '_blank' && (
										<img
											style={{ marginLeft: '10px' }}
											src={OpenPageOnNewTab.src}
										/>
									)}
								</a>
							</Link>
						) : null}
						<div className='row mt-10'>
							<div className='col-12 col-sm-6'>
								<div className='d-flex flex-column justify-content-between align-items-start h-100'>
									<h4 style={{ color: '#000' }} className='fs-5 fw-bolder-700'>
										{content?.specs?.value}
									</h4>
									<ul>
										{content?.list?.value.map((item, index) => {
											if (
												index <
												Math.ceil(content?.list?.value.length / 2) - 1
											)
												return <li key={index}>{item?.title?.value}</li>
										})}
									</ul>
								</div>
							</div>
							<div className='col-12 col-sm-6'>
								<ul>
									{content?.list?.value.map((item, index) => {
										if (index >= Math.ceil(content?.list?.value.length / 2) - 1)
											return <li key={index}>{item?.title?.value}</li>
									})}
								</ul>
							</div>
							{content?.productLink?.value ? (
								<Link
									target={
										content?.productLink?.target
											? content?.productLink?.target
											: '_self'
									}
									href={content?.productLink?.value}>
									<a
										target={
											content?.productLink?.target
												? content?.productLink?.target
												: '_self'
										}
										className='fw-bolder-700 fs-6 mt-4 medium'
										style={{ color: '#00aaa6', textDecoration: 'none' }}>
										{content?.productLink?.title} {'>'}
										{content?.productLink?.target === '_blank' && (
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
		</section>
	)
}
export default CesTexBlock1
