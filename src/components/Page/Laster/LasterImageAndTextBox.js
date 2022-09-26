import React from 'react'

// component
import LasterImageAndTextItem from './LasterImageAndTextItem'

function LasterImageAndTextBox() {
	return (
		<section>
			<div class='container-fluid pt-20 pb-8'>
				<div class='row align-items-start'>
					<LasterImageAndTextItem />
					<LasterImageAndTextItem />
				</div>
			</div>
		</section>
	)
}

export default LasterImageAndTextBox
