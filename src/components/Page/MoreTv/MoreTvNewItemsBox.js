import React from 'react'

// component
import MoreTvNewItem from './MoreTvNewItem'

function MoreTvNewItemsBox() {
	return (
		<section>
			<div class='container-fluid py-6'>
				<h2 class='text-capitalize fs-2qx text-center mt-20 mb-9'>
					All New U Series
				</h2>
				<div class='row mb-20'>
					<MoreTvNewItem />
					<MoreTvNewItem />
					<MoreTvNewItem />
					<MoreTvNewItem />
				</div>
			</div>
		</section>
	)
}

export default MoreTvNewItemsBox
