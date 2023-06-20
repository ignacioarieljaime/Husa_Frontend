import React, { useState, useEffect } from 'react'
import CustomImage from 'components/common/CustomImage'

const CareersBanner = ({ data: { structure } }) => {
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.title?.value)
	}, [])
	return <section></section>
}

export default CareersBanner
