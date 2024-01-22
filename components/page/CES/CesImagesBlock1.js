import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

const CesImagesBlock1 = ({ data }) => {
	const { structure } = data

	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])

	return (
		<section className='w-100'>
			<div className='ces_cards px-3 pt-3 pb-12'>
				<div className='custom_container'>
					{structure?.blockTitle?.value ? (
						<div className='title'>
							<h2
								dangerouslySetInnerHTML={{
									__html: structure?.blockTitle?.value
								}}></h2>
						</div>
					) : null}
					<div className='row justify-content-center align-items-center boxes px-3'>
						<div
							className='box middle-type flex-column d-flex col-12 col-md-6'
							style={{ paddingTop: '40%' }}>
							<div className='box-background'>
								<img
									src={structure?.image1?.src}
									alt={structure?.image1?.alt}
									width='100%'
									height='100%'
								/>
							</div>
							<div className='box-content'>
								<div className='d-flex flex-column justify-content-between align-items-center w-100'>
									<h3 className='text-white mb-3 mb-md-8 title fs-2'>
										{structure?.title1?.value}
									</h3>
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
												className='outline-white n-btn medium text-nowrap transparent d-block w-fit '>
												{structure?.link1?.title}
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
						<div
							className='box middle-type flex-column d-flex col-12 col-md-6'
							style={{ paddingTop: '40%' }}>
							<div className='box-background'>
								<img
									src={structure?.image2?.src}
									alt={structure?.image2?.alt}
									width='100%'
									height='100%'
								/>
							</div>
							<div className='box-content'>
								<div className='d-flex flex-column justify-content-between align-items-center w-100'>
									<h3 className='text-white mb-3 mb-md-8 title fs-2'>
										{structure?.title2?.value}
									</h3>
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
												className='n-btn transparent medium text-nowrap d-block w-fit outline-white '>
												{structure?.link2?.title}
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default CesImagesBlock1
