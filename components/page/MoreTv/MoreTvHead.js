import React, { useEffect, useState } from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
import Link from 'next/link'

function MoreTVHead({ data }) {
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(data?.structure)
	}, [])
	return (
		<section>
			<div className='blue-bg-more-tv '>
				<div className='container-fluid bg-bubble-effect px-md-8 py-20'>
					<div className='row align-items-center overflow-hidden'>
						<div className='col-12 col-md-6'>
							<h4
								className='header-texts'
								dangerouslySetInnerHTML={{
									__html: content?.title?.value
								}}></h4>
							<p
								className='fs-5 text-white fw-normal mb-7'
								dangerouslySetInnerHTML={{
									__html: content?.description?.value
								}}></p>
							{content?.link?.value && (
								<Link
									target={
										content?.link?.target ? content?.link?.target : '_self'
									}
									href={content?.link?.value}>
									<a
										target={
											content?.link?.target ? content?.link?.target : '_self'
										}
										className='btn btn-glowing rounded-5'>
										{content?.link?.title}{' '}
										{content?.link?.target === '_blank' && (
											<img
												style={{ marginLeft: '10px' }}
												src={OpenPageOnNewTab.src}
											/>
										)}
									</a>
								</Link>
							)}
						</div>
						<div className='col-12 col-md-6'>
							<img
								src={content?.image?.src}
								alt={content?.image?.alt}
								width='100%'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MoreTVHead
