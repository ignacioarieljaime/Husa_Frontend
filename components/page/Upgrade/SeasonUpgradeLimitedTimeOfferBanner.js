import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { GetSingleProduct } from 'services/Product'

const SeasonUpgradeLimitedTimeOfferBanner = ({ data }) => {
	const { structure } = data
	const [content, setContent] = useState(null)
	const [product, setProduct] = useState()
	const [showDialgo, setShowDialog] = useState(false)
	const router = useRouter()
	const ref = useRef()
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
					backgroundImage: `url(${structure?.background?.src})`
				}}
				className='season_upgrade_limited_time_banner'>
				<div className='text_content pt-0 pt-md-4'>
					<p className='pretitle'>{structure?.subtitle?.value}</p>
					<h4
						className='title'
						dangerouslySetInnerHTML={{
							__html: structure?.title?.value
						}}></h4>
					<div
						className='text'
						dangerouslySetInnerHTML={{
							__html: structure?.text?.value
						}}></div>

					{structure?.link?.value ? (
						structure?.link?.value.includes('openChannelAdvisor:') ? (
							<button
								onClick={() => setShowDialog(true)}
								className='n-btn medium danger-upgrade full_btn_md'>
								Shop Eligible Models
							</button>
						) : (
							<Link
								target={
									structure?.link?.target ? structure?.link?.target : '_self'
								}
								href={structure?.link?.value}>
								<a
									target={
										structure?.link?.target ? structure?.link?.target : '_self'
									}
									className='n-btn medium danger-upgrade full_btn_md'>
									Shop Eligible Models
								</a>
							</Link>
						)
					) : null}
				</div>
				<img
					src={structure?.image?.src}
					alt={structure?.image?.alt}
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
