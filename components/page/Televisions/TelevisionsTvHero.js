import { alt } from 'joi'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
const TelevisionsTvHero = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])
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
								__html: structure?.title?.value
							}}></div>
						<div
							className='subtitle mb-3 mb-md-7'
							dangerouslySetInnerHTML={{
								__html: structure?.subtitle?.value
							}}></div>
					</div>
					<div className='row justify-content-center align-items-center'>
						{structure?.fullSizeCard?.value?.backgroundImage?.src ? (
							<div className='col-12 py-3'>
								<Link
									target={
										structure?.fullSizeCard?.value?.link?.target
											? structure?.fullSizeCard?.value?.link?.target
											: '_self'
									}
									href={structure?.fullSizeCard?.value?.link?.value}>
									<a className='box-group-link'>
										<div
											className='tv-item full-size'
											style={{
												backgroundImage: `url(${structure?.fullSizeCard?.value?.backgroundImage?.src})`
											}}>
											<img
												src={structure?.fullSizeCard?.value?.badge?.src}
												alt={structure?.fullSizeCard?.value?.badge?.alt}
												className='badge'
											/>
											<div className='content'>
												<img
													src={structure?.fullSizeCard?.value?.titleImage?.src}
													alt={structure?.fullSizeCard?.value?.titleImage?.alt}
													className='image'
												/>
												<div
													className={`title ${
														structure?.fullSizeCard?.value?.theme?.value ===
														'light'
															? 'text-white'
															: ''
													}`}
													dangerouslySetInnerHTML={{
														__html: structure?.fullSizeCard?.value?.title?.value
													}}></div>
												{structure?.fullSizeCard?.value?.link?.value ? (
													<Link
														target={
															structure?.fullSizeCard?.value?.link?.target
																? structure?.fullSizeCard?.value?.link?.target
																: '_self'
														}
														href={structure?.fullSizeCard?.value?.link?.value}>
														<a
															target={
																structure?.fullSizeCard?.value?.link?.target
																	? structure?.fullSizeCard?.value?.link?.target
																	: '_self'
															}
															className={`n-btn transparent medium d-block w-fit ${
																structure?.fullSizeCard?.value?.theme?.value ===
																'light'
																	? 'outline-white'
																	: 'outline-black'
															}`}>
															{structure?.fullSizeCard?.value?.link?.title}

															{structure?.fullSizeCard?.value?.link?.target ===
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
						{structure?.coloredCardsList?.value.map((item, index) =>
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
											target={item?.link?.target ? item?.link?.target : '_self'}
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
																item?.theme?.value === 'light'
																	? 'text-white'
																	: ''
															}`}
															dangerouslySetInnerHTML={{
																__html: item?.title?.value
															}}></div>
														{item?.link?.value ? (
															<Link
																target={
																	item?.link?.target
																		? item?.link?.target
																		: '_self'
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
						{structure?.noBgCard?.value?.titleImage?.src &&
						structure?.noBgCard?.value?.title?.value &&
						structure?.noBgCard?.value?.link?.value ? (
							<div className='col-12 col-lg-6 py-3'>
								<div className='tv-item no-bg'>
									<img
										src={structure?.noBgCard?.value?.logoImage?.src}
										alt={structure?.noBgCard?.value?.logoImage?.alt}
										className='logo'
									/>
									<img
										src={structure?.noBgCard?.value?.titleImage?.src}
										alt={structure?.noBgCard?.value?.titleImage?.alt}
										className='image'
									/>
									<div
										className='title'
										dangerouslySetInnerHTML={{
											__html: structure?.noBgCard?.value?.title?.value
										}}></div>
									{structure?.noBgCard?.value?.link?.value ? (
										<Link
											target={
												structure?.noBgCard?.value?.link?.target
													? structure?.noBgCard?.value?.link?.target
													: '_self'
											}
											href={structure?.noBgCard?.value?.link?.value}>
											<a
												target={
													structure?.noBgCard?.value?.link?.target
														? structure?.noBgCard?.value?.link?.target
														: '_self'
												}
												className='n-btn outline-white transparent medium d-block w-fit'>
												{structure?.noBgCard?.value?.link?.title}
												{structure?.noBgCard?.value?.link?.target ===
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
						{structure?.simpleCard?.value?.image?.src ? (
							<div className='col-12 col-lg-6 py-3'>
								<div
									className='tv-item simple'
									style={{
										backgroundImage: `url(${structure?.simpleCard?.value?.image?.src})`
									}}></div>
							</div>
						) : null}
						{structure?.bottomCard?.value?.backgroundImage?.src ? (
							<div className='col-12 py-3'>
								<Link
									target={
										structure?.bottomCard?.value?.link?.target
											? structure?.bottomCard?.value?.link?.target
											: '_self'
									}
									href={structure?.bottomCard?.value?.link?.value}>
									<a className='box-group-link'>
										<div
											className='tv-item full-size'
											style={{
												backgroundImage: `url(${structure?.bottomCard?.value?.backgroundImage?.src})`
											}}>
											<img
												src={structure?.bottomCard?.value?.badge?.src}
												alt={structure?.bottomCard?.value?.badge?.alt}
												className='badge'
											/>
											<div className='content'>
												<img
													src={structure?.bottomCard?.value?.titleImage?.src}
													alt={structure?.bottomCard?.value?.titleImage?.alt}
													className='image'
												/>
												<div
													className={`title ${
														structure?.bottomCard?.value?.theme?.value ===
														'light'
															? 'text-white'
															: ''
													}`}
													dangerouslySetInnerHTML={{
														__html: structure?.bottomCard?.value?.title?.value
													}}></div>
												{structure?.bottomCard?.value?.link?.value ? (
													<Link
														target={
															structure?.bottomCard?.value?.link?.target
																? structure?.bottomCard?.value?.link?.target
																: '_self'
														}
														href={structure?.bottomCard?.value?.link?.value}>
														<a
															target={
																structure?.bottomCard?.value?.link?.target
																	? structure?.bottomCard?.value?.link?.target
																	: '_self'
															}
															className={`n-btn transparent medium d-block w-fit ${
																structure?.bottomCard?.value?.theme?.value ===
																'light'
																	? 'outline-white'
																	: 'outline-black'
															}`}>
															{structure?.bottomCard?.value?.link?.title}

															{structure?.bottomCard?.value?.link?.target ===
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
