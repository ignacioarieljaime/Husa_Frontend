import CustomImage from 'components/common/CustomImage'
import Spinner from 'components/common/Spinner'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { GetSingleProduct } from 'services/Product'

const CustomChannelAdvisor = ({ id, condition, productData }) => {
	const [product, setProduct] = useState(null)
	const [loading, setLoading] = useState(false)
	const router = useRouter()

	const getProduct = async () => {
		setLoading(true)
		try {
			const response = await GetSingleProduct(router, id)
			setProduct(response?.data?.data)
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

	return (
		<div className='custom_channel_advisor'>
			<div className='row justify-content-start align-items-center mb-2 mx-0 flex-nowrap'>
				<div className='col-3'>
					<CustomImage
						src={product?.image}
						alt={product?.name}
						wrapperWidth={'100%'}
						wrapperHeight={'100px'}
					/>
				</div>
				<div className='col-9'>
					<p className='model'>Hisense {product?.model}</p>
					<p className='title'>{product?.name}</p>
				</div>
			</div>
			<div className='black_box'>
				<div style={{ width: '100%' }} className='white_box active'>
					BUY ONLINE
				</div>
			</div>
			<div>
				{!loading ? (
					product?.retailers && product?.retailers.length > 0 ? (
						product?.retailers.map((item, index) => (
							<div
								key={index}
								className='d-flex justify-content-between align-items-center my-4 mx-4 py-4 divider_bottom'>
								<CustomImage
									src={item?.Media?.url}
									alt={item?.name}
									wrapperWidth={'100px'}
								/>
								<div>
									<div className='check'>Check Retailer</div>
									<div className='status'>Available</div>
								</div>
								<Link
									href={item?.pivot?.value ? item?.pivot?.value : item?.name}>
									<a
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
