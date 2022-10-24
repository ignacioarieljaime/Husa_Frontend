import React from 'react'

function ULEDGreatTvTextBox({ data: { structure } }) {
	return (
		<section>
			<div className='buy-green-banner container-fluid px-7 py-14 p-md-20 text-start'>
				<article className='row align-items-center article'>
					<h3 className='col-12 col-md-6 mb-7 my-md-auto px-0 px-md-8'>
						{structure?.title?.value}
					</h3>
					<p className='col-12 col-md-6 m-0'>{structure?.description?.value}</p>
				</article>
			</div>
		</section>
	)
}

export default ULEDGreatTvTextBox
