import React, { useEffect, useRef, useState } from 'react'
import ProductDetailLstItem from './ProductDetailLstItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

function ProductDetailsBox({ pim, data }) {
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

	useEffect(() => {
		if (

			window.location.hash === `#${data?.name + data?.id}`
		) {
			setShowMore(true)
		}

	}, [window.location.hash])

	return (
		<div
			id={data?.name + data?.id}
			className={`specs-detail  black-banner ${!showMore && 'close'}`}>
			{/* <h2 className='fs-2tx text-white pt-20 pb-6 text-center'>
				{data?.structure?.title?.value}
			</h2> */}
			<div ref={spaceContainer} className='specs-container'>
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
			<div className='text-center '>
				<button
					className='btn btn-outline-light rounded-5 specs-btn'
					onClick={() => setShowMore(!showMore)}>
					<span className='d-block  text-uppercase'>
						{showMore ? '	Hide Specs' : '		Full  Specs'}
						{
							showMore ? <FontAwesomeIcon icon={faChevronUp} size={'2xs'} className={"ms-3"} /> :
								<FontAwesomeIcon icon={faChevronDown} size={'2xs'} className={"ms-3"} />
						}
					</span>
				</button>
			</div>
		</div>
	)
}

export default ProductDetailsBox
