import CustomImage from 'components/common/CustomImage'
import DownloadIcon from 'components/icons/DownloadIcon'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import OpenNewPageIcon from 'public/assets/images/OpenNewPageIcon.png'
import SupportFirmwareLoading from 'components/common/SupportFirmwareLoading'
import { useSwiperSlide } from 'swiper/react'
import ExclamationMarkIcon from 'components/icons/ExclamationMarkIcon'

function ProductSupportNewHead({ pim }) {
	const [firmwareData, setFirmwareData] = useState(null)
	const [downloadLoading, setDownloadLoading] = useState(false)
	const [image, setImage] = useState('')
	const router = useRouter()
	const downloadRef = useRef()

	useEffect(() => {
		if (router?.query?.model && typeof router?.query?.model === 'string')
			setFirmwareData(JSON.parse(router?.query?.model))
		//
		if (pim?.image) {
			setImage(pim?.image)
		} else if (
			pim?.assets?.find(item => item.order === 1 && item.type_id === 1)
		) {
			setImage(pim?.assets.find(item => item.order === 1 && item.type_id)?.url)
		} else if (pim?.Category?.media?.url) {
			setImage(pim?.Category?.media?.url)
		}
	}, [])

	const downloadFile = async _url => {
		setDownloadLoading(true)
		const xhr = new XMLHttpRequest()
		download(_url)
		addListeners(xhr)
		xhr.open('GET', _url)
		xhr.send()
	}

	function download(link) {
		downloadRef.current.setAttribute('href', link)
		downloadRef.current.style.display = 'none'
		downloadRef.current.click()
	}

	function addListeners(xhr) {
		xhr.addEventListener('progress', handleEvent)
		xhr.addEventListener('error', handleEvent)
		xhr.addEventListener('abort', handleEvent)
	}

	function handleEvent(e) {
		if (e.type === 'progress' && e?.total) {
			setDownloadLoading(false)
		} else if (e.type === 'error' || e.type === 'abort') {
			setDownloadLoading(false)
		}
	}

	return (
		<section className='product_support_new_head'>
			<div className='content'>
				<div className='image_wrapper'>
					<img src={image} alt='featured image' />
				</div>
				<div className='info'>
					{/* <h1 className='fs-2 fw-bold mb-8'>{pim?.name}</h1>
						<p className='text-primary-new mb-10'>Model: {pim?.model}</p> */}
					<p className='series'>
						{' '}
						{pim?.custom_fields.find(item => item.title === 'h2 Title')?.value
							? pim?.custom_fields.find(item => item.title === 'h2 Title')
									?.value
							: pim?.custom_fields?.find(item => item.title === 'Product Type')
									?.value}
					</p>
					<h5 className='model'>
						{' '}
						{
							pim?.custom_fields.find(item => item.title === 'span Title')
								?.value
						}
					</h5>
					<h3 className='title'>{pim?.name}</h3>
					<p className='model_number'>{pim?.model}</p>
				</div>
			</div>
		</section>
		// <section className='product product-support-head p-0'>
		// 	{downloadLoading && <SupportFirmwareLoading />}

		// 	<div className='container'>
		// 		<a ref={downloadRef}></a>
		// 		<div className='row align-items-center'>
		// 			<div className='col-12 col-lg-6 product-gallery mb-12 mb-lg-0  text-center'>
		// 				<div className='image-container'>
		// 					<CustomImage
		// 						wrapperClass={'product_support_head_image'}
		// 						src={image}
		// 						alt='featured image'
		// 						objectFit='contain'
		// 						// wrapperWidth='80%'
		// 					/>
		// 				</div>
		// 			</div>
		// 			<div className='col-12 col-lg-6 ps-lg-10'>
		// 				<div className='d-flex flex-column justify-content-center align-items-start h-100'>
		// 					<h1 className='fs-2 fw-bold mb-8'>{pim?.name}</h1>
		// 					<p className='text-primary-new mb-10'>Model: {pim?.model}</p>
		// 					<p className='fs-base fw-normal mb-0'>Document Downloads</p>
		// 					<div className='row align-items-stretch w-100'>
		// 						{pim?.assets.map(
		// 							item =>
		// 								item.type_id === 3 && (
		// 									<div className='col-12 col-sm-6 py-3'>
		// 										{item.caption === 'Installation Request' ? (
		// 											<Link
		// 												target='_self'
		// 												href={'/televisions/laser-tv/installation-request'}>
		// 												<a className='download-able-item text-uppercase'>
		// 													{item?.caption || item?.title ? (
		// 														<>{item.caption ? item.caption : item.title}</>
		// 													) : (
		// 														'Documentes Guide'
		// 													)}
		// 													{/* <DownloadIcon color='#00AAA6' /> */}
		// 													<img src={OpenNewPageIcon.src} />
		// 												</a>
		// 											</Link>
		// 										) : (
		// 											<a
		// 												href={item.url ? item.url : '/'}
		// 												download={true}
		// 												className='download-able-item text-uppercase'>
		// 												{item?.caption || item?.title ? (
		// 													<>{item.caption ? item.caption : item.title}</>
		// 												) : (
		// 													'Documentes Guide'
		// 												)}
		// 												<DownloadIcon color='#00AAA6' />
		// 											</a>
		// 										)}
		// 									</div>
		// 								)
		// 						)}
		// 					</div>
		// 					{firmwareData && (
		// 						<>
		// 							<p className='fs-base fw-normal mb-0 mt-7'>
		// 								Firmware and Software
		// 							</p>
		// 							<p className='d-flex align-items-start' style={{ fontSize: '14px', color: '#ff0000' }}>
		// 								<ExclamationMarkIcon />
		// 								This firmware is intended only for the model that is listed
		// 							</p>
		// 							<div className='row align-items-stretch w-100 mb-8'>
		// 								{firmwareData.map((item, index) => (
		// 									<div
		// 										className='col-12 col-sm-6 py-3 support_firmware_btn'
		// 										key={index}>
		// 										<a className='download-able-item text-uppercase'>
		// 											{item?.title || item?.original_name ? (
		// 												<>{item.title ? item.title : item.original_name}</>
		// 											) : (
		// 												'Documentes Guide'
		// 											)}
		// 											<DownloadIcon color='#00AAA6' />
		// 											<input
		// 												onClick={() => downloadFile(item.download_link)}
		// 												class='xhr success'
		// 												type='button'
		// 												name='xhr'
		// 												value='Click to start XHR (success)'
		// 											/>
		// 										</a>
		// 									</div>
		// 								))}
		// 							</div>
		// 						</>
		// 					)}
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </section>
	)
}

export default ProductSupportNewHead
