import React from 'react'

function ProductBigContent({ data: { structure } }) {
	return (
		<div className='tiny-banner p-md-4'>
			<div className='container px-6 px-md-8 py-12'>
				<article className='article text-center'>
					<h2 className='text-black mb-12'>
						{structure.blackTitle.value}
						<span className='d-block text-primary'>
							{structure.coloredTitle.value}
						</span>
					</h2>
					<div>
						<p className='fs-5 fw-normal mb-12'>{structure.smallTitle.value}</p>
						<p className='fw-normal text-black m-auto'>
							{structure.paragraph.value}
						</p>
					</div>
				</article>
			</div>
		</div>
	)
}

export default ProductBigContent
