import React from 'react'
import MoreTvItem from './MoreTvItem'

function MoreTvBox() {
	return (
		<section>
			<div class='container-fluid py-6'>
				<div class='row'>
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
