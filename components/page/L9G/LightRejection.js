import CustomImage from 'components/common/CustomImage'
import React, { useState, useEffect } from 'react'
import AOS from 'aos'

const LightRejection = ({ data }) => {
	const [activeTab, setActiveTab] = useState(0)
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(data?.structure)
		setTimeout(() => {
			AOS.refresh()
		}, 1500)
	}, [])
	return (
		<section className='l9g'>
			<div className='light-rejection py-4 pb-md-0 pt-md-20 px-0'>
				<div className='px-4 px-md-20 py-6 pt-0 py-md-15'>
					<h2
						className='fs-5 fs-md-2hx text-white text-start mb-0 aos-init aos-animate'
						data-aos='fade'
						data-aos-duration='1000'>
						{content?.title?.value}
					</h2>
				</div>
				<video
					muted={true}
					autoPlay={true}
					loop={true}
					playsInline={true}
					className='px-4 px-md-0'>
					<source src={content?.video?.value} />
				</video>
				<div className='px-4 px-md-20 py-4 py-md-20'>
					<div
						className='caption fs-9 fs-md-2 mw-md-50 fw-light mb-8'
						dangerouslySetInnerHTML={{ __html: content?.text?.value }}></div>
				</div>
				<div className='position-relative'>
					<div className='tabs-container mt-4'>
						{content?.tabs?.value.map((tab, index) => (
							<div className='m-3' key={index}>
								<button
									className={`btn text-white tab-btn ${
										activeTab === index ? 'active' : ''
									}`}
									onClick={() => setActiveTab(index)}>
									<span className='underline-on-hover fs-9 fs-md-3 fw-light'>
										{tab?.title?.value}
									</span>
								</button>
							</div>
						))}
					</div>
					{content?.tabs?.value.map((tab, index) => (
						<div className={`tab-image ${activeTab === index ? 'active' : ''}`}>
							<CustomImage src={tab?.image?.src} alt={tab?.image?.alt} />
							<div
								className='fs-9 fs-md-3 fw-light'
								dangerouslySetInnerHTML={{ __html: tab?.text?.value }}></div>
						</div>
					))}
				</div>
				<div className='d-flex justify-content-between  flex-wrap flex-sm-nowrap'>
					{content?.specs?.value.map((spec, index) => (
						<div className='d-flex flex-column '>
							<div className='px-4 px-md-20 py-4 py-md-15 flex-grow-1 d-flex flex-column'>
								<div
									className='fs-sm-2 fs-md-2x fw-bolder-700 text-white mt-2 mt-md-8 aos-init aos-animate'
									data-aos='fade-zoom-in'
									data-aos-duration='1000'
									data-aos-delay='450'>
									{spec?.title?.value}
								</div>
								<div
									className='caption fs-9 fs-md-2 fw-light mb-8'
									dangerouslySetInnerHTML={{
										__html: spec?.text?.value
									}}></div>
							</div>
							<div className='row justify-content-between align-items-start flex-md-nowrap mx-0 px-0 px-md-20 '>
								{spec?.features?.value.map((feature, index) => (
									<div className='feature mb-5 mb-md-0 px-4 px-md-0 mx-1'>
										<div
											className='color-bar active'
											data-aos='size-animation'
											data-aos-duration='1000'
											data-aos-delay='450'></div>
										<div
											className='fs-sm-2 fs-md-2tx fw-bolder-700 text-white mt-2 mt-md-8 aos-init aos-animate'
											data-aos='fade-zoom-in'
											data-aos-duration='1000'
											data-aos-delay='450'>
											{feature?.title?.value}
										</div>
										<div
											className='fs-8 fs-md-5 discription mt-1 mt-md-2 aos-init aos-animate'
											data-aos='fade-zoom-in'
											data-aos-duration='1000'>
											{feature?.subtitle?.value}
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default LightRejection
