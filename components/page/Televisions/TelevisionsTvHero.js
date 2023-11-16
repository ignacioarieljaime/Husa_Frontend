import { alt } from 'joi'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
const TelevisionsTvHero = ({ data }) => {
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(data?.structure)
	}, [])
	return (
		<section>
			<div className='televisions-tv-hero'>
				<div className='container televisions_container'>
					<div className='header-content'>
						<div
							data-aos='fade'
							data-aos-delay='500'
							data-aos-duration='1000'
							className='title gradient-text mb-8'
							dangerouslySetInnerHTML={{
								__html: content?.title?.value
							}}></div>
						<div
							className='subtitle mb-3 mb-md-7'
							dangerouslySetInnerHTML={{
								__html: content?.subtitle?.value
							}}></div>
					</div>
					<div className='row justify-content-center align-items-center'>
						{content?.fullSizeCard?.value?.backgroundImage?.src ? (
							<div className='col-12 py-3'>
								<Link
									target={
										content?.fullSizeCard?.value?.link?.target
											? content?.fullSizeCard?.value?.link?.target
											: '_self'
									}
									href={content?.fullSizeCard?.value?.link?.value}>
									<a className='box-group-link'>
								<div
									className='tv-item full-size'
									style={{
										backgroundImage: `url(${content?.fullSizeCard?.value?.backgroundImage?.src})`
									}}>

												<img
													src={content?.fullSizeCard?.value?.badge?.src}
													alt={content?.fullSizeCard?.value?.badge?.alt}
													className='badge'
												/>
											<div className='content'>
												<img
													src={content?.fullSizeCard?.value?.titleImage?.src}
													alt={content?.fullSizeCard?.value?.titleImage?.alt}
													className='image'
												/>
												<div
													className={`title ${
														content?.fullSizeCard?.value?.theme?.value === 'light'
															? 'text-white'
															: ''
													}`}
													dangerouslySetInnerHTML={{
														__html: content?.fullSizeCard?.value?.title?.value
													}}></div>
												{content?.fullSizeCard?.value?.link?.value ? (
													<Link
														target={
															content?.fullSizeCard?.value?.link?.target
																? content?.fullSizeCard?.value?.link?.target
																: '_self'
														}
														href={content?.fullSizeCard?.value?.link?.value}>
														<a
															target={
																content?.fullSizeCard?.value?.link?.target
																	? content?.fullSizeCard?.value?.link?.target
																	: '_self'
															}
															className={`n-btn transparent medium d-block w-fit ${
																content?.fullSizeCard?.value?.theme?.value ===
																'light'
																	? 'outline-white'
																	: 'outline-black'
															}`}>
															{content?.fullSizeCard?.value?.link?.title}

															{content?.fullSizeCard?.value?.link?.target ===
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
								</a>
								</Link>
							</div>
						) : null}
						{content?.coloredCardsList?.value.map((item, index) =>
							item?.backgroundColor?.value &&
							item?.image?.src &&
							item?.link?.value &&
							item?.title?.value ? (
								<div className='col-12 col-lg-6 py-3' key={index}>
									<div
										className='tv-item colored-bg'
										style={{
											backgroundColor: item?.backgroundColor?.value
										}}>
											<Link
												target={
													item?.link?.target ? item?.link?.target : '_self'
												}
												href={item?.link?.value}>
												<a className='box-group-link'>
												<div className='content'>
													<img
														src={item?.image?.src}
														alt={item?.image?.alt}
														className='image'
													/>
													<div>
														<div
															className={`title ${
																item?.theme?.value === 'light' ? 'text-white' : ''
															}`}
															dangerouslySetInnerHTML={{
																__html: item?.title?.value
															}}></div>
														{item?.link?.value ? (
															<Link
																target={
																	item?.link?.target ? item?.link?.target : '_self'
																}
																href={item?.link?.value}>
																<a
																	target={
																		item?.link?.target
																			? item?.link?.target
																			: '_self'
																	}
																	className={`n-btn transparent medium d-block w-fit ${
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
												</a>
											</Link>
									</div>
								</div>
							) : null
						)}
						{content?.noBgCard?.value?.titleImage?.src &&
						content?.noBgCard?.value?.title?.value &&
						content?.noBgCard?.value?.link?.value ? (
							<div className='col-12 col-lg-6 py-3'>
								<div className='tv-item no-bg'>
									<img
										src={content?.noBgCard?.value?.logoImage?.src}
										alt={content?.noBgCard?.value?.logoImage?.alt}
										className='logo'
									/>
									<img
										src={content?.noBgCard?.value?.titleImage?.src}
										alt={content?.noBgCard?.value?.titleImage?.alt}
										className='image'
									/>
									<div
										className='title'
										dangerouslySetInnerHTML={{
											__html: content?.noBgCard?.value?.title?.value
										}}></div>
									{content?.noBgCard?.value?.link?.value ? (
										<Link
											target={
												content?.noBgCard?.value?.link?.target
													? content?.noBgCard?.value?.link?.target
													: '_self'
											}
											href={content?.noBgCard?.value?.link?.value}>
											<a
												target={
													content?.noBgCard?.value?.link?.target
														? content?.noBgCard?.value?.link?.target
														: '_self'
												}
												className='n-btn outline-white transparent medium d-block w-fit'>
												{content?.noBgCard?.value?.link?.title}
												{content?.noBgCard?.value?.link?.target ===
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
						) : null}
						{content?.simpleCard?.value?.image?.src ? (
							<div className='col-12 col-lg-6 py-3'>
								<div
									className='tv-item simple'
									style={{
										backgroundImage: `url(${content?.simpleCard?.value?.image?.src})`
									}}></div>
							</div>
						) : null}
						{content?.bottomCard?.value?.backgroundImage?.src ? (
							<div className='col-12 py-3'>
								<Link
									target={
										content?.bottomCard?.value?.link?.target
											? content?.bottomCard?.value?.link?.target
											: '_self'
									}
									href={content?.bottomCard?.value?.link?.value}>
								<a className='box-group-link'>
								<div
									className='tv-item full-size'
									style={{
										backgroundImage: `url(${content?.bottomCard?.value?.backgroundImage?.src})`
									}}>

										<img
											src={content?.bottomCard?.value?.badge?.src}
											alt={content?.bottomCard?.value?.badge?.alt}
											className='badge'
										/>
										<div className='content'>
											<img
												src={content?.bottomCard?.value?.titleImage?.src}
												alt={content?.bottomCard?.value?.titleImage?.alt}
												className='image'
											/>
											<div
												className={`title ${
													content?.bottomCard?.value?.theme?.value === 'light'
														? 'text-white'
														: ''
												}`}
												dangerouslySetInnerHTML={{
													__html: content?.bottomCard?.value?.title?.value
												}}></div>
											{content?.bottomCard?.value?.link?.value ? (
												<Link
													target={
														content?.bottomCard?.value?.link?.target
															? content?.bottomCard?.value?.link?.target
															: '_self'
													}
													href={content?.bottomCard?.value?.link?.value}>
													<a
														target={
															content?.bottomCard?.value?.link?.target
																? content?.bottomCard?.value?.link?.target
																: '_self'
														}
														className={`n-btn transparent medium d-block w-fit ${
															content?.bottomCard?.value?.theme?.value === 'light'
																? 'outline-white'
																: 'outline-black'
														}`}>
														{content?.bottomCard?.value?.link?.title}

														{content?.bottomCard?.value?.link?.target ===
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
								</a>
								</Link>
							</div>
						) : null}
						
					</div>
				</div>
			</div>
		</section>
	)
}

export default TelevisionsTvHero
