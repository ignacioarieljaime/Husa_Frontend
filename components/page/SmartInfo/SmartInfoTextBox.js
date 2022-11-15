import React from 'react'

function SmartInfoTextBox({ data }) {
	let { structure } = data
	return (
		<section>
			<div className='container-fluid px-7 py-14 p-md-20'>
				<article className='row article'>
					<h2 className='col-12 col-md-6 mb-7 my-md-auto'>
					{structure?.title?.value}
					</h2>
					<p className='col-12 col-md-6 m-0'>
					{structure?.description?.value}
					</p>
				</article>
			</div>
		</section>
	)
}

export default SmartInfoTextBox
