import React, { useState, useEffect } from 'react'
import FineTouchesTab from './FineTouchesTab'

const FineTouches = ({ data: { structure } }) => {
	const [activeTab, setActiveTab] = useState(0)
	const [list, setList] = useState([])
	useEffect(() => {
		setList(structure?.tabs?.value)
	})
	return (
		<section className='l9g'>
			<div className='fine-touches'>
				<div
					className='py-20 px-4 px-md-20 aos-init aos-animate'
					data-aos='fade'
					data-aos-delay='0'
					data-aos-duration='1000'>
					<h2 className='fs-5 fs-md-2hx fw-bold mb-0 mt-10'>
						{structure?.title?.value}
					</h2>
				</div>
				<div className='bg-black position-relative pb-2 pb-md-15'>
					<div className='tabs-container mt-4'>
						{list.map((tab, index) => (
							<div key={index} className='m-3'>
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
					<FineTouchesTab
						videoSrc={list[activeTab]?.video?.value}
						description={list[activeTab]?.text?.value}
					/>
				</div>
			</div>
		</section>
	)
}

export default FineTouches
