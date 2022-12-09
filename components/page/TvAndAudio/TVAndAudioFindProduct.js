import React from 'react'

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
							<Link href={structure?.link.value}>
								<a className='btn btn-outline-dark text-muted text-uppercase rounded-5 px-10 mt-8 mb-6'>
									{structure?.link.title}
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
