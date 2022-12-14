import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import ProductDetailLstItem from './ProductDetailLstItem'

function ProductDetailsBox({ pim, data }) {
	let { structure } = data
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

	// useEffect(() => {
	// 	if (window.location.hash === `#${data?.name + data?.id}`) {
	// 		setShowMore(true)
	// 	}
	// }, [window.location.hash])

	return (
		<div
			id={data?.name + data?.id}
			className={`specs-detail ${
				structure?.theme?.value !== 'light' && 'black-banner'
			}  ${!showMore && 'close'}`}>
			{/* <h2 className='fs-2tx text-white pt-20 pb-6 text-center'>
				{data?.structure?.title?.value}
			</h2> */}
			<div ref={spaceContainer} className='specs-container'>
				{pim?.properties.map((item, index) => (
					<div key={`specs-${index}`} className='discription-list mb-10'>
						<h3
							className={
								structure?.theme?.value === 'light'
									? 'text-black'
									: 'text-white'
							}>
							{item.title}
						</h3>
						<dl className='row m-0'>
							{item.items.map((item, childIndex) => (
								<ProductDetailLstItem
									theme={structure?.theme?.value}
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
					className={`btn ${
						structure?.theme?.value === 'light'
							? 'btn-outline-dark bg-black text-white'
							: 'btn-outline-light'
					}  rounded-5 specs-btn`}
					onClick={() => setShowMore(!showMore)}>
					<span className=' '>
						<span className='ms-2'>
							{showMore ? '	Hide Specs' : 'Full  Specs'}
						</span>
						<FontAwesomeIcon
							icon={showMore ? faChevronUp : faChevronDown}
							size={`fa-2xs `}
						/>
					</span>
				</button>
			</div>
		</div>
	)
}

export default ProductDetailsBox
