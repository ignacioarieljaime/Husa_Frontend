import { alt } from 'joi'
import Link from 'next/link'
import React from 'react'

const TelevisionsTvHero = ({ data: { structure } }) => {
	return (
		<section>
			<div className='televisions-tv-hero'>
				<div className='container'>
					<div className='content'>
						<div
							className='title gradient-text mb-3 mb-md-7'
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
						<div className='col-12 py-3'>
							<div
								className='tv-item full-size'
								style={{
									backgroundImage: `url(${structure?.fullSizeCard?.backgroundImage?.src})`
								}}>
								<img
									src={structure?.fullSizeCard?.badge?.src}
									alt={structure?.fullSizeCard?.badge?.alt}
									className='badge'
								/>
								<div className='content'>
									<img
										src={structure?.fullSizeCard?.titleImage?.src}
										alt={structure?.fullSizeCard?.titleImage?.alt}
										className='image'
									/>
									<div
										className='title'
										dangerouslySetInnerHTML={{
											__html: structure?.fullSizeCard?.title?.value
										}}></div>
									{structure?.fullSizeCard?.link?.value ? (
										<Link href={structure?.fullSizeCard?.link?.value}>
											<a className='n-btn outline-black transparent d-block w-fit'>
												{structure?.fullSizeCard?.link?.title}
											</a>
										</Link>
									) : null}
								</div>
							</div>
						</div>
						{structure?.coloredCardsList?.value.map((item, index) => (
							<div className='col-12 col-lg-6 py-3'>
								<div
									className='tv-item colored-bg'
									style={{
										backgroundColor: item?.backgroundColor?.value
									}}>
									<div className='content'>
										<img
											src={item?.image?.src}
											alt={item?.image?.alt}
											className='image'
										/>
										<div>
											<div
												className={`title ${
													item?.theme?.value === 'dark' ? 'text-white' : ''
												}`}
												dangerouslySetInnerHTML={{
													__html: item?.title?.value
												}}></div>
											{item?.link?.value ? (
												<Link href={item?.link?.value}>
													<a
														className={`n-btn transparent d-block w-fit ${
															item?.theme?.value === 'dark'
																? 'outline-white'
																: 'outline-black'
														}`}>
														{item?.link?.title}
													</a>
												</Link>
											) : null}
										</div>
									</div>
								</div>
							</div>
						))}
						<div className='col-12 col-lg-6 py-3'>
							<div className='tv-item no-bg'>
								<img
									src={structure?.noBgCard?.logo?.src}
									alt={structure?.noBgCard?.logo?.alt}
									className='logo'
								/>
								<img
									src={structure?.noBgCard?.titleImage?.src}
									alt={structure?.noBgCard?.titleImage?.alt}
									className='image'
								/>
								<div
									className='title'
									dangerouslySetInnerHTML={{
										__html: structure?.noBgCard?.title?.value
									}}></div>
								{structure?.noBgCard?.link?.value ? (
									<Link href={structure?.noBgCard?.link?.value}>
										<a className='n-btn outline-white transparent d-block w-fit'>
											{structure?.noBgCard?.link?.title}
										</a>
									</Link>
								) : null}
							</div>
						</div>
						<div className='col-12 col-lg-6 py-3'>
							<div
								className='tv-item simple'
								style={{
									backgroundImage: `url(${structure?.simpleCard?.image?.src})`
								}}></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TelevisionsTvHero
