import React from 'react'

function TvAndAudioFineHisenseItem({ image }) {
	return (
		<div className='col-12 col-md-6 mb-18 mb-md-0'>
			<article className='article text-start'>
				<img
					src={image.src}
					alt='featured image'
					width='100%'
					className='img-box-shadow-hover'
				/>
				<div className='px-4'>
					<h2 className='fs-2 mb-3 mt-13'>ULED—Beautiful from the Inside Out</h2>
					<p className='fw-normal m-auto mb-4'>
						Take your TV experience from great to incredible with the Hisense 4K
						ULED™ TV. Our exclusive ULED™ technology including the Hi-View™
						engine boosts color, contrast, brightness and motion.
					</p>
				</div>
			</article>
		</div>
	)
}

export default TvAndAudioFineHisenseItem
