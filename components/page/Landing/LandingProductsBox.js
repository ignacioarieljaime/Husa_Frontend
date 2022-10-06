import React from 'react'
import LandingProductItem from './LandingProductItem'

function LandingProductsBox() {
	return (
		<div className='container-fluid landing products-container'>
			<h2>French Door Refrigerator Recall Information</h2>
			<div className='row justify-content-evenly products'>
				<LandingProductItem />
				<LandingProductItem />
				<LandingProductItem />
				<LandingProductItem />
				<LandingProductItem />
			</div>
		</div>
	)
}

export default LandingProductsBox
