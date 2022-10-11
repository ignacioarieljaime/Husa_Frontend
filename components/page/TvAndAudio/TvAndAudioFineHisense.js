import React from 'react'

// image
import Image from 'public/assets/images/tv-and-audio/4k-uled.png'

// components
import TvAndAudioFineHisenseItem from './TvAndAudioFineHisenseItem'

function TvAndAudioFineHisense() {
	return (
		<section>
			<div className='p-md-4'>
				<div className='container-fluid pt-20 pb-8'>
					<div className='row align-items-start'>
						<TvAndAudioFineHisenseItem image={Image} />
						<TvAndAudioFineHisenseItem image={Image} />
					</div>
				</div>
			</div>
		</section>
	)
}

export default TvAndAudioFineHisense
