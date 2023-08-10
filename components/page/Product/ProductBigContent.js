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
				className={`product_big_content ${structure?.theme?.value}`}
				style={{ background: structure?.backgroundColor?.value }}>
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
