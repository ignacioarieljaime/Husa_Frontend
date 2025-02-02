import React, { useEffect, useState } from 'react'

const ColorFeature = ({ data }) => {
	const { structure } = data

	// const [content, setContent] = useState(null)
	const [leftVideo, setLeftVideo] = useState(null)
	const [rigthVideo, setRightVideo] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])
	useEffect(() => {
		if (structure?.leftVideo?.value) setLeftVideo(structure?.leftVideo?.value)
		if (structure?.rightVideo?.value)
			setRightVideo(structure?.rightVideo?.value)

		let element = document.querySelector('div.text p span')
		if (element) {
			element.classList.add('aos-animate')
			element.setAttribute('data-aos', 'fade')
			element.setAttribute('data-aos-duration', '1000')
		}
	}, [structure])

	const baseText = structure?.text?.value
	const splitText = baseText.match(/<p>.*?<\/p>/g);
	return (
		<section className='l9g'>
			<div className='color-feature'>
				<div className='text px-md-20 px-6 top_text'>
					<div
						className='fs-7 fs-md-3 fw-light mb-0 py-10 py-md-20 text-white split-text'
						dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
				</div>
				<div className='row mx-0 justify-content-between'>
					<div className='col-12 col-md-6 pr-md-3 ps-md-0 mb-4 mb-md-0 block-video'>
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
										__html: structure?.leftTitle?.value
									}}></div>
							</div>
						</div>
					</div>
					<div className='col-12 col-md-6 ps-md-0 pe-md-0 mb-4 mb-md-0 block-video'>
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
										__html: structure?.rightTitle?.value
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
