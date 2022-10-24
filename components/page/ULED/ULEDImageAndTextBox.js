import React from 'react'
import ULEDImageAndTextItem from './ULEDImageAndTextItem'

function ULEDImageAndTextBox({ data }) {
	let { structure } = data
	return (
		<section>
			<div className='p-0 p-5 p-md-10'>
				{structure?.list?.value.map((item, index) => (
					<ULEDImageAndTextItem
						key={index}
						image={item?.image}
						title={item?.title?.value}
						description={item?.description?.value}
						littleTitle={item?.littleTitle?.value}
					/>
				))}
			</div>
		</section>
	)
}

export default ULEDImageAndTextBox
