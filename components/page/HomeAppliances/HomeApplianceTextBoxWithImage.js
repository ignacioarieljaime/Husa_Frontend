import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

const HomeApplianceTextBoxWithImage = ({ data: { structure } }) => {
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.paragraph?.value)
	}, [])
	return (
		<section>
			<div
				className={`row mx-0 home-appliances-text-box-with-image ${structure?.theme?.value}`}>
				<div className='col-12 col-md-8 content py-10 py-lg-0'>
					<article className='large_article'>
						<h2 className='title'>
							{structure?.title?.value}{' '}
							<span className='text-primary-new'>
								{structure?.coloredTitle?.value}
							</span>
						</h2>
						<p
							className='paragraph'
							dangerouslySetInnerHTML={{
								__html: text
							}}></p>
					</article>
					{structure?.link?.value && (
						<Link
							target={
								structure?.link?.target ? structure?.link?.target : '_self'
							}
							href={structure?.link?.value}>
							<a
								target={
									structure?.link?.target ? structure?.link?.target : '_self'
								}
								className='n-btn outline-white medium transparent'>
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
				</div>
				<div className='col-12 col-md-4 p-0 '>
					<img
						src={structure?.image?.src}
						alt={structure?.image?.alt}
						width='100%'
						height='100%'
					/>
				</div>
			</div>
		</section>
	)
}

export default HomeApplianceTextBoxWithImage
