import React from 'react'

// image
import Image from 'public/assets/images/all-dishwashers/dishwasher.jpg'

function DishwashersHead() {
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
					<h3 className='fw-normal fs-3x'>Dishwashers</h3>
				</div>
			</div>
		</section>
	)
}

export default DishwashersHead
