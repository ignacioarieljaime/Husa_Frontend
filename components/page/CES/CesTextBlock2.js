import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

const CesTexBlock2 = ({ data }) => {
	const { structure } = data

	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])

	return (
		<section>
			<div className='ces_cards text_block_2'>
				<div className='custom_container text-center'>
					<div className='title large' style={{ marginBottom: '150px' }}>
						<div
							dangerouslySetInnerHTML={{
								__html: structure?.title?.value
							}}></div>
					</div>
					<div className='row align-items-start flex-wrap flex-md-nowrap'>
						<div className='col-12 col-md-7 text-start mb-10 mb-md-0'>
							<h3 className='fw-bolder-700 text-white mb-13	'>
								<span className='fs-2hx '>{structure?.subtitle?.value}</span>
							</h3>
							<div
								className='description mb-10'
								dangerouslySetInnerHTML={{
									__html: structure?.description?.value
								}}></div>
							{structure?.link2?.value ? (
								<Link
									target={
										structure?.link2?.target
											? structure?.link2?.target
											: '_self'
									}
									href={structure?.link2?.value}>
									<a
										target={
											structure?.link2?.target
												? structure?.link2?.target
												: '_self'
										}
										className='n-btn primary-text medium primary-hover'>
										{structure?.link2?.title} {'>'}
										{structure?.link2?.target === '_blank' && (
											<img
												style={{ marginLeft: '10px' }}
												src={OpenPageOnNewTab.src}
											/>
										)}
									</a>
								</Link>
							) : null}
						</div>
						<div className='col-12 col-md-5 text-start'>
							<h5 className='text-white fs-2 mb-10'>
								<span>{structure?.specs?.value}</span>
							</h5>
							<ul style={{ lineHeight: '27px' }}>
								{structure?.list?.value.map((item, index) => (
									<li
										key={index}
										style={{ fontSize: '18px' }}
										className='text-white'>
										{item?.title?.value}
									</li>
								))}
							</ul>
							{structure?.link1?.value ? (
								<Link
									target={
										structure?.link1?.target
											? structure?.link1?.target
											: '_self'
									}
									href={structure?.link1?.value}>
									<a
										target={
											structure?.link1?.target
												? structure?.link1?.target
												: '_self'
										}
										className='n-btn primary-text medium primary-hover text-decoration-none'>
										{structure?.link1?.title} {'>'}
										{structure?.link1?.target === '_blank' && (
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
export default CesTexBlock2
