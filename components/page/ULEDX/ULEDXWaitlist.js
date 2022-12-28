import React, { useEffect } from 'react'
import ULEDXWaitlistVideoBox from './ULEDXWaitlistVIdeoBox'
import ULEDXWaitlistForm from './ULEDXWaitlistForm'

const ULEDXWaitlist = ({ data }) => {
	const { structure } = data

	return (
		<section>
			<div className='uledx_waitlist'>
				<div className='row mx-0'>
					<div className='col-12 col-md-7 col-lg-8 px-0'>
						<ULEDXWaitlistVideoBox data={structure?.video} />
					</div>
					<div className='col-12 col-md-5 col-lg-4 px-0'>
						<ULEDXWaitlistForm />
					</div>
				</div>
			</div>
		</section>
	)
}

export default ULEDXWaitlist
