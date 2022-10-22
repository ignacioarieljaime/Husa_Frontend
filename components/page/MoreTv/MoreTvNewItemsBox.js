import React from 'react'

// component
import MoreTVNewItem from './MoreTVNewItem'

function MoreTVNewItemsBox({ data }) {
	const { structure } = data
	return (
		<section>
			<div className='container-fluid py-6'>
				<h2 className='text-capitalize fs-2qx text-center mt-20 mb-9'>
					{structure.title.value}
				</h2>
				<div className='row mb-20'>
					{structure.list.value.map((item, index) => (
						<MoreTVNewItem
							key={index}
							title={item.title.value}
							model={item.model.value}
							link={item.link}
							Btn={item.Btn}
							image={item.image}
							description={item.description.value}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default MoreTVNewItemsBox
