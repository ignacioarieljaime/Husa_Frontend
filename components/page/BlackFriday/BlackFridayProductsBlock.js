import React, { useEffect } from 'react'
import { useState } from 'react'
import BlackFridayProductsItem from './BlackFridayProductsItem'

const BlackFridayProductsBlock = ({ data }) => {
	const [content, setContent] = useState(null)
	useEffect(() => {
		console.log(data)
		setContent(data?.structure)
	}, [])

	return (
		<section id={data?.name + data?.id}>
			<div className='black_friday_products'>
				<div className='products_grid'>
					{content?.list?.value.map((item, index) => (
						<BlackFridayProductsItem key={index} data={item} />
					))}
				</div>
				<div
					className='note'
					dangerouslySetInnerHTML={{ __html: content?.text?.value }}></div>
			</div>
		</section>
	)
}

export default BlackFridayProductsBlock
