import React, { useEffect, useState } from 'react'

function ProductBigContent({ data }) {
	let { structure } = data
	const [text, setText] = useState(null)
	const [theme, setTheme] = useState('dark')
	useEffect(() => {
		setText(structure?.paragraph?.value)
		// hexToRgb(
		// 	structure?.backgroundColor?.value
		// 		? structure?.backgroundColor?.value
		// 		: '#fff'
		// )
	}, [])

	// function themeHandler(rgb) {
	// 	let dark = 0
	// 	let light = 0
	// 	rgb.forEach(unit => {
	// 		if (unit >= 127) light++
	// 		else dark++
	// 	})
	// 	return light > dark ? 'dark' : 'light'
	// }

	// function hexToRgb(hex) {
	// 	var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
	// 	hex = hex.replace(shorthandRegex, function (m, r, g, b) {
	// 		return r + r + g + g + b + b
	// 	})
	// 	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
	// 	setTheme(
	// 		themeHandler(
	// 			result
	// 				? [
	// 						parseInt(result[1], 16),
	// 						parseInt(result[2], 16),
	// 						parseInt(result[3], 16)
	// 				  ]
	// 				: [255, 255, 255]
	// 		)
	// 	)
	// }
	return (
		<section>
			<div
				id={data.name + data.id}
				style={{
					background: structure?.backgroundColor?.value
						? structure?.backgroundColor?.value
						: '#fff'
				}}>
				<div className={`big_content_box p-md-4 pb-md-0 pb-0 ${theme}`}>
					<div className='container pt-md-6'>
						<article className='article text-center'>
							<h4
								className={`text-black mb-0 d-flex  ${
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
						</article>
					</div>
				</div>
				<div className={`tiny-banner big_content_box p-md-4 ${theme}`}>
					<div className='container px-6 px-md-8'>
						<article className='article text-center'>
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
