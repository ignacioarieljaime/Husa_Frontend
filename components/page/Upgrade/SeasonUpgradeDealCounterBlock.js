import RedScratch from 'components/icons/ScratchVector'
import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const SeasonUpgradeDealCounterBlock = ({ data }) => {
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(data?.structure)
	}, [])

	const weeks = [
		{ title: 'week 1', active: false, passed: true },
		{ title: 'week 2', active: true, passed: false },
		{ title: 'week 3', active: false, passed: false },
		{ title: 'week 4', active: false, passed: false },
		{ title: 'week 5', active: false, passed: false },
		{ title: 'week 6', active: false, passed: false },
		{ title: 'week 7', active: false, passed: false }
	]

	return (
		<section>
			<div id={data?.name + data?.id} className='season_upgrade_deal_counter'>
				<div className='text-center py-4 px-2'>
					<img
						// src={content?.background?.src}
						src='https://files.hisense-usa.com/storage/hisense/asset/images/6637383235bef2.webp'
						alt={content?.topImage?.alt}
						className='top_image'
					/>
				</div>
				<div>
					<ul className='weeks'>
						{weeks.map((item, index) => (
							<li key={index} className={`${item.active ? 'active' : ''}`}>
								{item.title}
								{item.passed && <RedScratch />}
							</li>
						))}
					</ul>
				</div>
				<div className='product'>
					<div className='product_images'>
						<div className='product_top'>
							<img
								src='https://files.hisense-usa.com/storage/hisense/asset/images/6637383235bef2.webp'
								alt={content?.topImage?.alt}
								className='image'
							/>
							<div>
								<p className='counter_label'>DEAL EXPIRES IN</p>
								<div className='counter'>
									<div>
										<div>06</div>
										<div>DAYS</div>
									</div>
									<div>
										<div>12</div>
										<div>HRS</div>
									</div>
									<div>
										<div>34</div>
										<div>MINS</div>
									</div>
									<div>
										<div>57</div>
										<div>SECS</div>
									</div>
								</div>
							</div>
						</div>
						<img
							className='image'
							src='https://files.hisense-usa.com/storage/hisense/asset/images/6642f24017c5f1.webp'
						/>
					</div>
					<div className='product_info'>
						<div className='main_info'>
							<h4 className='title'>
								Hisense Class U8 Series Mini-LED ULED 4K TV Google TV
							</h4>
							<div className='sizes_box'>
								<ul className='sizes'>
									<li>43”</li>
									<li>50”</li>
									<li>50”</li>
									<li>65”</li>
									<li>75”</li>
									<li>85”</li>
								</ul>
								<span className='size_indicator'></span>
							</div>
							<div>
								<span className='off'>Save $600</span>
								<h3 className='price'>$1099.99</h3>
								<p className='old_price'>Was $1699.99</p>
							</div>
						</div>
						<div className='limited_offer'>
							<p>Plus Limited Time Offer!</p>
							<p>Get NBA 2K24 when you buy this TV before 11/12/23</p>
						</div>
						<ul className='product_specs'>
							<li>4K ULED TV with 2 Year Warranty</li>
							<li>Mini-LED Pro w/ Full Array Local Dimming</li>
							<li>QLED | Quantum Dot Color</li>
							<li>144Hz Game Mode Pro</li>
						</ul>
						<Link href={'/'}>
							<a className='shop_btn'>Shop Deal</a>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SeasonUpgradeDealCounterBlock
