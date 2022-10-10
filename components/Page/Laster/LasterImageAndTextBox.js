import React from 'react'

// component
import LasterImageAndTextItem from './LasterImageAndTextItem'

function LasterImageAndTextBox() {
	return (
		<section>
			<div className='container-fluid pt-20 pb-8'>
				<div className='row align-items-start'>
					<LasterImageAndTextItem />
					<LasterImageAndTextItem />
				</div>
			</div>
		</section>
	)
}

export default LasterImageAndTextBox
