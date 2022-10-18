import React from 'react'

// image
import Image from 'public/assets/images/tv-and-audio/ai-programms.png'
import Link from 'next/link'

function TvAndAudioSmartChoice({ data: { structure } }) {
	console.log(structure)
	return (
		<section>
			<div className='tiny-banner p-md-4'>
				<div className='container px-6 px-md-8 py-20'>
					<article className='article text-center'>
						<h2 className='fs-3x mb-12'>
							Make the
							<span className='text-primary ms-2'>Smart Choice</span>
						</h2>
						<div>
							<p className='fw-normal m-auto mb-4'>
								{structure.paragraph.value}
							</p>
							<img src={Image.src} alt='featured image' />
						</div>
						<Link href={structure.paragraph.value}>
							<a className='text-decoration-underline d-block text-muted fs-5 text-uppercase mt-8'>
								{structure.link.title}
							</a>
						</Link>
					</article>
				</div>
			</div>
		</section>
	)
}

export default TvAndAudioSmartChoice
