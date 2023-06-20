import React, { useState, useEffect } from 'react'
import CustomImage from 'components/common/CustomImage'

const CareersBanner = ({ data: { structure } }) => {
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.title?.value)
	}, [])
	return <section>
		<div className="careers_textbox">
			{structure?.template?.value}
		</div>
	</section>
}

export default CareersBanner
