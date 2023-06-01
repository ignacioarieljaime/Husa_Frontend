import React from 'react'
import { useState, useEffect } from 'react'

const NewsSingleDescription = ({ data }) => {
	let { structure } = data
	const [description, setDescription] = useState(null)
	useEffect(() => {
		setDescription(structure?.description?.value)
	}, [])

	return (
		<div className='container news_single_description '>
			<h5>{structure?.title?.value}</h5>
			<div dangerouslySetInnerHTML={{ __html: description }}></div>
		</div>
	)
}

export default NewsSingleDescription
