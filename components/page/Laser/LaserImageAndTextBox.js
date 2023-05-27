import React from 'react'

// component
import LaserImageAndTextItem from './LaserImageAndTextItem'

function LaserImageAndTextBox({ data: { structure } }) {
	return (
		<section>
			<div className='container-fluid pt-20 pb-0 pb-md-8'>
				<div className='row align-items-start'>
					{structure?.list?.value.map((item, index) => (
						<LaserImageAndTextItem key={index} data={item} />
					))}
				</div>
			</div>
		</section>
	)
}

export default LaserImageAndTextBox
