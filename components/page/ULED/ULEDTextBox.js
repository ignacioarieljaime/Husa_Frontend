import React from 'react'

function ULEDTextBox({ data: { structure } }) {
	return (
		<section>
			<div className='container-fluid px-7 py-14 p-md-20'>
				<article className='row article'>
					<h3 className='col-12 col-md-6 mb-7 my-md-auto px-0 px-md-8'>
						{structure?.title?.value}
					</h3>

					<p
						className='col-12 col-md-6 m-0'
						dangerouslySetInnerHTML={{ __html: structure?.description?.value }}>
						{structure?.paragraphOne?.value}
					</p>
				</article>
			</div>
		</section>
	)
}

export default ULEDTextBox
