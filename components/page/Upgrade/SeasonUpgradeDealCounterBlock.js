import RedScratch from 'components/icons/ScratchVector'
import Link from 'next/link'
import React from 'react'
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

const SeasonUpgradeDealCounterBlock = ({ data }) => {
	const [content, setContent] = useState(null)
	const windowSize = useWindowSize()
	const [showDialgo, setShowDialog] = useState(false)
	const [product, setProduct] = useState()
	const router = useRouter()

	const [days, hours, minutes, seconds] = useCountdown(
		content?.list?.value[content?.active?.value]?.end?.value
	)

	useEffect(() => {
		setContent(data?.structure)
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
				`https://impim.dev-api.hisenseportal.com/api/cms/getProductsList?search=${
					content?.list?.value[content?.active?.value]?.button?.value
				}&brand_id=3`
			)
			if (response?.data?.data.length) setProduct(response?.data?.data[0])
		} catch (error) {
			console.log(error)
		}
	}

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
				{/* <div>
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
				</div> */}
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
						<img
							className='image'
							src={
								windowSize[0] > 768
									? content?.list?.value[content?.active?.value]?.product_image
											?.src
									: content?.list?.value[content?.active?.value]
											?.product_image_responsive?.src
							}
							alt={
								windowSize[0] > 768
									? content?.list?.value[content?.active?.value]?.product_image
											?.alt
									: content?.list?.value[content?.active?.value]
											?.product_image_responsive?.alt
							}
						/>
					</div>
					<div className='product_info'>
						<div className='main_info'>
							<h4
								className='title'
								dangerouslySetInnerHTML={{
									__html:
										content?.list?.value[content?.active?.value]?.product_title
											?.value
								}}></h4>
							<div>
								<div
									className='off'
									dangerouslySetInnerHTML={{
										__html:
											'<p>Save</p>' +
											content?.list?.value[content?.active?.value]?.product_sale
												?.value
									}}></div>
								<div className='d-flex justify-content-start align-items-end gap-4 mb-n2 mb-md-n3'>
									<h3
										className='price'
										dangerouslySetInnerHTML={{
											__html:
												content?.list?.value[content?.active?.value]?.price
													?.value
										}}></h3>
									<div
										className='old_price'
										dangerouslySetInnerHTML={{
											__html:
												content?.list?.value[content?.active?.value]?.old_price
													?.value
										}}></div>
								</div>
							</div>
						</div>
						<div
							className='limited_offer'
							dangerouslySetInnerHTML={{
								__html:
									content?.list?.value[content?.active?.value]?.blackbox_text
										?.value
							}}></div>
						<ul className='product_specs'>
							{content?.list?.value[
								content?.active?.value
							]?.product_specs?.value.map((item, index) => (
								<li
									key={index}
									dangerouslySetInnerHTML={{
										__html: item?.text?.value
									}}></li>
							))}
						</ul>
						<button
							onClick={() => setShowDialog(true)}
							className='n-btn medium full_btn_md danger-upgrade'>
							Shop Deal
						</button>
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
