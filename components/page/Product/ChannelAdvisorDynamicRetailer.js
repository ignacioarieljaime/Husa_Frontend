import axios from 'axios'
import CustomImage from 'components/common/CustomImage'
import Spinner from 'components/common/Spinner'
import GoToPageIcon from 'components/icons/GoToPageIcon'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ChannelAdvisorLocally from './ChannelAdvisorLocally'

const ChannelAdvisorDynamicRetailer = ({ model, condition, productData }) => {
	return (
		<div className='custom_channel_advisor'>
			{!condition ? (
				<Spinner />
			) : (
				<>
					<div class='ps-widget' ps-sku={model}></div>{' '}
					{/* <div className='row justify-content-start flex-column align-items-center mb-2 mx-0 flex-nowrap'>
						<div className='col-3 w-100 custom_channel_advisor_product_image'>
							<CustomImage
								src={data?.ProductImage}
								alt={data?.Description}
								wrapperWidth={'100%'}
								wrapperHeight={'256px'}
							/>
						</div>
						<div className='col-9 d-flex w-100 flex-column mb-5 text-center align-items-center'>
							<p className='model'>model: {data?.ModelName}</p>
							<p style={{ fontSize: '1.5rem' }} className='title text-center'>
								{data?.Description}
							</p>
						</div>
						<div className='link_box'>
							<h5>Hisense Authorized Dealers</h5>
							<Link href={'/authorized-retailers'}>
								<a>
									Why Buy from an Authorized Dealer? <GoToPageIcon />
								</a>
							</Link>
						</div>
					</div> */}
					{/* <div className='black_box'>
						<div
							style={{
								width: '100%'
							}}
							className={`white_box ${!isLocally && 'active'}`}>
							<button onClick={() => setIsLocally(false)}>BUY ONLINE</button>
						</div> */}
					{/* <div className={`white_box  ${isLocally && 'active'}`}>
							<button
								className='tab_button'
								disabled={
									!process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY ? true : false
								}
								onClick={() => setIsLocally(true)}>
								FIND LOCALLY
							</button>
						</div> */}
					{/* </div> */}
					{/* {isLocally ? (
						<ChannelAdvisorLocally productData={productData} model={model} />
					) : (
						<div>
							{data?.OnlineRetailers && data?.OnlineRetailers.length > 0 ? (
								data?.OnlineRetailers.map((item, index) => (
									<div
										key={index}
										className='d-flex justify-content-between align-items-center my-2 mx-4 py-2 '>
										<img
											src={item?.LogoUrl}
											width={'100'}
											height={'100'}
											style={{ objectFit: 'contain' }}
										/>
										<Link
											target={'_blank'}
											href={item?.ProductLink ? item?.ProductLink : '/'}>
											<a
												data-retailer={item?.Name}
												onClick={() =>
													window.dataLayer.push({
														event: 'view_product',
														eventData: {
															retailer: item?.Name,
															productType:
																productData?.category?.name ||
																productData?.Category?.name,
															productTitle: productData?.name,
															modal: productData?.model,
															subcategory:
																Array.isArray(productData?.series) ||
																!productData?.series
																	? 'Unknown'
																	: productData?.series,
															size: productData?.customFields?.find(
																item => item.type_name === 'TV filters'
															)
																? productData?.customFields
																		?.find(
																			item => item.type_name === 'TV filters'
																		)
																		?.custom_fields.find(
																			item => item.name === 'Size class'
																		)?.value
																: productData?.custom_fields?.find(
																		item => item.title === 'Size class'
																  )
																? productData?.custom_fields?.find(
																		item => item.title === 'Size class'
																  )?.value
																: ''
														}
													})
												}
												className={`buy_now ${item.Name}`}>
												Buy Now
											</a>
										</Link>
									</div>
								))
							) : (
								<p className='no_retailer'>Check Back Soon for Availability.</p>
							)}
						</div>
					)} */}
				</>
			)}
		</div>
	)
}

export default ChannelAdvisorDynamicRetailer
