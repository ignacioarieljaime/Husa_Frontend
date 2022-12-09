import React, { useState, useRef, useEffect } from 'react'
import { useWindowSize } from '../../../hooks/useWindowSize'
import ProductDetailLstItem from '../Product/ProductDetailLstItem'

const Specs = ({ pim, data }) => {
	let { structure } = data
	// const [showMore, setShowMore] = useState(false)
	// const spaceContainer = useRef()
	// const widthSize = useWindowSize()[0]

	// useEffect(() => {
	// 	if (showMore) {
	// 		spaceContainer.current.style.maxHeight =
	// 			spaceContainer.current.scrollHeight + 'px'
	// 	} else {
	// 		spaceContainer.current.style.maxHeight = '0px'
	// 	}
	// }, [showMore, widthSize])

	return (
		<section className='l9g'>
			<div className={`specs specs-l-nine-g px-4 px-md-20 black-banner specs_box_data `}>
				<h2 className='fs-md-2tx text-white text-center'>
					{structure?.title?.value}
					<span className=' text-primary ms-2'>
						{structure?.coloredTitle?.value}
					</span>
				</h2>
				<p className='text-center specs_title_paragraph '>
					{structure?.greyText?.value}
				</p>
				{/* <div ref={spaceContainer} className='specs-container'>
					{pim?.properties.map((item, index) => (
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
				</div> */}
			</div>
		</section>
	)
}

export default Specs
