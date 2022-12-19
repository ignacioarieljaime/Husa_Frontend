import React, { useEffect, useState } from 'react'
import AOS from 'aos'

const LumensOfBrightness = ({ data: { structure } }) => {
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.text?.value)
		setTimeout(() => {
			AOS.refresh()
		}, 1000)
	}, [])
	return (
		<section className='l9g'>
			<div className='lumens-of-brightness py-4 pb-md-0 pt-md-10 px-0'>
				<div className='px-4 px-md-20 py-6 pt-8 py-md-20'>
					<h2
						className='fs-5 fs-md-2hx text-white text-start mb-0 aos-init aos-animate'
						data-aos='fade'
						data-aos-duration='1000'>
						{structure?.title?.value}
					</h2>
				</div>
				<video
					muted={true}
					autoPlay={true}
					loop={true}
					playsInline={true}
					className='px-4 px-md-0'>
					<source src={structure?.video?.value} />
				</video>
				<div className='px-4 px-md-20 py-4 py-md-20'>
					<div
						className='caption mw-md-50 fs-9 fs-md-2 fw-light'
						dangerouslySetInnerHTML={{ __html: text }}></div>
				</div>
				<div className='row justify-content-between align-items-center mw-md-50 flex-md-nowrap mx-0 px-0 px-md-20 pb-20'>
					{structure?.list?.value.map((item, index) => (
						<div key={index} className='feature mb-5 mb-md-0 px-4'>
							<div
								className='color-bar active'
								data-aos='size-animation2'
								data-aos-duration='1000'
								data-aos-delay='450'></div>
							<div
								className='fs-sm-2 fs-md-2hx fw-bolder-700 text-white mt-2 mt-md-8 aos-init aos-animate'
								data-aos='fade-zoom-in'
								data-aos-duration='1000'
								data-aos-delay='450'>
								{item?.title?.value}
							</div>
							<div
								className='fs-8 fs-md-5 discription mt-1 mt-md-2 aos-init aos-animate'
								data-aos='fade-zoom-in'
								data-aos-duration='1000'>
								{item?.subtitle?.value}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default LumensOfBrightness
