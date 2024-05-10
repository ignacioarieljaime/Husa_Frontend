import React from 'react'
import FAQsItem from './FAQsItem'

const FAQSupport = ({ data: { structure } }) => {
	return (
		<section className='l9g'>
			<div className='container-fluid faqs l-nine-g-faqs px-4 px-xxl-14 py-20'>
				<div
					className='text-start pt-10 pb-20 aos-init aos-animate'
					data-aos='fade'
					data-aos-delay='0'
					data-aos-duration='1000'>
					<h2 className='fs-5 fs-md-2hx fw-bold '>{structure?.title?.value}</h2>
				</div>

				<div className='row justify-content-between align-items-start'>
					<div className='col-12 col-md-6'>
						{structure?.leftFAQ?.value.map((item, index) => (
							<FAQsItem
								key={index}
								question={item?.question?.value}
								answer={item?.answer?.value}
							/>
						))}
					</div>
					<div className='col-12 col-md-6'>
						{structure?.rightFAQ?.value.map((item, index) => (
							<FAQsItem
								key={index}
								question={item?.question?.value}
								answer={item?.answer?.value}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default FAQSupport
