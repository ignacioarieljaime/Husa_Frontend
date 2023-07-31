import React, { useEffect, useState } from 'react'

function ProductBigContent({ data }) {
	let { structure } = data
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.paragraph?.value)
	}, [])
	return (
		<section>
			<div
				id={data.name + data.id}
				style={{ background: structure?.backgroundColor?.value }}>
				<div
					className={`tiny-banner big_content_box p-md-4 ${structure?.theme?.value}`}>
					<div className='container px-6 px-md-8'>
						<article className='article text-center'>
							<h4
								className={`text-black  d-flex  ${
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
								<span className={'text-md-nowrap lh-base'}>
									{structure?.blackTitle?.value}
								</span>
								<span className='d-flex justify-content-center align-items-center lh-base text-primary text-md-nowrap'>
									{structure?.coloredTitle?.value}
								</span>
							</h4>
							<div>
								{structure?.smallTitle?.value && (
									<p className='fs-5 fw-normal'>
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
			</div>
		</section>
	)
}

export default ProductBigContent
