import React from 'react'

// components
import TvAndAudioFineHisenseItem from './TvAndAudioFineHisenseItem'

function TvAndAudioFineHisense({ data: { structure } }) {
	return (
		<section>
			<div className='p-md-4'>
				<div className='container-fluid pt-20 pb-8'>
					<div className='row align-items-start'>
						{structure.list.value.map((item, index) => (
							<TvAndAudioFineHisenseItem key={index} data={item} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default TvAndAudioFineHisense
