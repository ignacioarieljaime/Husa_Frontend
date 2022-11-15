import React from 'react'

const HomeApplianceTextBox = ({ data: { structure } }) => {
	return (
		<section>
			<div className='black-banner p-md-4 home-appliance-text-box'>
				<div className='container px-6 px-md-8 py-20'>
					<article className='article text-center'>
						<h2 className='mb-6 fs-1'>{structure?.title?.value}</h2>
						<h4 className='text-primary ms-2 mt-4 fs-2'>
							{structure?.coloredTitle?.value}
						</h4>
						<h6 className='fs-5 mt-7 mb-2'>{structure?.littleTitle?.value}</h6>
						<p
							className='fs-5 m-auto'
							dangerouslySetInnerHTML={{
								__html: structure?.paragraph?.value
							}}></p>
					</article>
				</div>
			</div>
		</section>
	)
}

export default HomeApplianceTextBox
