import React from 'react'

// image
import Image from './../../../../public/assets/images/4k-uled/heading.jpg'

function ULEDHead() {
	return (
		<section>
			<div class='heading'>
				<img
					src={Image.src}
					alt='smart tv platforms'
					width='100%'
					height='100%'
				/>
				<div class='heading-text'>
					<h1 class='mw-50 mx-auto'>
						<span class='d-block'>Let’s get real.</span>
						These are the TVs your old TV should be worried about.
					</h1>
					<a href='#' class='btn btn-light text'>
						See the range
					</a>
				</div>
			</div>
		</section>
	)
}

export default ULEDHead
