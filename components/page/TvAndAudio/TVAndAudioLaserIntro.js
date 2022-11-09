import React from 'react'

function TVAndAudioLaserIntro({ data: { structure } }) {
	return (
		<section>
			<div className='black-banner p-md-4'>
				<div className='container px-6 px-md-8 py-20'>
					<article className='article text-center'>
						<img
							width={'320px'}
							src={structure?.image?.src}
							alt={structure?.image?.alt}
							className='banner-logo tv_and_audio_Laser_intro'
						/>
						<h2 className='text-white fs-2tx mt-0 mb-10'>
							{structure?.title?.value}
						</h2>
						<div>
							<p className='text-primary fw-normal mx-auto mb-2 space-125'>
								{structure?.primarylittleTitle?.value}
							</p>
							<p className='fs-base text-white fw-normal mx-auto mb-8 space-125'>
								{structure?.littleTitle?.value}
							</p>
						</div>
						<div>
							<p className='fw-normal fs-base text-white m-auto'>
								{structure?.paragraph?.value}
							</p>
						</div>
					</article>
				</div>
			</div>
		</section>
	)
}

export default TVAndAudioLaserIntro
