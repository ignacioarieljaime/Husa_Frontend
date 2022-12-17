import React, { useEffect, useState } from 'react'

const BeyondLaserQuoteBlock = ({ data }) => {
	const { structure } = data
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(data?.structure)
	}, [])
	return (
		<section>
			<div id={data?.name + data?.id} className='beyond_laser_quote_block'>
				<div className='row box mx-0'>
					<div className='video_container col-12 col-md-6'>
						<video muted={true} playsInline={true} autoPlay={true} loop={true}>
							<source src={structure?.video?.value} />
						</video>
					</div>
					<div className='content col-12 col-md-6'>
						<div
							data-aos='fade-up'
							data-aos-delay='500'
							data-aos-duration='1000'
							className='text'
							dangerouslySetInnerHTML={{
								__html: content?.text?.value
							}}></div>
						<div
							data-aos='fade'
							data-aos-delay='1000'
							data-aos-duration='1000'
							className='quote'
							dangerouslySetInnerHTML={{
								__html: content?.quote?.value
							}}></div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BeyondLaserQuoteBlock
