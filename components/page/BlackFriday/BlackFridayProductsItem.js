import React, { useEffect } from 'react'
import CustomImage from 'components/common/CustomImage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Link from 'next/link'
import { GetSingleProduct } from 'services/Product'
import { useRouter } from 'next/router'
import BlackFridayProductsItemDialog from './BlackFridayProductsItemDialog'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { RouteHandler } from 'utils/routeHandler'

const BlackFridayProductsItem = ({ data }) => {
	const [showDialgo, setShowDialog] = useState(false)
	const [product, setProduct] = useState(null)
	const [activeSerie, setActiveSerie] = useState(null)
	const [valid, setValid] = useState(false)
	const [url, setUrl] = useState(null)
	const router = useRouter()

	const getProduct = async _id => {
		const response = await GetSingleProduct(router, _id)
		setProduct(response?.data?.data)
	}

	useEffect(() => {
		if (data?.id) getProduct(data?.id)
		setActiveSerie(data?.series[0])
	}, [data])

	const checkValid = () => {
		let isValid = false
		data?.series.forEach(item => {
			if (item.price !== null && item.discount !== null) isValid = true
		})
		return isValid
	}

	useEffect(() => {
		if (checkValid()) setValid(true)
		setUrl(RouteHandler(activeSerie?.id, 'product'))
	}, [activeSerie])

	return (
		<>
			{valid ? (
				<figure className='product_item'>
					<div className='d-flex flex-column justify-content-between align-items-start h-100'>
						<div className='	w-100'>
							<h4 className='series'>
								{product?.custom_fields.filter(
									field => field.title === 'h2 Title'
								).length > 0
									? product?.custom_fields.filter(
											field => field.title === 'h2 Title'
									  )[0].value
									: product?.model}
							</h4>
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
						</div>
						<div className='w-100'>
							<h6 className='title'>{product?.name}</h6>
							<div className='types'>
								{product?.series[0]?.values.length > 0 ? (
									<p>Select a size:</p>
								) : null}
								<div className='types_list'>
									{data?.series.length > 1
										? data?.series.map((item, index) =>
												item?.price && item?.discount ? (
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
												) : null
										  )
										: null}
								</div>
							</div>
							<div>
								<span className='new_price'>
									$
									{(
										(parseFloat(activeSerie?.price) / 100) *
										(100 - parseFloat(activeSerie?.discount))
									).toFixed(2) * 1}
								</span>
								<span className='sale'>
									{parseFloat(activeSerie?.discount)}% OFF
								</span>
								<div className='old_price'>
									Reg:{' '}
									<span className='text-decoration-line-through dir-rtl'>
										${parseFloat(activeSerie?.price)}
									</span>
								</div>
							</div>
							<div className='d-flex flex-wrap justify-content-center gap-2 align-items-center w-100 text-center mt-5 mb-3'>
								<Link href={url ? url : '/'}>
									<a className='n-btn outline-black  '>View Product</a>
								</Link>
								<button
									onClick={() => setShowDialog(true)}
									className={`n-btn primary-text`}>
									Where To Buy
									<span>
										<FontAwesomeIcon
											icon={faChevronRight}
											size={'sm'}
											className='ms-2'
										/>
									</span>
								</button>
							</div>
						</div>
					</div>
				</figure>
			) : null}
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
