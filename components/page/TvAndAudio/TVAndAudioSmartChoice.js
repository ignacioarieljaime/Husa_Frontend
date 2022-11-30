import React from 'react'

// image
import Link from 'next/link'

function TVAndAudioSmartChoice({ data: { structure } }) {
	return (
		<section>
			<div className='tiny-banner p-md-4'>
				<div className='container px-6 px-md-8 py-20'>
					<article className='article text-center'>
						<h2 className='mb-12'>
							{structure?.title?.value}{' '}
							<span className='text-primary'>
								{structure?.coloredTitle?.value}
							</span>
						</h2>
						<div>
							<p
								className='fw-normal m-auto mb-4'
								dangerouslySetInnerHTML={{
									__html: structure?.paragraph?.value
								}}></p>
							<img
								className='tv_and_audio_Laser_intro'
								src={structure?.image?.src}
								alt={structure?.image?.alt}
								width='80%'
							/>
						</div>
						<Link href={structure?.link?.value}>
							<a className='text-decoration-none text-primary-new d-block fs-8 text-uppercase mt-8'>
								{structure?.link?.title}
							</a>
						</Link>
					</article>
				</div>
			</div>
		</section>
	)
}

export default TVAndAudioSmartChoice
