import React from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
import Link from 'next/link'

function TVAndAudioFindProduct({ data: { structure } }) {
	return (
		<section>
			<div className='black-banner p-md-4'>
				<div className='tv-and-audio-intro px-4 py-20'>
					<article className='article text-center'>
						<h2 className='text-white fs-2tx mb-12'>
							{structure?.title.value}{' '}
							<span className='text-primary'>
								{structure?.coloredTitle.value}
							</span>
						</h2>
						<div>
							<p className='text-white fw-normal fs-5 m-auto mb-4 fs-5'>
								{structure?.tinyTitle.value}
							</p>
							<Link
								target={
									structure?.link?.target ? structure?.link?.target : '_self'
								}
								href={structure?.link.value}>
								<a
									target={
										structure?.link?.target ? structure?.link?.target : '_self'
									}
									className='n-btn outline-grey text-uppercase transparent rounded-5 medium d-block mx-auto w-fit mt-8 mb-6'>
									{structure?.link.title}
									{structure?.link?.target === '_blank' && (
										<img
											style={{ marginLeft: '10px' }}
											src={OpenPageOnNewTab.src}
										/>
									)}
								</a>
							</Link>
							<img
								src={structure?.image.src}
								alt={structure?.image.alt}
								width='80%'
								className='text-center'
							/>
						</div>
					</article>
				</div>
			</div>
		</section>
	)
}

export default TVAndAudioFindProduct
