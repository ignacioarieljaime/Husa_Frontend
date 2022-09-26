import React from 'react'
import UHDNewsItem from './UHDNewsItem'

function UHDNewsBox() {
	return (
		<section>
			<div class='container-fluid py-6'>
				<div class='row align-items-start'>
					<UHDNewsItem />
					<UHDNewsItem />
					<UHDNewsItem />
				</div>
			</div>
		</section>
	)
}

export default UHDNewsBox
