import axios from 'axios'
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
	model,
	customizeRetailerId
}) => {
	const [product, setProduct] = useState(null)
	const [loading, setLoading] = useState(false)
	const [channelAdvisor, setChannelAdvisor] = useState()
	const [retailers, setRetailers] = useState([])
	const router = useRouter()

	useEffect(() => {
		if (condition) {
			getChannelAdvisorData()
		}
	}, [condition, id])

	const getChannelAdvisorData = async () => {
		setLoading(true)
		setRetailers('loading')
		try {
			let response = await axios(
				`https://productcatalog.channeladvisor.com/api/v1/offers/models/${model}?maxLocationsPerRetailer=25&maxResultsPerRetailer=25&IncludeVariations=true&tag=Hisense%20US%20EN%20Widget`,
				{
					headers: {
						Authorization:
							'api-key ' + process.env.NEXT_PUBLIC_CHANNEL_ADVISOR_TOKEN
					}
				}
			)
			setChannelAdvisor(response.data)
			await getProduct(response.data)
		} catch (error) {
			await getProduct()
			console.log(error)
		}
	}

	const getProduct = async _channelAdvisor => {
		try {
			const response = await GetSingleProduct(router, id)
			setProduct(response?.data?.data)
			if (customizeRetailerId) {
				filterRetailer(response.data.data?.retailers)
				setLoading(false)
			} else {
				orderingRetailer(_channelAdvisor, response?.data?.data)
				setLoading(false)
			}
		} catch (error) {
			setLoading(false)
			console.log(error)
		}
	}

	const orderingRetailer = (_channelAdvisor, _product) => {
		let retailer = []

		_product?.retailers?.forEach(element => {
			if (element?.pivot?.type === 'internal') {
				retailer.push(element)
			} else {
				let channelData = _channelAdvisor?.OnlineRetailers?.find(
					item => item.Name.toLowerCase() === element?.name?.toLowerCase()
				)
				if (channelData) {
					retailer.push({
						...element,
						pivot: {
							...element.pivot,
							value: channelData?.CartLink
						}
					})
				}
			}
		})
		setRetailers(retailer)
	}

	const filterRetailer = _retailer => {
		let retailer = []
		_retailer.forEach(element => {
			if (customizeRetailerId?.find(item => item.id === element?.id)) {
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
						wrapperWidth={'100%'}
						alt={product?.name}
						objectFit='contain'
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
				{retailers !== 'loading' ? (
					retailers.length > 0 ? (
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
									href={item?.pivot?.value ? item?.pivot?.value : item?.name}>
									<a
										data-retailer={item?.name}
										onClick={() =>
											window.dataLayer.push({
												event: 'view_product',
												eventData: {
													retailer: item?.name,
													productType:
														productData?.category?.name ||
														productData?.Category?.name,
													productTitle: productData?.name,
													subcategory:
														Array.isArray(productData?.series) ||
														!productData?.series
															? 'Unknown'
															: productData?.series,
													modal: productData?.model,
													size: productData?.customFields?.find(
														item => item.type_name === 'TV filters'
													)
														? productData?.customFields
																?.find(item => item.type_name === 'TV filters')
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
