import React from 'react'

import ULEDTechItem from './ULEDTechItem'

function ULEDAllTech({ data }) {
	const { structure } = data

	return (
		<section>
			<div className='container-fluid px-lg-20'>
				<article className='row article align-items-center mx-0 w-100'>
					<h3 className='col-12 col-md-6 mb-7 my-md-auto'>
						{structure.title.value}
					</h3>
					<p className='col-12 col-md-6 m-0'>{structure.description.value}</p>
				</article>
				<div className='row align-items-start justify-content-evenly flex-wrap jarg-flex mt-15 mb-10'>
					{structure.list.value.map((item, index) => (
						<ULEDTechItem
							key={index}
							image={item.image}
							description={item.description.value}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default ULEDAllTech
