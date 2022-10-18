import React from 'react'

function MoreTvVideoBox({ data }) {
	const { structure } = data
	return (
		<section>
			<div className='container-fluid py-9 text-center'>
				<h2 className='fs-1 fw-normal mb-9'>Watch the video</h2>
				<div className='video-container more-tv-video-container'>
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
				<h3 className='fs-3hx fw-normal'>{structure.title.value}</h3>
				<p className='text-muted fw-normal mw-md-50 mx-auto mb-5'>
					{structure.paragraph.value}
				</p>
				<a
					href={structure.link.value}
					className='text-black text-uppercase fw-normal fs-8'>
					{structure.link.title}
				</a>
			</div>
		</section>
	)
}

export default MoreTvVideoBox
