import React from 'react'

// image
import Image from 'public/assets/images/commercial/commercial-refrigirator-1.jpg'
import ImageTwo from 'public/assets/images/commercial/commercial-refrigirator-1.jpg'

function CommercialTowImageBox({ data: { structure } }) {
	return (
		<section>
			<div className='px-3 mt-12 mb-20 row justify-content-center align-items-center mx-0'>
				<img
					src={structure?.imageLeft?.src}
					adlt={structure?.imageLeft?.adlt}
					className='col-12 col-md-6 p-0 pe-md-3 mb-20 mb-md-0'
				/>
				<img
					src={structure?.imageRight?.src}
					adlt={structure?.imageRight?.adlt}
					className='col-12 col-md-6 p-0 ps-md-3'
				/>
			</div>
		</section>
	)
}

export default CommercialTowImageBox
