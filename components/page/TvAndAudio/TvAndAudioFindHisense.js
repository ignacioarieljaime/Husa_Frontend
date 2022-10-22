import React from 'react'

// components
import TvAndAudioFindHisenseItem from './TvAndAudioFindHisenseItem'

function TvAndAudioFindHisense({ data: { structure } }) {
	return (
		<section>
			<div className='p-md-4'>
				<div className='container-fluid pt-20 pb-8'>
					<div className='row align-items-start'>
						{structure.list.value.map((item, index) => (
							<TvAndAudioFindHisenseItem key={index} data={item} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default TvAndAudioFindHisense
