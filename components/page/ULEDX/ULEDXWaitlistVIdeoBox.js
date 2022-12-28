import React, { useEffect } from 'react'

const ULEDXWaitlistVideoBox = ({ data }) => {
	return (
		<div className='uledx_waitlist_video'>
			<video autoPlay={true} muted={true} loop={true} playsinline={true}>
				<source src={data?.value} data-wf-ignore='true' />
			</video>
		</div>
	)
}

export default ULEDXWaitlistVideoBox
