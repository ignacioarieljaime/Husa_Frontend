import CustomImage from 'components/common/CustomImage'
import DownloadIcon from 'components/icons/DownloadIcon'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function ProductSupportNewHead({ pim }) {
	const [firmwareData, setFirmwareData] = useState(null)
	const [image, setImage] = useState(null)
	const router = useRouter()

	useEffect(() => {
		if (router?.query?.model && typeof router?.query?.model === 'string')
			setFirmwareData(JSON.parse(router?.query?.model))
		// mohammad I'm not responsible for this code block, ask mohsen for it   /   definetly ask MOHSEN!!!!!!!!!!!!!!!!!!!
		if (pim?.assets.find(item => item.order === 1)) {
			setImage(pim?.assets.find(item => item.order === 1)?.url)
		} else if (pim?.assets.find(item => item.type_id === 1)) {
			setImage(pim?.assets.find(item => item.type_id === 1)?.url)
		} else {
			setImage(pim?.image)
		}
	}, [])

	return (
		<section className='product product-support-head p-0'>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-12 col-lg-6 product-gallery mb-12 mb-lg-0  text-center'>
						<div className='image-container '>
							{image && (
								<CustomImage
									wrapperClass={'product_support_head_image'}
									src={image}
									alt='featured image'
								/>
							)}
						</div>
					</div>
					<div className='col-12 col-lg-6 ps-lg-10'>
						<div className='d-flex flex-column justify-content-center align-items-start h-100'>
							<h2 className='fs-2 fw-bold mb-8'>{pim?.name}</h2>
							<p className='text-primary-new mb-10'>Model: {pim?.model}</p>
							<p className='fs-base fw-normal mb-0'>Document Downloads</p>
							<div className='row align-items-stretch w-100'>
								{pim?.assets.map(
									item =>
										item.type_id === 3 && (
											<div className='col-12 col-sm-6 py-3'>
												{item.caption === 'Installation Request' ? (
													<Link
														target='_self'
														href={'/televisions/laser-tv/installation-request'}>
														<a className='download-able-item text-uppercase'>
															{item?.caption || item?.title ? (
																<>{item.caption ? item.caption : item.title}</>
															) : (
																'Documentes Guide'
															)}
															<DownloadIcon color='#00AAA6' />
														</a>
													</Link>
												) : (
													<a
														href={item.url ? item.url : '/'}
														download={true}
														className='download-able-item text-uppercase'>
														{item?.caption || item?.title ? (
															<>{item.caption ? item.caption : item.title}</>
														) : (
															'Documentes Guide'
														)}
														<DownloadIcon color='#00AAA6' />
													</a>
												)}
											</div>
										)
								)}
							</div>
							{firmwareData && (
								<>
									<p className='fs-base fw-normal mb-0 mt-7'>
										Firmware and Software
									</p>
									<div className='row align-items-stretch w-100 mb-8'>
										{firmwareData.map((item, index) => (
											<div className='col-12 col-sm-6 py-3' key={index}>
												<a
													href={item.download_link ? item.download_link : '/'}
													download={true}
													className='download-able-item text-uppercase'>
													{item?.title || item?.original_name ? (
														<>{item.title ? item.title : item.original_name}</>
													) : (
														'Documentes Guide'
													)}
													<DownloadIcon color='#00AAA6' />
												</a>
											</div>
										))}
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProductSupportNewHead
