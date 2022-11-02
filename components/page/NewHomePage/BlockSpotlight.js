import React, { useState, useEffect } from 'react'
import BlockSpotlightItem from './BlockSpotlightItem'

const BlockSpotlight = ({ data: { structure } }) => {
	const [activeProduct, setActiveProduct] = useState()

	useEffect(() => {
		setActiveProduct(structure.tabs.value[0].title.value)
	}, [])

	return (
		<section>
			<div className='container spotlight-releases'>
				<h2 className='title'>{structure?.title?.value}</h2>
				<div className='product-select'>
					{structure?.tabs?.value.map((item, index) => (
						<button
							key={index}
							onClick={() => setActiveProduct(item?.title?.value)}
							className={activeProduct === item?.title?.value ? 'active' : ''}>
							{item?.title?.value}
						</button>
					))}
				</div>
				<div className='product-list'>
					{structure?.tabs?.value
						.filter(item => activeProduct === item?.title?.value)[0]
						.products.value.map((item, index) => (
							<BlockSpotlightItem
								key={index}
								title={item?.title?.value}
								description={item?.description?.value}
								models={item?.model?.value}
								link={item?.link}
								image={item?.image}
							/>
						))}
				</div>
			</div>
		</section>
	)
}

export default BlockSpotlight
