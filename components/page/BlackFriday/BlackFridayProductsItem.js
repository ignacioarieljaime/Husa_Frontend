import React, { useEffect } from 'react'
import CustomImage from 'components/common/CustomImage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Link from 'next/link'
import { GetSingleProduct } from 'services/Product'
import { useRouter } from 'next/router'
import BlackFridayProductsItemDialog from './BlackFridayProductsItemDialog'

const BlackFridayProductsItem = ({ data }) => {
	const [showDialgo, setShowDialog] = useState(false)
	const [product, setProduct] = useState(null)
	const [activeSerie, setActiveSerie] = useState(null)
	const router = useRouter()

	const getProduct = async _id => {
		const response = await GetSingleProduct(router, _id)
		setProduct(response?.data?.data)
	}

	useEffect(() => {
		if (data?.id) getProduct(data?.id)
		setActiveSerie(data?.series[0])
	}, [data])

	return (
		<>
			<figure className='product_item'>
				<div className='d-flex flex-column justify-content-between align-items-start h-100'>
					<div className='d-flex justify-content-between align-items-center w-100'>
						<h4 className='series'>
							{product?.custom_fields.filter(
								field => field.title === 'h2 Title'
							).length > 0
								? product?.custom_fields.filter(
										field => field.title === 'h2 Title'
								  )[0].value
								: product?.model}
						</h4>
						<span className='sale_limit'>{data?.title}</span>
					</div>
					<div
						className={`img_container mb-10 mx-auto ${
							product?.Category?.id === 5 ? 'vertical' : ''
						}`}>
						<CustomImage
							src={product?.image}
							alt={product?.name}
							wrapperWidth={'100%'}
							wrapperMaxWidth={'100%'}
						/>
					</div>
					<div className='w-100'>
						<h6 className='title'>{product?.name}</h6>
						<div className='types'>
							{product?.series[0]?.values.length > 0 ? (
								<p>Select a size:</p>
							) : null}
							<div className='types_list'>
								{data?.series.length > 1 ? (
									data?.series.map((item, index) => (
										<button
											onClick={() => {
												getProduct(item.id)
												setActiveSerie(item)
											}}
											className={`${
												item?.id === activeSerie?.id ? 'active' : ''
											}`}
											key={index}>
											{item?.title}
										</button>
									))
								) : (
									<button className='active'>{product?.model}</button>
								)}
							</div>
						</div>
						<div>
							<span className='new_price'>
								{Math.round(
									(parseFloat(activeSerie?.price) *
										(100 - parseFloat(activeSerie?.discount))) /
										10
								) / 10}
								$
							</span>
							<span className='sale'>{parseFloat(activeSerie?.discount)}%</span>
							<div className='old_price'>
								Reg:{' '}
								<span className='text-decoration-line-through'>
									{parseFloat(activeSerie?.price)}$
								</span>
							</div>
						</div>
						<div className='w-100 text-center mt-3'>
							<button
								onClick={() => setShowDialog(true)}
								className='n-btn btn-primary text-white'>
								Buy Now
							</button>
						</div>
					</div>
				</div>
			</figure>
			{showDialgo ? (
				<BlackFridayProductsItemDialog
					onClick={setShowDialog}
					model={product?.model}
					retailers={product?.retailers}
				/>
			) : null}
		</>
	)
}

export default BlackFridayProductsItem
