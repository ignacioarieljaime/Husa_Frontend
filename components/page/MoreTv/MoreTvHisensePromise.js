import React from 'react'

// image
import ImageHisenseSign from 'public/assets/images/more-tv/hisense-sign.png'
import ImageJoel from 'public/assets/images/more-tv/joel-reading.png'

function MoreTVHisensePromise({ data }) {
	const { structure } = data

	return (
		<section>
			<div className='blue-bg-more-tv '>
				<div className='container-fluid bg-bubble-effect px-md-8 py-20'>
					<div className='row align-items-end'>
						<div className='col-12 col-md-6 mb-20'>
							<h4 className='fs-3hx fw-normal text-white mb-20'>
								{structure.title.value}
							</h4>
							<p className='fs-5 text-white fw-normal mb-7'>
								{structure.paragraph.value}
							</p>
							<img src={structure.image.src} alt={structure.image.alt} />
						</div>
						<div className='col-12 col-md-6'>
							<img
								src={structure.imagePerson.src}
								alt={structure.imagePerson.alt}
								width='100%'
								className='mb-n20'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MoreTVHisensePromise
