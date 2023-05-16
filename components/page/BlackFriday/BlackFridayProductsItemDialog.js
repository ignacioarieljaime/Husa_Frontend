import React, { useEffect } from 'react'
import CustomImage from 'components/common/CustomImage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Link from 'next/link'
import { GetSingleProduct } from 'services/Product'
import { useRouter } from 'next/router'
import Spinner from 'components/common/Spinner'

const BlackFridayProductsItem = ({ onClick, product }) => {
	const router = useRouter()
	const [retailers, setRetailers] = useState()

	useEffect(() => {
		getProduct()
		console.log(product);
	
	}, [])

	const getProduct = async () => {
		setRetailers('loading')
		try {
			let response = await GetSingleProduct(router, product?.id)
			filterRetailer(response.data.data?.retailers)
		} catch (error) {
			console.log(error)
		}
	}

	const filterRetailer = _retailer => {
		let retailer = []

		_retailer.forEach(element => {
			if (product?.retailers?.find(item => item.id === element?.id)) {
				retailer.push(element)
			}
		})

		setRetailers(retailer)
	}

	return (
		<div className='retailers_dialog'>
			<div className='backdrop' onClick={() => onClick(false)}></div>
			<div className='dialog_body'>
				<button className='close_button' onClick={() => onClick(false)}>
					<FontAwesomeIcon icon={faXmark} size={'lg'} />
				</button>
				<div className='content'>
					<p>Available at these authorized retailers:</p>
					<div className='text-center'>
						{retailers === 'loading' ? (
							<div className='py-5'>
								<Spinner />
							</div>
						) : Array.isArray(retailers) && retailers?.length > 0 ? (
							retailers.map((item, index) =>
								item?.Media?.url && item?.pivot?.value ? (
									<Link
										target={item?.Media?.target ? item?.Media?.target : '_self'}
										href={item?.pivot?.value}>
										<a
											target={
												item?.Media?.target ? item?.Media?.target : '_self'
											}>
											<CustomImage
												key={index}
												src={item?.Media?.url}
												alt={item?.name}
												wrapperWidth={'125px'}
												wrapperHeight={'125px'}
												className='mx-auto'
											/>
										</a>
									</Link>
								) : null
							)
						) : (
							'empty'
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default BlackFridayProductsItem
