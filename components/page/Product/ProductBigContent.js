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
				className={`product_big_content ${theme}`}
				style={{
					background: structure?.backgroundColor?.value
						? structure?.backgroundColor?.value
						: '#FFF'
				}}>
				<article className='content'>
					<h3
						className={`title ${
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
						<span>{structure?.blackTitle?.value}</span>
						<span className='text-primary'>
							{structure?.coloredTitle?.value}
						</span>
					</h3>
					{structure?.smallTitle?.value && (
						<p className='subtitle'>{structure?.smallTitle?.value}</p>
					)}

					<div
						className='text'
						dangerouslySetInnerHTML={{
							__html: text
						}}></div>

					{structure?.note?.value && (
						<p className='note'>{structure?.note?.value}</p>
					)}
				</article>
			</div>
		</section>
	)
}

export default ProductBigContent
