import React, { useState, useEffect } from 'react'

const CesCards = ({ data }) => {
	const { structure } = data
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.title?.value)
	}, [])

	return (
		<section>
			<div className='ces_cards'>
				<div dangerouslySetInnerHTML={{ __html: text }}></div>
			</div>
		</section>
	)
}

export default CesCards
