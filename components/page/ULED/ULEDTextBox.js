import React from 'react'

function ULEDTextBox({ data: { structure } }) {
	return (
		<section>
			<div className='container-fluid px-7 py-14 p-md-20'>
				<article className='row article'>
					<h3 className='col-12 col-md-6 mb-7 my-md-auto px-0 px-md-8'>
						{structure.title.value}
					</h3>
					{structure.paragraphOne.value && (
						<p className='col-12 col-md-6 m-0'>{structure.paragraphOne.value}</p>
					)}
					{structure.paragraphTwo.value && (
						<p className='col-12 col-md-6 m-0'>{structure.paragraphTwo.value}</p>
					)}
				</article>
			</div>
		</section>
	)
}

export default ULEDTextBox
