import React from 'react'

const NewsSingleDescription = ({ data }) => {
	let { structure } = data
	return (
		<div className='container news_single_description '>
			<h5>{structure?.title?.value}</h5>
			<p>{structure?.description?.value}</p>
		</div>
	)
}

export default NewsSingleDescription
