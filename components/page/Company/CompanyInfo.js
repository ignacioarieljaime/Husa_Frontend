import React, { useEffect, useState } from 'react'

function CompanyInfo({ data }) {
	let { structure } = data
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.text?.value)
	}, [])
	return (
		<section id={data.name + data.id}>
			<div className='about-company container-fluid'>
				<article id='mission' className='article'>
					<h2 className='mb-7 fs-2qx'>{structure?.title?.value}</h2>
					<h3 className='my-10 fs-2'>{structure?.subtitle?.value}</h3>
					<div dangerouslySetInnerHTML={{ __html: text }}></div>
				</article>
			</div>
		</section>
	)
}

export default CompanyInfo
