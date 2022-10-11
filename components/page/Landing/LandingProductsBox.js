import React from 'react'
import LandingProductItem from './LandingProductItem'

function LandingProductsBox({
	data: {
		structure: { list, title }
	}
}) {
	return (
		<div className='container-fluid products-container landing'>
			<h2>{title.value}</h2>
			<div className='row justify-content-evenly products'>
				{list?.value.map((item, index) => (
					<LandingProductItem key={index} data={item} />
				))}
			</div>
		</div>
	)
}

export default LandingProductsBox
