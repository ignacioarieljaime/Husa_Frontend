import React, { useEffect, useState } from 'react'

function ProductBigContent({ data }) {
	let { structure } = data
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.paragraph?.value)
	}, [])
	return (
		<div
			id={data.name + data.id}
			className='tiny-banner big_content_box p-md-4'>
			<div className='container px-6 px-md-8 py-12'>
				<article className='article text-center'>
					<h2
						className={`text-black mb-12 d-flex  ${
							structure?.flex?.value === 'column'
								? 'flex-column'
								: 'justify-content-center gap-2'
						} ${
							structure?.order?.value === 'reverse' &&
							structure?.flex?.value === 'column'
								? 'flex-column-reverse'
								: structure?.order?.value === 'reverse' &&
								  structure?.flex?.value === 'row'
								? 'flex-row-reverse'
								: ''
						}`}>
						<span className={'text-nowrap'}>
							{structure?.blackTitle?.value}
						</span>
						<span className='d-block text-primary text-nowrap'>
							{structure?.coloredTitle?.value}
						</span>
					</h2>
					<div>
						{structure?.smallTitle?.value && (
							<p className='fs-5 fw-normal mb-12'>
								{structure?.smallTitle?.value}
							</p>
						)}

						<p
							className='fw-normal text-black m-auto'
							dangerouslySetInnerHTML={{
								__html: text
							}}></p>
					</div>
				</article>
			</div>
		</div>
	)
}

export default ProductBigContent
