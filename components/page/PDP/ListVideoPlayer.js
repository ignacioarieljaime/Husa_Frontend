import React from 'react'

const ListVideoPlayer = ({
	data: {
		structure: { list }
	}
}) => {
	return (
		<section>
			<div className='row align-items-stretch mx-0'>
				{list?.value.map((item, index) => (
					<div key={index} className='col-12 col-md-6'>
						<div className='video-container'>
							<video autoPlay={true} loop={true} muted={true}>
								<source src={item?.video?.value} />
							</video>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default ListVideoPlayer
