import React from 'react'
import ULEDProductItem from './ULEDProductItem'

function ULEDProducts({ data: { structure } }) {
	return (
		<section>
			<div className='d-flex flex-wrap mx-0'>
				{structure?.list?.value.map((item, index) => (
					<ULEDProductItem
						itemLength={structure?.list?.value.length}
						key={index}
						data={item}
					/>
				))}
			</div>
		</section>
	)
}

export default ULEDProducts
