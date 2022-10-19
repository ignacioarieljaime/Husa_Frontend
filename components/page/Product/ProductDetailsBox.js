import React, { useEffect, useRef, useState } from 'react'
import ProductDetailLstItem from './ProductDetailLstItem'

function ProductDetailsBox({ pim: { data } }) {
	const [showMore, setShowMore] = useState(false)
	const spaceContainer = useRef()

	useEffect(() => {
		if (showMore) {
			spaceContainer.current.style.maxHeight =
				spaceContainer.current.scrollHeight + 'px'
		} else {
			spaceContainer.current.style.maxHeight = '0px'
		}
	}, [showMore])

	return (
		<div className={`specs  black-banner ${!showMore && 'close'}`}>
			<div ref={spaceContainer} className='specs-container'>
				{data.properties.map((item, index) => (
					<div key={`specs-${index}`} className='discription-list mb-10'>
						<h3 className='text-white'>{item.title}</h3>
						<dl className='row m-0'>
							{item.items.map((item, childIndex) => (
								<ProductDetailLstItem
									key={`space-${index}-${childIndex}`}
									title={item.title}
									value={item.value}
								/>
							))}
						</dl>
					</div>
				))}
			</div>
			<div className='text-center py-10'>
				<button
					className='btn btn-outline-light rounded-5 specs-btn'
					onClick={() => setShowMore(!showMore)}>
					<span className='d-block '>
						{showMore ? '	Hide Specs' : '		Full  Specs'}
						<i
							className={`fa-solid fa-2xs ${
								showMore ? 'fa-chevron-up' : 'fa-chevron-down'
							}`}></i>
					</span>
				</button>
			</div>
		</div>
	)
}

export default ProductDetailsBox
