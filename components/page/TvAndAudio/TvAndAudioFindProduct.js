import React from 'react'

import Image from 'public/assets/images/tv-and-audio/three-tv-banner.png'
import Link from 'next/link'

function TvAndAudioFindProduct({ data: { structure } }) {
	return (
		<section>
			<div className='black-banner p-md-4'>
				<div className='container px-6 px-md-8 py-20'>
					<article className='article text-center'>
						<h2 className='text-white fs-3x mb-12'>
							Find Your
							<span className='text-primary'>Hisense TV</span>
						</h2>
						<div>
							<p className='text-white fw-normal m-auto mb-4'>
								{structure.tinyTitle.value}
							</p>
							<Link href={structure.link.value}>
								<a className='btn btn-outline-dark text-muted text-uppercase rounded-5 px-10 mt-8'>
									{structure.link.title}
								</a>
							</Link>
							<img src={structure.image.src} alt={structure.image.alt} width='90%' />
						</div>
					</article>
				</div>
			</div>
		</section>
	)
}

export default TvAndAudioFindProduct
