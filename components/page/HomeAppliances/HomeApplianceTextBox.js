import React, { useEffect, useState } from 'react'

const HomeApplianceTextBox = ({ data: { structure } }) => {
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.paragraph?.value)
	}, [])
	return (
		<section>
			<div className='black-banner p-md-4 home-appliance-text-box'>
				<div className='container px-6 px-md-8 py-20'>
					<article className='article text-center'>
						<h2 className='mb-6 fs-1'>{structure?.title?.value}</h2>
						<h4 className='text-primary-new ms-2 mt-4 fs-2 fw-bolder-800'>
							{structure?.coloredTitle?.value}
						</h4>
						<h6 className='fs-5 mt-7 mb-2 fw-bolder-800'>
							{structure?.littleTitle?.value}
						</h6>
						<p
							className='fs-5 m-auto'
							dangerouslySetInnerHTML={{
								__html: text
							}}></p>
					</article>
				</div>
			</div>
		</section>
	)
}

export default HomeApplianceTextBox
