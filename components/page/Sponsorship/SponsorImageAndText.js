import React, { useEffect, useState } from 'react'
function SponsorImageAndText({ data }) {
	const { structure } = data
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])
	return (
		<section className='sponsor-ship-bg'>
			<div className='sponsor_container pt-20 pb-10'>
				<div className='row position-relative sponsor_floating_box'>
					<div className='col-12 col-md-6'>
						<img
							src={structure?.image?.src}
							alt={structure?.image?.alt}
							width='100%'
						/>
					</div>
					<div className='col-12 col-md-6 mt-14 mt-md-0 position-relative ps-md-9'>
						<div
							dangerouslySetInnerHTML={{ __html: structure?.text?.value }}
							className='text-white mb-8 mb-md-14 fs-base'></div>
						<div className='floating-text'>
							<div
								dangerouslySetInnerHTML={{
									__html: structure?.overlayText?.value
								}}
								className='fs-4 text-white'></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SponsorImageAndText
