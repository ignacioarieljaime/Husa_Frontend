import CustomImage from 'components/common/CustomImage'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const FlightNightBanner = ({ data }) => {
	let { structure } = data
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.title?.value)
	}, [])
	return (
		<section>
			<div className='flight_night_banner'>
				<CustomImage
					wrapperWidth='100%'
					WrapperMaxWidth='230px'
					wrapperHeight='auto'
					// className='
					wrapperClass='mx-auto mb-4 image_container'
					src={structure?.image?.src}
					alt={structure?.image?.alt}
				/>
				<h2 className='title'>
					<p dangerouslySetInnerHTML={{ __html: text }}></p>
				</h2>
			</div>
		</section>
	)
}

export default FlightNightBanner
