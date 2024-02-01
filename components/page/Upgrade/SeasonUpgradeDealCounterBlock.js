import RedScratch from 'components/icons/ScratchVector'
import Link from 'next/link'
import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import DealOfTheWeek from 'public/assets/images/upgrade-season/Deal-of-the-Week.png'
import Lockup from 'public/assets/images/upgrade-season/lockup.png'
import { useWindowSize } from 'hooks/useWindowSize'
import ModalChanelAdviser from '../Product/ModalChanelAdviser'
import { GetSingleProduct } from 'services/Product'
import { useRouter } from 'next/router'
import { useCountdown } from 'hooks/useCountdown'
import axios from 'axios'
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css'
import SeasonUpgradeDealCounterBlockWeekItem from './SeasonUpgradeDealCounterBlockWeekItem'
import { RouteHandler } from 'utils/routeHandler'
const SeasonUpgradeDealCounterBlock = ({ data }) => {
	const { structure } = data
	const [content, setContent] = useState(null)
	const windowSize = useWindowSize()
	const [showDialgo, setShowDialog] = useState(false)
	const [product, setProduct] = useState()
	const router = useRouter()
	const ref = useRef()

	const [days, hours, minutes, seconds] = useCountdown(
		content?.list?.value[content?.active?.value]?.end?.value
	)

	useEffect(() => {
		setContent(structure)
		if (router.asPath.includes(data?.name + data?.id)) {
			setTimeout(() => {
				ref.current.scrollIntoView()
			}, 1000)
		}
	}, [])

	useEffect(() => {
		getProduct()
	}, [content])

	async function getProduct() {
		try {
			let response = await axios.get(
				`${process.env.PIM_API_ROUTE}/getProductsList?search=${
					content?.list?.value[content?.active?.value]?.button?.value.split(
						':'
					)[1]
				}&brand_id=${process.env.NEXT_PUBLIC_BRAND_ID}`
			)
			if (response?.data?.data.length) setProduct(response?.data?.data[0])
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<section>
			<div
				id={data?.name + data?.id}
				ref={ref}
				className={`season_upgrade_deal_counter ${
					structure?.template?.value === 'BlackFriday' ? 'black_friday' : ''
				}`}>
				{content?.template?.value !== 'BlackFriday' && (
					<>
						<div className='text-center py-4 px-2'>
							<img
								src={DealOfTheWeek.src}
								alt={structure?.topImage?.alt}
								className='top_image'
							/>
						</div>
						<div className='weeks_wrapper'>
							<Swiper
								grabCursor={false}
								slidesPerView={'auto'}
								slidesPerGroup={1}
								spaceBetween={24}
								navigation={false}
								className={`weeks`}>
								{content?.list?.value.map((item, index) => (
									<SwiperSlide key={index} className='w-fit'>
										<SeasonUpgradeDealCounterBlockWeekItem
											key={index}
											active={index === structure?.active?.value}
											title={item?.title?.value}
											activeIndex={structure?.active?.value}
											scroll={structure?.active?.value > 2}
											past={index < structure?.active?.value}
										/>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</>
				)}
				<div className='product'>
					<div
						className={`product_images ${
							structure?.template?.value !== 'BlackFriday'
								? ''
								: 'justify-content-end gap-0'
						}`}>
						{structure?.template?.value !== 'BlackFriday' ? (
							<div className='product_top'>
								<img
									src={Lockup.src}
									alt={structure?.topImage?.alt}
									className='image'
								/>
								<div>
									<p className='counter_label'>DEAL EXPIRES IN</p>
									<div className='counter'>
										<div>
											<div>{days}</div>
											<div>DAYS</div>
										</div>
										<div>
											<div>{hours}</div>
											<div>HRS</div>
										</div>
										<div>
											<div>{minutes}</div>
											<div>MINS</div>
										</div>
										<div>
											<div>{seconds}</div>
											<div>SECS</div>
										</div>
									</div>
									<p className='time'>Eastern Standard Time</p>
								</div>
							</div>
						) : (
							<h4
								className='title mb-0'
								dangerouslySetInnerHTML={{
									__html:
										structure?.list?.value[structure?.active?.value]
											?.product_title?.value
								}}></h4>
						)}
						{structure?.list?.value[structure?.active?.value]?.button?.value ? (
							structure?.list?.value[
								structure?.active?.value
							]?.button?.value.includes('openChannelAdvisor:') ? (
								<img
									onClick={() => setShowDialog(true)}
									className='image'
									style={{ cursor: 'pointer' }}
									src={
										windowSize[0] > 768
											? structure?.list?.value[structure?.active?.value]
													?.product_image?.src
											: structure?.list?.value[structure?.active?.value]
													?.product_image_responsive?.src
									}
									alt={
										windowSize[0] > 768
											? structure?.list?.value[structure?.active?.value]
													?.product_image?.alt
											: structure?.list?.value[structure?.active?.value]
													?.product_image_responsive?.alt
									}
								/>
							) : (
								<Link
									target={
										structure?.list?.value[structure?.active?.value]?.button
											?.target
											? structure?.list?.value[structure?.active?.value]?.button
													?.target
											: '_self'
									}
									href={
										structure?.list?.value[structure?.active?.value]?.button
											?.value
									}>
									<a
										target={
											structure?.list?.value[structure?.active?.value]?.button
												?.target
												? structure?.list?.value[structure?.active?.value]
														?.button?.target
												: '_self'
										}>
										<img
											className='image'
											src={
												windowSize[0] > 768
													? structure?.list?.value[structure?.active?.value]
															?.product_image?.src
													: structure?.list?.value[structure?.active?.value]
															?.product_image_responsive?.src
											}
											alt={
												windowSize[0] > 768
													? structure?.list?.value[structure?.active?.value]
															?.product_image?.alt
													: structure?.list?.value[structure?.active?.value]
															?.product_image_responsive?.alt
											}
										/>
									</a>
								</Link>
							)
						) : (
							<img
								className='image'
								src={
									windowSize[0] > 768
										? structure?.list?.value[structure?.active?.value]
												?.product_image?.src
										: structure?.list?.value[structure?.active?.value]
												?.product_image_responsive?.src
								}
								alt={
									windowSize[0] > 768
										? structure?.list?.value[structure?.active?.value]
												?.product_image?.alt
										: structure?.list?.value[structure?.active?.value]
												?.product_image_responsive?.alt
								}
							/>
						)}
					</div>
					<div className='product_info'>
						<div className='main_info'>
							{structure?.template?.value !== 'BlackFriday' && (
								<h4
									className='title'
									dangerouslySetInnerHTML={{
										__html:
											structure?.list?.value[structure?.active?.value]
												?.product_title?.value
									}}></h4>
							)}
							<div>
								<div
									className='off'
									dangerouslySetInnerHTML={{
										__html:
											'<p>Save</p>' +
											structure?.list?.value[structure?.active?.value]
												?.product_sale?.value
									}}></div>
								<div
									className={`d-flex  mb-n2 mb-md-n3 ${
										structure?.template?.value === 'BlackFriday'
											? ' gap-3 flex-column justify-content-start align-items-start'
											: ' gap-4 justify-content-start align-items-end'
									}`}>
									<h3
										className='price'
										dangerouslySetInnerHTML={{
											__html:
												structure?.list?.value[structure?.active?.value]?.price
													?.value
										}}></h3>
									<div
										className='old_price'
										dangerouslySetInnerHTML={{
											__html:
												structure?.list?.value[structure?.active?.value]
													?.old_price?.value
										}}></div>
								</div>
							</div>
						</div>
						{structure?.template?.value !== 'BlackFriday' && (
							<div
								className='limited_offer'
								dangerouslySetInnerHTML={{
									__html:
										structure?.list?.value[structure?.active?.value]
											?.blackbox_text?.value
								}}></div>
						)}
						<ul className='product_specs'>
							{structure?.list?.value[
								structure?.active?.value
							]?.product_specs?.value.map((item, index) => (
								<li
									key={index}
									dangerouslySetInnerHTML={{
										__html: item?.text?.value
									}}></li>
							))}
						</ul>
						{structure?.list?.value[structure?.active?.value]?.button?.value ? (
							structure?.list?.value[
								structure?.active?.value
							]?.button?.value.includes('openChannelAdvisor:') ? (
								<button
									onClick={() => setShowDialog(true)}
									className='n-btn medium full_btn_md danger-upgrade'>
									Shop Deal
								</button>
							) : (
								<Link
									target={
										structure?.list?.value[structure?.active?.value]?.button
											?.target
											? structure?.list?.value[structure?.active?.value]?.button
													?.target
											: '_self'
									}
									href={
										structure?.list?.value[structure?.active?.value]?.button
											?.value
									}>
									<a
										target={
											structure?.list?.value[structure?.active?.value]?.button
												?.target
												? structure?.list?.value[structure?.active?.value]
														?.button?.target
												: '_self'
										}
										className='n-btn medium full_btn_md danger-upgrade'>
										Shop Deal
									</a>
								</Link>
							)
						) : null}
					</div>
				</div>
			</div>
			{product && (
				<ModalChanelAdviser
					product={product}
					productId={product.id}
					type={product.buy_status}
					condition={showDialgo}
					handler={setShowDialog}
					model={product?.model}
				/>
			)}
		</section>
	)
}

export default SeasonUpgradeDealCounterBlock
