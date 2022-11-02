import React from 'react'
function SponsorImageAndText({ data }) {
	let { structure } = data
	return (
		<section className='sponsor-ship-bg'>
			<div className='container pt-20'>
				<div className='row position-relative'>
					<div className='col-12 col-md-6'>
						<img
							src={structure?.image?.src}
							alt={structure?.image?.alt}
							width='100%'
						/>
					</div>
					<div className='col-12 col-md-6 mt-14 mt-md-0 position-relative'>
						<div dangerouslySetInnerHTML={{ __html:structure?.text?.value }} className='fs-5 text-white mb-14'>
							
						</div>
						<div className='floating-text'>
							<p dangerouslySetInnerHTML={{ __html: structure?.overlayText?.value }} className='fs-4 text-white'>
								
							</p>
							
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SponsorImageAndText
