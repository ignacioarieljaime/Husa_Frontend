import React from 'react'

function LasterTitleAndSubTitleBox({ data: { structure } }) {
	return (
		<section>
			<div className='tiny-banner p-md-4'>
				<div className='container px-6 px-md-8 py-17'>
					<article className='article text-center'>
						<h4 className='fs-2 fw-normal mb-12'>{structure.title.value}</h4>
						<div>
							<p className='fw-normal m-auto'>{structure.description.value}</p>
						</div>
					</article>
				</div>
			</div>
		</section>
	)
}

export default LasterTitleAndSubTitleBox
