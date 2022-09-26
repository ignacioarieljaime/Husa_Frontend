import React from 'react'

// image
import Image from './../../../../public/assets/images/tv-and-audio/4k-uled.png'

// components
import TvAndAudioFineHisenseItem from './TvAndAudioFineHisenseItem'

function TvAndAudioFineHisense() {
	return (
		<section>
			<div class='p-md-4'>
				<div class='container-fluid pt-20 pb-8'>
					<div class='row align-items-start'>
						<TvAndAudioFineHisenseItem image={Image} />
						<TvAndAudioFineHisenseItem image={Image} />
					</div>
				</div>
			</div>
		</section>
	)
}

export default TvAndAudioFineHisense
