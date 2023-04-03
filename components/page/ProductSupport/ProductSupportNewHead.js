import CustomImage from 'components/common/CustomImage'
import DownloadIcon from 'components/icons/DownloadIcon'
import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function ProductSupportNewHead({ pim }) {
	const [firmwareData, setFirmwareData] = useState(null)
	const router = useRouter()

	useEffect(() => {
		if (router?.query?.model && typeof router?.query?.model === 'string')
			setFirmwareData(JSON.parse(router?.query?.model))
	}, [])

	return (
		<section className='product product-support-head p-0'>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-12 col-lg-6 product-gallery mb-12 mb-lg-0  text-center'>
						<div className='image-container '>
							{pim?.assets.find(item => item.order === 1) ? (
								<CustomImage
									wrapperClass={'product_support_head_image'}
									src={pim?.assets.find(item => item.order === 1)?.url}
									alt='featured image'
									// wrapperWidth='80%'
								/>
							) : (
								<CustomImage
									src={pim?.assets.find(item => item.type_id === 1)?.url}
									wrapperClass={'product_support_head_image'}
									alt='featured image'
									// wrapperWidth='80%'
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
												<a
													href={item.url ? item.url : '/'}
													download={true}
													className='download-able-item text-uppercase'>
													{item?.caption || item?.title ? (
														<>{item.caption ? item.caption : item.title}</>
													) : (
														'Documentes Guide'
													)}
													<div>
														<DownloadIcon color='#00AAA6' />
													</div>
												</a>
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
													<div>
														<DownloadIcon color='#00AAA6' />
													</div>
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
