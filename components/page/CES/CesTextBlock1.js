import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

const CesTexBlock1 = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState()
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])

	return (
		<section>
			<div className='container pt-10 ces_news'>
				<div className='row mb-6'>
					<div className='col-12 col-md-5'>
						<img
							src={structure?.image?.src}
							alt={structure?.image?.alt}
							width='100%'
						/>
					</div>
					<div className='col-12 col-md-7'>
						<h2 className='fs-1 fw-bolder-700'>{structure?.title?.value}</h2>
						<h4 className='fs-3 fw-bolder-700'>{structure?.subtitle?.value}</h4>
						<div
							className='description'
							dangerouslySetInnerHTML={{
								__html: structure?.description?.value
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
									className='fw-bold medium'
									style={{ color: '#00aaa6', textDecoration: 'none' }}>
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
						<div className='row mt-10'>
							<div className='col-12 col-sm-6'>
								<div className='d-flex flex-column justify-content-between align-items-start h-100'>
									<h4 style={{ color: '#000' }} className='fs-5 fw-bolder-700'>
										{structure?.specs?.value}
									</h4>
									<ul>
										{structure?.list?.value.map((item, index) => {
											if (
												index <
												Math.ceil(structure?.list?.value.length / 2) - 1
											)
												return <li key={index}>{item?.title?.value}</li>
										})}
									</ul>
								</div>
							</div>
							<div className='col-12 col-sm-6'>
								<ul>
									{structure?.list?.value.map((item, index) => {
										if (
											index >=
											Math.ceil(structure?.list?.value.length / 2) - 1
										)
											return <li key={index}>{item?.title?.value}</li>
									})}
								</ul>
							</div>
							{structure?.productLink?.value ? (
								<Link
									target={
										structure?.productLink?.target
											? structure?.productLink?.target
											: '_self'
									}
									href={structure?.productLink?.value}>
									<a
										target={
											structure?.productLink?.target
												? structure?.productLink?.target
												: '_self'
										}
										className='fw-bolder-700 fs-6 mt-4 medium'
										style={{ color: '#00aaa6', textDecoration: 'none' }}>
										{structure?.productLink?.title} {'>'}
										{structure?.productLink?.target === '_blank' && (
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
