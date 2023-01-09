import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const CESTexBlock1 = ({ data }) => {
	const [content, setContent] = useState({ data })

	useEffect(() => {
		setContent(data?.structure)
	}, [])

	return (
		<section>
			<div className='container pt-10'>
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
							dangerouslySetInnerHTML={{
								__html: content?.description?.value
							}}></div>
						{content?.link?.value ? (
							<Link href={content?.link?.value}>
								<a
									className='fw-bold'
									style={{ color: '#00aaa6', textDecoration: 'none' }}>
									{content?.link?.title} {'>'}
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
								<Link href={content?.productLink?.value}>
									<a
										className='fw-bolder-700 fs-6 mt-4'
										style={{ color: '#00aaa6', textDecoration: 'none' }}>
										{content?.productLink?.title} {'>'}
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

export default CESTexBlock1
