import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
const HomeApplianceQA = ({ data: { structure } }) => {
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.text?.value)
	}, [])
	return (
		<section>
			<div
				className={`black-banner ha_black_box ${structure?.template?.value} p-md-4`}>
				<div className='container px-6 px-md-8 py-20'>
					<article
						className={`text-center ${
							structure?.template?.value === 'V2' ? 'large_article' : 'article'
						}  `}>
						<h2
							className={`text-white ${
								structure?.template?.value === 'V2' ? '' : 'fs-3x'
							}  mb-12`}>
							{structure?.title?.value}
							<span className='text-primary-new ms-2'>
								{structure?.coloredTitle?.value}
							</span>
						</h2>
						<div>
							<p
								className='text-white fw-normal m-auto mb-4 description_wrapper'
								dangerouslySetInnerHTML={{
									__html: text
								}}></p>
							{structure?.link?.value && (
								<Link
									target={
										structure?.link?.target ? structure?.link?.target : '_self'
									}
									href={structure?.link?.value}>
									<a
										target={
											structure?.link?.target
												? structure?.link?.target
												: '_self'
										}
										className={`text-decoration-none ${
											structure?.template?.value === 'V2'
												? 'n-btn primary px-8 py-3 mb-10'
												: 'text-primary-new fs-8 mb-8'
										}  text-uppercase d-block w-fit mx-auto`}>
										{structure?.link?.title}
										{structure?.link?.target === '_blank' && (
											<img
												style={{ marginLeft: '10px' }}
												src={OpenPageOnNewTab.src}
											/>
										)}
									</a>
								</Link>
							)}
							<img
								src={structure?.image.src}
								alt={structure?.image.alt}
								width='90%'
							/>
						</div>
					</article>
				</div>
			</div>
		</section>
	)
}

export default HomeApplianceQA
