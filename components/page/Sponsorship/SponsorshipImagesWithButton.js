import React from 'react'
import Link from 'next/link'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
function SponsorshipImagesWithButton({ data }) {
	let { structure } = data
	return (
		<section className='sponsor-ship-bg'>
			<div className='sponsor_container py-20 text-center gradient-texts'>
				<div>
					<img
						src={structure?.image?.src}
						alt={structure?.image?.alt}
						className='mb-12'
					/>
				</div>

				<div>
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
								className='n-btn primary text-white rounded-5 medium d-block mx-auto w-fit'>
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
			</div>
		</section>
	)
}

export default SponsorshipImagesWithButton
