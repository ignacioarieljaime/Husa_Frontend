import Link from 'next/link'
import React from 'react'

function TVAndAudioIntro({ data: { structure } }) {
	return (
		<section>
			<div className='tiny-banner tv-and-audio-intro p-md-4'>
				<div className='container px-6 px-md-8 py-20'>
					<article className='article text-center'>
						<h2 className='fs-2hx mb-12'>
							{structure?.largeTitle?.value}
							<span className='text-primary d-block'>
								{structure?.coloredTitle?.value}
							</span>
						</h2>
						<div>
							<p
								className='fw-normal m-auto'
								dangerouslySetInnerHTML={{
									__html: structure?.paragraph?.value
								}}></p>
						</div>
						{structure?.link?.value && (
							<Link href={structure?.link?.value}>
								<a className='btn btn-outline-secondary rounded-5 px-8 mt-12'>
									{structure?.link?.title}
								</a>
							</Link>
						)}
					</article>
				</div>
			</div>
		</section>
	)
}

export default TVAndAudioIntro
