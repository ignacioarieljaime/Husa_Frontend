import React from 'react'

// image
import Image from 'public/assets/images/4k-uled/heading.jpg'

function ULEDHead() {
	return (
		<section>
			<div className='heading'>
				<img
					src={Image.src}
					alt='smart tv platforms'
					width='100%'
					height='100%'
				/>
				<div className='heading-text'>
					<h3 className='mw-50 mx-auto'>
						<span className='d-block'>Let’s get real.</span>
						These are the TVs your old TV should be worried about.
					</h3>
					<a href='#' className='btn btn-light text'>
						See the range
					</a>
				</div>
			</div>
		</section>
	)
}

export default ULEDHead
