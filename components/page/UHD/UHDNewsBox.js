import React from 'react'
import UHDNewsItem from './UHDNewsItem'

function UHDNewsBox({ data: { structure } }) {
	return (
		<section>
			<div className='container-fluid py-6'>
				<div className='row align-items-start'>
					{structure.list.value.map((item, index) => (
						<UHDNewsItem data={item} key={index} />
					))}
				</div>
			</div>
		</section>
	)
}

export default UHDNewsBox
