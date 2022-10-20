import React from 'react'
import ULEDProductItem from './ULEDProductItem'

function ULEDProducts({
	data: {
		structure: { list }
	}
}) {
	return (
		<section>
			<div className='row mx-0'>
				{list.value.map((item, index) => (
					<ULEDProductItem
						key={index}
						image={item.image}
						title={item.title.value}
						description={item.description.value}
						link={item.link.value}
						linkTitle={item.linkTitle.value}
						btnTitle={item.btnTitle.value}
					/>
				))}
			</div>
		</section>
	)
}

export default ULEDProducts
