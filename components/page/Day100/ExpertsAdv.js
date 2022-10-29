import React from 'react'

const ExpertsAdv = ({ data }) => {
	let { structure } = data
	return (
		<section className='day-100'>
			<div className='container expert-adv mb-10 mt-18'>
				<h2>{structure?.title?.value}</h2>
			</div>
		</section>
	)
}

export default ExpertsAdv
