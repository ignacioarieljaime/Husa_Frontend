import React from 'react'

function CompanyInfo({ data }) {
	let { structure } = data
	return (
		<section id={data.name + data.id}>
			<div className='about-company container-fluid'>
				<article id='mission' className='article'>
					<h2 className='mb-7 lh-base fs-2qx'>{structure?.title?.value}</h2>
					<h3 className='my-10 lh-base fs-2'>{structure?.subtitle?.value}</h3>
					<div
						dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
				</article>
			</div>
		</section>
	)
}

export default CompanyInfo
