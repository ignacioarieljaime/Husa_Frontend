import React from 'react'
import UHDAbilityItem from './UHDAbilityItem'

function UHDAbilityBox() {
	return (
		<section>
			<div>
				<div class='container-fluid py-6'>
					<div class='row align-items-start'>
						<UHDAbilityItem />
						<UHDAbilityItem />
					</div>
				</div>
			</div>
		</section>
	)
}

export default UHDAbilityBox
