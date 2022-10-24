import React from 'react'

function CompanyInfo({ data }) {
	let { structure } = data
	return (
		<section id={data.name + data.id}>
			<div className='about-company container-fluid'>
				<article id='mission' className='article'>
					<h4>{structure?.subtitle?.value}</h4>
					<h5>{structure?.title?.value}</h5>
					<div
						dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
				</article>
			</div>
		</section>
	)
}

export default CompanyInfo
