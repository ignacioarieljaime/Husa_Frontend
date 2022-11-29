import React from 'react'

const QuoteBlock = ({ data: { structure } }) => {
	return (
		<section>
			<div className='beyond_laser_quote_block'>
				<div className='row box mx-0'>
					<div className='video_container col-12 col-md-6'>
						<video muted={true} playsInline={true} autoPlay={true} loop={true}>
							<source src={structure?.video?.value} />
						</video>
					</div>
					<div className='content col-12 col-md-6'>
						<div
							className='text'
							dangerouslySetInnerHTML={{
								__html: structure?.text?.value
							}}></div>
						<div
							className='quote'
							dangerouslySetInnerHTML={{
								__html: structure?.quote?.value
							}}></div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default QuoteBlock
