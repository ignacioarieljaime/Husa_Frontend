import React from 'react'
import MoreTVItem from './MoreTVItem'

function MoreTVBox({ data }) {
	const { value } = data.structure.list
	return (
		<section>
			<div className='container-fluid py-6'>
				<div className='row'>
					{value?.map((item, index) => {
						return (
							<MoreTVItem
								key={index}
								image={item.image}
								title={item.title.value}
								model={item.model.value}
								description={item.description.value}
								link={item.link}
							/>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default MoreTVBox
