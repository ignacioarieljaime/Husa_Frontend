import React, { useState } from 'react'
import ULEDXWaitlistVideoBox from './ULEDXWaitlistVIdeoBox'
import ULEDXWaitlistForm from './ULEDXWaitlistForm'
import { useWindowSize } from 'hooks/useWindowSize'

const ULEDXWaitlist = ({ data }) => {
	const { structure } = data

	const [videoFullSize, setVideoFullSize] = useState(false)
	const windowSize = useWindowSize()

	const fullSizeVideo = () => {
		if (windowSize[0] >= 768) setVideoFullSize(prevState => !prevState)
		else setVideoFullSize(false)
	}

	return (
		<section>
			<div className='uledx_waitlist'>
				<div className='row mx-0'>
					<div className={`col-12 ${videoFullSize ? '' : 'col-md-7'} px-0`}>
						<ULEDXWaitlistVideoBox
							data={structure?.video}
							videoSizeHandler={fullSizeVideo}
						/>
					</div>
					{!videoFullSize && (
						<div className='col-12 col-md-5 px-0'>
							<ULEDXWaitlistForm data={structure} />
						</div>
					)}
				</div>
			</div>
		</section>
	)
}

export default ULEDXWaitlist
