import React from 'react'

// image
import Image from 'public/assets/images/laser-tv/lasertv-4k-logo.png'
import Link from 'next/link'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

function LaserHead({ data: { structure } }) {
	return (
		<section>
			<div className='black-banner p-md-4'>
				<div className='container px-6 px-md-8 pt-20 pb-12'>
					<article className='article text-center'>
						<h1 className='my-0'>
							<img
								src={structure?.image?.src}
								alt={structure?.image?.alt}
								className='banner-logo mb-20'
							/>
						</h1>
						<div>
							<p className='fs-5 text-primary fw-normal mx-auto mb-1'>
								{structure?.title?.value}
							</p>
						</div>
						<div>
							<p className='fw-normal text-white m-auto'>
								{structure?.paragraph?.value}
							</p>
						</div>
						<Link
							target={
								structure?.link?.target ? structure?.link?.target : '_self'
							}
							href={structure?.link?.value}>
							<a
								target={
									structure?.link?.target ? structure?.link?.target : '_self'
								}
								className='btn btn-outline-light rounded-5 px-8 mt-12'>
								{structure?.link?.title}
								{structure?.link?.target === '_blank' && (
									<img
										style={{ marginLeft: '10px' }}
										src={OpenPageOnNewTab.src}
									/>
								)}
							</a>
						</Link>
					</article>
				</div>
			</div>
		</section>
	)
}

export default LaserHead
