import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

function SupportNewProductsSelectBox({
	items,
	selected,
	onClick,
	placeholder
}) {
	const [activeItem, setActiveItem] = useState({})
	const [collapseList, setCollapseList] = useState(true)

	useEffect(() => {
		let selectedItem = items.find(item => item?.category?.value === selected)
		if (selectedItem) setActiveItem(selectedItem)
	}, [selected])

	return (
		<div className='support_new_products_select_box'>
			{!collapseList && (
				<div
					className='support_new_products_select_box___backdrop'
					onClick={() => setCollapseList(prevState => !prevState)}></div>
			)}
			<div
				className='support_new_products_select_box___content'
				onClick={() => setCollapseList(prevState => !prevState)}>
				<div className='support_new_products_select_box___content___selected'>
					{activeItem?.image?.src || activeItem?.link?.title ? (
						<>
							<img
								src={activeItem?.image?.src}
								alt={activeItem?.image?.alt}
								className='support_new_products_select_box___content___selected___image'
							/>
							<span className='support_new_products_select_box___content___selected___title'>
								{activeItem?.link?.title}
							</span>
						</>
					) : (
						<span>{placeholder}</span>
					)}
				</div>
				<FontAwesomeIcon
					icon={faChevronDown}
					size='sm'
					className={`support_new_products_select_box___content___icon ${
						!collapseList ? 'open' : ''
					}`}
				/>
			</div>
			{!collapseList && (
				<ul className='support_new_products_select_box___list'>
					{items.map(item => (
						<li
							onClick={() => {
								onClick(item)
								setCollapseList(true)
							}}
							className={`support_new_products_select_box___list___item ${
								item?.category?.value === selected ? 'selected' : ''
							}`}>
							<img
								src={item?.image?.src}
								alt={item?.image?.alt}
								className='support_new_products_select_box___list___item___image'
							/>
							<span className='support_new_products_select_box___list___item___title'>
								{item?.link?.title}
							</span>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default SupportNewProductsSelectBox
