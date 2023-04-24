import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
function TVAndAudioIntro({ data: { structure } }) {
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.paragraph?.value)
	}, [])
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
									__html: text
								}}></p>
						</div>
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
									className='btn btn-outline-secondary rounded-5 px-8 mt-12'>
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
					</article>
				</div>
			</div>
		</section>
	)
}

export default TVAndAudioIntro
