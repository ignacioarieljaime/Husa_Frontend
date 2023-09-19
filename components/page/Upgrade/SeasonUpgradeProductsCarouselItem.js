import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const SeasonUpgradeProductsCarouselItem = data => {
	const [showSizes, setShowSizes] = useState(false)
	const [activeSizeIndex, setActiveSizeIndex] = useState(0)

	const sizes = [
		{
			size: `43"`
		},
		{
			size: `50"`
		},
		{
			size: `55"`
		},
		{
			size: `65"`
		},
		{
			size: `75"`
		}
	]

	return (
		<div className={'item'}>
			<img
				src='https://files.hisense-usa.com/storage/hisense/asset/images/664c9310f296c2.webp'
				alt='tv'
				className='image'
			/>
			<div className='d-flex justify-content-between align-items-start gap-1'>
				<h6 className='title'>Product Title Goes Here</h6>
				<span className='new_label'>NEW</span>
			</div>
			<div className={`screen_size_selector ${showSizes ? 'show_sizes' : ''}`}>
				<div className='content'>
					<div className='sizes'>
						<ul className='size_list'>
							{sizes.map((item, index) => (
								<li
									key={index}
									className={activeSizeIndex === index ? 'active' : ''}
									onClick={() => setActiveSizeIndex(index)}
									style={{ width: 100 / sizes.length + '%' }}>
									{item.size}
								</li>
							))}
						</ul>
						<span
							style={{
								width: 100 / sizes.length + '%',
								transform: 'translateX(' + activeSizeIndex * 100 + '%)'
							}}
							className='indicator'>
							{sizes[activeSizeIndex].size}
						</span>
					</div>
					<div onClick={() => setShowSizes(true)} className='show_sizes_btn'>
						<span className='label'>Select Screen Size</span>
						<FontAwesomeIcon icon={faChevronDown} size='sm' />
					</div>
				</div>
			</div>
			<ul className='specs'>
				<li>4K Ultra HD TV</li>
				<li>Wide Color Gamut</li>
				<li>Dolby Vision</li>
				<li>2-Year Warranty</li>
			</ul>
			<div className='off'>Save $600</div>
			<div className='d-flex justify-content-start align-items-end gap-4 mb-n1'>
				<h4 className='price'>$1099.99</h4>
				<p className='old_price'>Was $1699.99</p>
			</div>
			<button className='n-btn medium black'>Shop Deal</button>
		</div>
	)
}

export default SeasonUpgradeProductsCarouselItem
