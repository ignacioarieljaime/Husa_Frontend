import React, { useEffect, useState } from 'react'

const ColorFeature = ({ data }) => {
	const [content, setContent] = useState(null)
	const [leftVideo, setLeftVideo] = useState(null)
	const [rigthVideo, setRightVideo] = useState(null)
	useEffect(() => {
		setContent(data?.structure)
	}, [])
	useEffect(() => {
		if (content?.leftVideo?.value) setLeftVideo(content?.leftVideo?.value)
		if (content?.rightVideo?.value) setRightVideo(content?.rightVideo?.value)

		let element = document.querySelector('div.text p span')
		if (element) {
			element.classList.add('aos-animate')
			element.setAttribute('data-aos', 'fade')
			element.setAttribute('data-aos-duration', '1000')
		}
	}, [content])
	return (
		<section className='l9g'>
			<div className='color-feature'>
				<div className='text px-md-20 px-4 top_text'>
					<p
						className='fs-7 fs-md-3 fw-light mb-0 py-10 py-md-20'
						dangerouslySetInnerHTML={{ __html: content?.text?.value }}></p>
				</div>
				<div className='row mx-0 justify-content-between'>
					<div className='col-12 col-md-6 px-4 pr-md-3 ps-md-0 mb-4 mb-md-0 block-video'>
						<video
							width='100%'
							height='100%'
							muted={true}
							autoPlay={true}
							loop={true}
							playsInline={true}
							src={leftVideo}
						/>

						<div className='video-content'>
							<div
								className=' aos-init aos-animate'
								data-aos='fade-zoom-in'
								data-aos-duration='1000'>
								<div
									className='text-white fs-7 fs-md-3  fw-bold'
									dangerouslySetInnerHTML={{
										__html: content?.leftTitle?.value
									}}></div>
							</div>
						</div>
					</div>
					<div className='col-12 col-md-6 px-4 ps-md-3 pe-md-0 mb-4 mb-md-0 block-video'>
						<video
							width='100%'
							height='100%'
							muted={true}
							autoPlay={true}
							loop={true}
							src={rigthVideo}
							playsInline={true}
						/>
						<div className='video-content'>
							<div
								className=' aos-init aos-animate'
								data-aos='fade-zoom-in'
								data-aos-duration='1000'>
								<div
									className='text-white fs-7 fs-md-3  fw-bold'
									dangerouslySetInnerHTML={{
										__html: content?.rightTitle?.value
									}}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ColorFeature
