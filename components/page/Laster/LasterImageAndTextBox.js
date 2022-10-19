import React from 'react'

// component
import LasterImageAndTextItem from './LasterImageAndTextItem'

function LasterImageAndTextBox({ data: { structure } }) {
	return (
		<section>
			<div className='container-fluid pt-20 pb-8'>
				<div className='row align-items-start'>
					{structure.list.value.map((item, index) => (
						<LasterImageAndTextItem key={index} data={item} />
					))}
				</div>
			</div>
		</section>
	)
}

export default LasterImageAndTextBox
