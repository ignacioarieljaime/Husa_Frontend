import CustomImage from 'components/common/CustomImage'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

const CesCards = ({ data }) => {
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(data?.structure)
	}, [data])

	return (
		<section>
			<div className='ces_cards'>
				<div className='custom_container'>
					<div
						className='title'
						dangerouslySetInnerHTML={{ __html: content?.title?.value }}></div>
					<div className='row justify-content-between align-items-center boxes px-3'>
						{content?.block1?.value?.status?.value === 'active' ? (
							<div className='col-12 px-0'>
								<div
									className='tv-item full-size'
									style={{
										backgroundImage: `url(${content?.block1?.value?.backgroundImage?.src})`
									}}>
									<div className='content'>
										<img
											src={content?.block1?.value?.image1?.src}
											alt={content?.block1?.value?.image1?.alt}
											className='logo'
										/>
										<img
											src={content?.block1?.value?.image2?.src}
											alt={content?.block1?.value?.image2?.alt}
											className='image'
										/>
										<div
											className={`title ${
												content?.block1?.value?.theme?.value === 'light'
													? 'text-white'
													: ''
											}`}
											dangerouslySetInnerHTML={{
												__html: content?.block1?.value?.title?.value
											}}></div>
										{content?.block1?.value?.link?.value ? (
											<Link
												target={
													content?.block1?.value?.link?.target
														? content?.block1?.value?.link?.target
														: '_self'
												}
												href={content?.block1?.value?.link?.value}>
												<a
													target={
														content?.block1?.value?.link?.target
															? content?.block1?.value?.link?.target
															: '_self'
													}
													className={`n-btn p-4 transparent text-nowrap d-block w-fit ${
														content?.block1?.value?.theme?.value === 'light'
															? 'outline-white'
															: 'outline-black'
													}`}>
													{content?.block1?.value?.link?.title}

													{content?.block1?.value?.link?.target ===
														'_blank' && (
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
						) : null}
						{content?.block2?.value?.status?.value === 'active' ? (
							<div className='col-12 px-0'>
								<div
									className='tv-item full-size block2'
									style={{
										backgroundImage: `url(${content?.block2?.value?.backgroundImage?.src})`
									}}>
									<div className='content'>
										<div
											className={`title ${
												content?.block2?.value?.theme?.value === 'light'
													? 'text-white'
													: ''
											}`}
											dangerouslySetInnerHTML={{
												__html: content?.block2?.value?.title?.value
											}}></div>
										{content?.block2?.value?.link?.value ? (
											<Link
												target={
													content?.block2?.value?.link?.target
														? content?.block2?.value?.link?.target
														: '_self'
												}
												href={content?.block2?.value?.link?.value}>
												<a
													target={
														content?.block2?.value?.link?.target
															? content?.block2?.value?.link?.target
															: '_self'
													}
													className={`n-btn p-4 transparent text-nowrap d-block w-fit ms-auto ${
														content?.block2?.value?.theme?.value === 'light'
															? 'outline-white'
															: 'outline-black'
													}`}>
													{content?.block2?.value?.link?.title}
													{content?.block2?.value?.link?.target ===
														'_blank' && (
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
						) : null}
						{content?.list?.value.map((item, index) => (
							<div
								key={index}
								className={`box flex-column d-flex col-12 col-md-6`}>
								<div className='box-background'>
									<CustomImage
										src={item?.backgroundImage?.src}
										alt={item?.backgroundImage?.alt}
										wrapperHeight='100%'
										wrapperWidth='100%'
									/>
									<div className='box-background-shade'></div>
								</div>
								<div className='box-content'>
									<div className='d-flex justify-content-between align-items-center w-100'>
										{item?.image?.src && (
											<img
												src={item?.image?.src}
												alt={item?.image?.alt}
												width='100%'
												className='mb-5 mb-md-7'
											/>
										)}
										<h3
											className={`mb-3 mb-md-0 title ${
												item?.theme?.value === 'light' ? 'text-white' : ''
											}`}>
											{item?.title?.value}
										</h3>
										{item?.link?.title && item?.link?.value ? (
											<Link
												target={
													item?.link?.target ? item?.link?.target : '_self'
												}
												href={item?.link?.value ? item?.link?.value : '/'}>
												<a
													target={
														item?.link?.target ? item?.link?.target : '_self'
													}
													className={`n-btn p-4 transparent text-nowrap d-block w-fit ${
														item?.theme?.value === 'light'
															? 'outline-white'
															: 'outline-black'
													}`}>
													{item?.link?.title}
													{item?.link?.target === '_blank' && (
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
						))}
						{content?.block3?.value?.status?.value === 'active' ? (
							<div className='col-12 px-0'>
								<div
									className='tv-item full-size'
									style={{
										backgroundImage: `url(${content?.block3?.value?.backgroundImage?.src})`
									}}>
									<div className='content'>
										<img
											src={content?.block3?.value?.image1?.src}
											alt={content?.block3?.value?.image1?.alt}
											className='logo'
										/>
										<img
											src={content?.block3?.value?.image2?.src}
											alt={content?.block3?.value?.image2?.alt}
											className='image'
										/>
										<div
											className={`title ${
												content?.block3?.value?.theme?.value === 'light'
													? 'text-white'
													: ''
											}`}
											dangerouslySetInnerHTML={{
												__html: content?.block3?.value?.title?.value
											}}></div>
										{content?.block3?.value?.link?.value ? (
											<Link
												target={
													content?.block3?.value?.link?.target
														? content?.block3?.value?.link?.target
														: '_self'
												}
												href={content?.block3?.value?.link?.value}>
												<a
													target={
														content?.block3?.value?.link?.target
															? content?.block3?.value?.link?.target
															: '_self'
													}
													className={`n-btn p-4 transparent text-nowrap d-block w-fit ${
														content?.block3?.value?.theme?.value === 'light'
															? 'outline-white'
															: 'outline-black'
													}`}>
													{content?.block3?.value?.link?.title}
													{content?.block3?.value?.link?.target ===
														'_blank' && (
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
						) : null}
					</div>
				</div>
			</div>
		</section>
	)
}

export default CesCards
