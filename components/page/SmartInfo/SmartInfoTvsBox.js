import React from 'react'
import SmartInfoTvsDifferentItem from './SmartInfoTvsDifferentItem'

function SmartInfoTvsBox({ data }) {
	let { structure } = data
	console.log(data)
	return (
		<section>
			<div className='row mx-0'>
				{structure?.list?.value.map((item, index) => (
					<SmartInfoTvsDifferentItem
						listCount={structure.list.value.length}
						key={`SmartInfoTvsDifferentItem-${index}`}
						data={item}
					/>
				))}
			</div>
		</section>
	)
}

export default SmartInfoTvsBox
