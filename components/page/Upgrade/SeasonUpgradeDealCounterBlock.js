import RedScratch from 'components/icons/ScratchVector'
import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import DealOfTheWeek from 'public/assets/images/upgrade-season/Deal-of-the-Week.png'
import Lockup from 'public/assets/images/upgrade-season/lockup.png'
import { useWindowSize } from 'hooks/useWindowSize'

const SeasonUpgradeDealCounterBlock = ({ data }) => {
	const [content, setContent] = useState(null)
	const windowSize = useWindowSize()
	useEffect(() => {
		setContent(data?.structure)
	}, [])

	return (
		<section>
			<div id={data?.name + data?.id} className='season_upgrade_deal_counter'>
				<div className='text-center py-4 px-2'>
					<img
						src={DealOfTheWeek.src}
						alt={content?.topImage?.alt}
						className='top_image'
					/>
				</div>
				<div>
					<ul className='weeks'>
						{content?.list?.value.map((item, index) => (
							<li
								key={index}
								className={`${
									index === content?.active?.value ? 'active' : ''
								}`}>
								{item?.title?.value}
								{index < content?.active?.value && <RedScratch />}
							</li>
						))}
					</ul>
				</div>
				<div className='product'>
					<div className='product_images'>
						<div className='product_top'>
							<img
								src={Lockup.src}
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
							src={
								windowSize[0] > 768
									? content?.list?.value[0]?.product_image?.src
									: content?.list?.value[0]?.product_image_responsive?.src
							}
							alt={
								windowSize[0] > 768
									? content?.list?.value[0]?.product_image?.alt
									: content?.list?.value[0]?.product_image_responsive?.alt
							}
						/>
					</div>
					<div className='product_info'>
						<div className='main_info'>
							<h4
								className='title'
								dangerouslySetInnerHTML={{
									__html: content?.list?.value[0]?.product_title?.value
								}}></h4>
							<div>
								<div
									className='off'
									dangerouslySetInnerHTML={{
										__html:
											'<p>Save</p>' +
											content?.list?.value[0]?.product_sale?.value
									}}></div>
								<div className='d-flex justify-content-start align-items-end gap-4 mb-n1'>
									<h3
										className='price'
										dangerouslySetInnerHTML={{
											__html: content?.list?.value[0]?.price?.value
										}}></h3>
									<div
										className='old_price'
										dangerouslySetInnerHTML={{
											__html: content?.list?.value[0]?.old_price?.value
										}}></div>
								</div>
							</div>
						</div>
						<div
							className='limited_offer'
							dangerouslySetInnerHTML={{
								__html: content?.list?.value[0]?.blackbox_text?.value
							}}></div>
						<ul className='product_specs'>
							{content?.list?.value[0]?.product_specs?.value.map(
								(item, index) => (
									<li
										dangerouslySetInnerHTML={{
											__html: item?.text?.value
										}}></li>
								)
							)}
						</ul>
						<Link href={'/'}>
							<a className='n-btn medium full_btn_md danger-upgrade'>
								Shop Deal
							</a>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SeasonUpgradeDealCounterBlock
