import CustomImage from 'components/common/CustomImage'
import React from 'react'

const FlightNightFooter = ({ data }) => {
	let { structure } = data

	return (
		<footer>
			<div className='bg-black d-flex justify-content-center align-items-center py-4'>
				<CustomImage
					wrapperWidth='100%'
					WrapperMaxWidth='100px'
					wrapperHeight='auto'
					src={structure?.image?.src}
					alt={structure?.image?.alt}
				/>
			</div>
		</footer>
	)
}

export default FlightNightFooter
