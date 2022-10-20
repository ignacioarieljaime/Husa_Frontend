import React from 'react'
import UHDNewsItem from './UHDNewsItem'

function UHDNewsBox({ data: { structure } }) {
	console.log(structure)
	return (
		<section>
			<div className='container-fluid py-6'>
				<div className='row align-items-start'>
					{structure.list.value.map((item, index) => (
						<UHDNewsItem
							key={index}
							image={item.image}
							title={item.title.value}
							description={item.description.value}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default UHDNewsBox
