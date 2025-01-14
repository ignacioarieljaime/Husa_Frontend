import CustomImage from 'components/common/CustomImage'
import React, { useState, useEffect } from 'react'

const ScreenSize = ({ data: { structure } }) => {
	const [activeTab, setActiveTab] = useState(0)
	const [list, setList] = useState([])
	useEffect(() => {
		setList(structure?.tabs?.value)
	}, [])
	return (
		<section className='l9g'>
			<div className='screen-size'>
				<div
					className='py-20 px-4 px-md-20 bg-white aos-init aos-animate'
					data-aos='fade'
					data-aos-delay='0'
					data-aos-duration='1000'>
					<h2 className='fs-5 fs-md-2hx fw-bold mb-0 mt-10'>
						{structure?.title?.value}
					</h2>
				</div>
				<div className='position-relative'>
					<div className='tabs-container mt-2 mt-sm-4'>
						{list.map((tab, index) => (
							<div className='m-1 m-sm-3' key={index}>
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
					{list.map((tab, index) => (
						<div
							key={index}
							className={`tab-image ${activeTab === index ? 'active' : ''}`}>
							<CustomImage src={tab?.image?.src} alt={tab?.image?.alt} />
							<div
								className='fs-9 fs-md-3 fw-light'
								dangerouslySetInnerHTML={{ __html: tab?.text?.value }}></div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default ScreenSize
