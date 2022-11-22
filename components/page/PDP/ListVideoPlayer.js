import React from 'react'

const ListVideoPlayer = ({ data }) => {
	let { structure } = data

	return (<section>
		<div className='d-flex align-items-stretch mx-0'>
			{structure?.list?.value.map((item, index) => (
				<div key={index} style={{ width: `calc(${100 / structure?.list?.value.length}% - 20px)` }} className={'mx-5'}>
					<div className='video-container'>
						<video autoPlay={structure?.autoplay?.value ? true : false}
									 controls={structure?.autoplay?.value ? false : true}
									 loop={structure?.autoplay?.value ? true : false}
									 muted={true}>
							<source src={item?.video?.value} />
						</video>
					</div>
				</div>))}
		</div>
	</section>)
}

export default ListVideoPlayer
