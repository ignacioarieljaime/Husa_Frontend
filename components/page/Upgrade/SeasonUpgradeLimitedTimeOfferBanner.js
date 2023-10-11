import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { GetSingleProduct } from 'services/Product'

const SeasonUpgradeLimitedTimeOfferBanner = ({ data }) => {
	const [content, setContent] = useState(null)
	const [product, setProduct] = useState()
	const [showDialgo, setShowDialog] = useState(false)
	const router = useRouter()
	const ref = useRef()
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
			let response = await GetSingleProduct(router, content?.link?.value)
			setProduct(response?.data?.data)
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<section>
			<div
				id={data?.name + data?.id}
				ref={ref}
				style={{
					backgroundImage: `url(${content?.background?.src})`
				}}
				className='season_upgrade_limited_time_banner'>
				<div className='text_content pt-0 pt-md-4'>
					<p className='pretitle'>{content?.subtitle?.value}</p>
					<h4
						className='title'
						dangerouslySetInnerHTML={{
							__html: content?.title?.value
						}}></h4>
					<p
						className='text'
						dangerouslySetInnerHTML={{
							__html: content?.text?.value
						}}></p>

					{content?.link?.value ? (
						content?.link?.value.includes('openChannelAdvisor:') ? (
							<button
								onClick={() => setShowDialog(true)}
								className='n-btn medium danger-upgrade full_btn_md'>
								Shop Eligible Models
							</button>
						) : (
							<Link
								target={content?.link?.target ? content?.link?.target : '_self'}
								href={content?.link?.value}>
								<a
									target={
										content?.link?.target ? content?.link?.target : '_self'
									}
									className='n-btn medium danger-upgrade full_btn_md'>
									Shop Eligible Models
								</a>
							</Link>
						)
					) : null}
				</div>
				<img
					src={content?.image?.src}
					alt={content?.image?.alt}
					className='image'
				/>
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

export default SeasonUpgradeLimitedTimeOfferBanner
