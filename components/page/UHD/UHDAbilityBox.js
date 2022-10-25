import React from 'react'
import UHDAbilityItem from './UHDAbilityItem'

function UHDAbilityBox({ data }) {
	let { structure } = data
	return (
		<section>
			<div>
				<div className='container-fluid py-6'>
					<div className='row align-items-start'>
						{structure?.list?.value.map((item, index) => (
							<UHDAbilityItem key={'UHDAbilityItem' + index} data={item} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default UHDAbilityBox
