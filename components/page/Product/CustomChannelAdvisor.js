import CustomImage from 'components/common/CustomImage'
import Spinner from 'components/common/Spinner'
import GoToPageIcon from 'components/icons/GoToPageIcon'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { GetSingleProduct } from 'services/Product'

const CustomChannelAdvisor = ({
	id,
	condition,
	productData,
	customizeRetailerId
}) => {
	const [product, setProduct] = useState(null)
	const [loading, setLoading] = useState(false)
	const [retailers, setRetailers] = useState()
	const router = useRouter()

	const getProduct = async () => {
		setLoading(true)
		try {
			const response = await GetSingleProduct(router, id)
			setProduct(response?.data?.data)
			customizeRetailerId && filterRetailer(response.data.data?.retailers)
			setLoading(false)
		} catch (error) {
			setLoading(false)
			console.log(error)
		}
	}

	useEffect(() => {
		if (condition) {
			getProduct()
		}
	}, [condition, id])

	const filterRetailer = _retailer => {
		let retailer = []
		_retailer.forEach(element => {
			if (customizeRetailerId?.find(item => item === element?.id)) {
				retailer.push(element)
			}
		})

		setRetailers(retailer)
	}

	return (
		<div className='custom_channel_advisor'>
			<div className='row flex-column justify-content-start align-items-center mb-2 mx-0 flex-nowrap'>
				<div className='col-3 w-100 custom_channel_advisor_product_image'>
					<CustomImage
						src={product?.image}
						alt={product?.name}
						wrapperWidth={'100%'}
						wrapperHeight={'256px'}
					/>
				</div>
				<div className='col-9 d-flex w-100 flex-column mb-5 align-items-center'>
					<p className='model'>model: {product?.model}</p>
					<p style={{ fontSize: '1.5rem' }} className='title text-center'>
						{product?.name}
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
			</div>
			{/* <div className='black_box'>
				<div style={{ width: '100%' }} className='white_box active'>
					BUY ONLINE
				</div>
			</div> */}
			<div>
				{!loading ? (
					<>
						{customizeRetailerId ? (
							retailers && product?.retailers.length > 0 ? (
								retailers.map((item, index) => (
									<div
										key={index}
										className='d-flex justify-content-between align-items-center my-2 mx-4 py-2 '>
										<CustomImage
											src={item?.Media?.url}
											alt={item?.name}
											wrapperWidth={'100px'}
										/>
										{/* <div>
									<div className='check'>Check Retailer</div>
									<div className='status'>Available</div>
								</div> */}

										<Link
											href={
												item?.pivot?.value ? item?.pivot?.value : item?.name
											}>
											<a
												data-retailer={item?.name}
												onClick={() =>
													window.dataLayer.push({
														event: 'view_product',
														eventData: {
															retailer: item?.name,
															productType: productData?.category?.name,
															productTitle: productData?.name,
															modal: productData?.model,
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
												className='buy_now'>
												Buy Now
											</a>
										</Link>
									</div>
								))
							) : (
								<p className='no_retailer'>Check Back Soon for Availability.</p>
							)
						) : product?.retailers && product?.retailers.length > 0 ? (
							product?.retailers.map((item, index) => (
								<div
									key={index}
									className='d-flex justify-content-between align-items-center my-2 mx-4 py-2 '>
									<CustomImage
										src={item?.Media?.url}
										alt={item?.name}
										wrapperWidth={'100px'}
									/>
									{/* <div>
									<div className='check'>Check Retailer</div>
									<div className='status'>Available</div>
								</div> */}

									<Link
										href={item?.pivot?.value ? item?.pivot?.value : item?.name}>
										<a
											data-retailer={item?.name}
											onClick={() =>
												window.dataLayer.push({
													event: 'view_product',
													eventData: {
														retailer: item?.name,
														productType: productData?.category?.name,
														productTitle: productData?.name,
														modal: productData?.model,
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
											className='buy_now'>
											Buy Now
										</a>
									</Link>
								</div>
							))
						) : (
							<p className='no_retailer'>Check Back Soon for Availability.</p>
						)}
					</>
				) : (
					<div className='py-5'>
						<Spinner />
					</div>
				)}
			</div>
		</div>
	)
}

export default CustomChannelAdvisor
