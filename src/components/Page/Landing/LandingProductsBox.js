import React from 'react'
import LandingProductItem from './LandingProductItem'

function LandingProductsBox({ data: { props } }) {
	return (
		<div className='container-fluid products-container landing'>
			<h2>French Door Refrigerator Recall Information</h2>
			<div className='row justify-content-evenly products'>
				{props.data.map((item, index) => (
					<LandingProductItem key={index} data={item} />
				))}
			</div>
		</div>
	)
}

export default LandingProductsBox
