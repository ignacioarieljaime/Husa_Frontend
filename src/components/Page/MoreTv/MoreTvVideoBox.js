import React from 'react'

function MoreTvVideoBox() {
	return (
		<section>
			<div className='container-fluid py-9 text-center'>
				<h2 className='fs-1 fw-normal mb-9'>Watch the video</h2>
				<div className='video-container'>
					<div className='video-wrapper'>
						<iframe
							width='100%'
							height='100%'
							src='https://www.youtube.com/embed/9EjXJfswb0s'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen></iframe>
					</div>
				</div>
				<h3 className='fs-3hx fw-normal'>
					America spoke.
					<span className='d-block'>Joel listened.</span>
				</h3>
				<p className='text-muted fw-normal mw-md-50 mx-auto mb-5'>
					Tireless research and countless responses (well, 2500 to be exact)
					finally reveals what America really wants from an electronics
					manufacturer. Read the earth-shattering truth in the Hisense Brand
					Survey Report 2022.
				</p>
				<a href='#' className='text-black text-uppercase fw-normal fs-8'>
					DOWNLOAD OUR B.S REPORT
				</a>
			</div>
		</section>
	)
}

export default MoreTvVideoBox
