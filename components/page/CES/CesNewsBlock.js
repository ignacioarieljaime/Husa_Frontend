import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
const CesNewsBlock = ({ data }) => {
	const { structure } = data

	// const [content, setContent] = useState({ data })
	// useEffect(() => {
	// 	setContent(data?.structure)
	// }, [])

	return (
		<section>
			<div className='ces_news_container py-13'>
				<h2
					className='text-center mb-15'
					dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></h2>
				<div className='row align-items-center'>
					<div className='col-12 col-md-7 mb-6 mb-md-0'>
						<h4 className='fs-4 fw-bolder-700 mb-5 text-black'>
							{structure?.subtitle?.value}
						</h4>
						{structure?.list?.value.map(
							(item, index) =>
								item?.link?.value && (
									<Link
										target={item?.link?.target ? item?.link?.target : '_self'}
										key='index'
										href={item?.link?.value}>
										<a
											target={item?.link?.target ? item?.link?.target : '_self'}
											className='ces_links'>
											{item?.link?.title}
											{item?.link?.target === '_blank' && (
												<img
													style={{ marginLeft: '10px' }}
													src={OpenPageOnNewTab.src}
												/>
											)}
										</a>
									</Link>
								)
						)}
					</div>
					<div className='col-12 col-md-5'>
						<div className='ces_contact_box'>
							<h4 className='title'>{structure?.contact?.value} :</h4>
							<p className='fs-6 fw-light mb-0 text-black'>
								{structure?.secondLink?.value ? (
									<Link
										target={
											structure?.secondLink?.target
												? structure?.secondLink?.target
												: '_self'
										}
										href={structure?.secondLink?.value}>
										<a
											target={
												structure?.secondLink?.target
													? structure?.secondLink?.target
													: '_self'
											}
											className='me-1 link'>
											{structure?.secondLink?.title}
											{structure?.secondLink?.target === '_blank' && (
												<img
													style={{ marginLeft: '10px' }}
													src={OpenPageOnNewTab.src}
												/>
											)}
										</a>
									</Link>
								) : null}
								{structure?.text?.value}
							</p>
							<p className='fs-6 fw-light mb-0 text-black text-break'>
								{structure?.email?.value}
							</p>
							<h4 className='title'>{structure?.companyTitle?.value}</h4>
							<p className='address'>{structure?.address?.value}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default CesNewsBlock
