import React from 'react'

// image
import CreatingText from 'public/assets/images/sponsership/creating-great.png'
import Product from 'public/assets/images/sponsership/products-that-are.png'
import Accessible from 'public/assets/images/sponsership/accessible-to-all.png'

function SponsorshipTextGradient() {
	return (
		<section className='sponsor-ship-bg'>
			<div className='container gradient-texts pb-7'>
				<div className='text-start pb-7 mb-7 pb-md-11 mb-md-11 border-bottom border-light'>
					<img src={CreatingText.src} alt='featured image' />
				</div>
				<div className='text-end pb-7 mb-7 pb-md-11 mb-md-11 border-bottom border-light'>
					<img src={Product.src} alt='featured image' />
				</div>
				<div className='text-start pb-7  pb-md-11 mb-md-11 border-bottom border-light'>
					<img src={Accessible.src} alt='featured image' />
				</div>
			</div>
		</section>
	)
}

export default SponsorshipTextGradient
