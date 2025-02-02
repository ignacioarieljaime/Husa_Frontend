import React, { useEffect, useState } from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
// image
import Link from 'next/link'

function TVAndAudioSmartChoice({ data: { structure } }) {
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.paragraph?.value)
	}, [])
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
									__html: text
								}}></p>
							<img
								className='tv_and_audio_Laser_intro'
								src={structure?.image?.src}
								alt={structure?.image?.alt}
								width='80%'
							/>
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
									className='text-decoration-none text-primary-new d-block fs-8 text-uppercase mt-8'>
									{structure?.link?.title}{' '}
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

export default TVAndAudioSmartChoice
