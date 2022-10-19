import React from 'react'
import MoreTvItem from './MoreTvItem'

function MoreTvBox({ data }) {
	const { value } = data.structure.list
	return (
		<section>
			<div className='container-fluid py-6'>
				<div className='row'>
					{value?.map((item, index) => {
						return (
							<MoreTvItem
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

export default MoreTvBox
