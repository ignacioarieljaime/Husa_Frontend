import React from 'react'

// image
import CreatingText from 'public/assets/images/sponsership/creating-great.png'
import Product from 'public/assets/images/sponsership/products-that-are.png'
import Accessible from 'public/assets/images/sponsership/accessible-to-all.png'

function SponsorshipTextGradient({ data }) {
	let { structure } = data
	return (
		<section className='sponsor-ship-bg'>
			<div className='container gradient-texts pb-7'>
				<div
					dangerouslySetInnerHTML={{ __html: structure?.text1?.value }}
					className='text-start first-text pb-7 mb-7 pb-md-11 mb-md-11 border-bottom border-light'></div>
				<div
					dangerouslySetInnerHTML={{ __html: structure?.text2?.value }}
					className='text-end second-text pb-7 mb-7 pb-md-11 mb-md-11 border-bottom border-light'></div>
				<div
					dangerouslySetInnerHTML={{ __html: structure?.text3?.value }}
					className='text-start pb-7 third-text  pb-md-11 mb-md-11 border-bottom border-light'></div>
			</div>
		</section>
	)
}

export default SponsorshipTextGradient
