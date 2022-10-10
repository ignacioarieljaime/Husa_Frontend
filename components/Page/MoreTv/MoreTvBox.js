import React from 'react'
import MoreTvItem from './MoreTvItem'

function MoreTvBox() {
	return (
		<section>
			<div className='container-fluid py-6'>
				<div className='row'>
					<MoreTvItem />
					<MoreTvItem />
					<MoreTvItem />
					<MoreTvItem />
					<MoreTvItem />
					<MoreTvItem />
				</div>
			</div>
		</section>
	)
}

export default MoreTvBox
