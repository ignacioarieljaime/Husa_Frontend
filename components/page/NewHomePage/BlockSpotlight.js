import Spinner from 'components/common/Spinner'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { GetProductWithSeriesAndProductIdApi } from 'services/Product'
import BlockSpotlightItem from './BlockSpotlightItem'

const BlockSpotlight = ({ data }) => {
	let { structure } = data
	let router = useRouter()
	const [products, setProducts] = useState('loading')
	const [activeProduct, setActiveProduct] = useState()
	const [productSortCXM, setProductSortCXM] = useState()
	const [productType, setProductType] = useState()

	useEffect(() => {
		getProductWithCategory(structure?.tabs?.value[0])
	}, [])

	const getProductWithCategory = async _data => {
		setProducts('loading')
		setActiveProduct(_data?.category)
		setProductSortCXM(_data?.items)
		setProductType(_data.type)
		let searchType = _data.type === 'products' ? `products_id=` : `series_id=`
		searchType += JSON.stringify(_data.items.map(item => item.id))
		try {
			let response = await GetProductWithSeriesAndProductIdApi(
				router,
				searchType
			)
			setProducts(response.data.data)
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<section>
			<div className='container spotlight-releases'>
				<h2 className='title'>{structure?.title?.value}</h2>
				<div className='product-select'>
					{structure?.tabs?.value.map((item, index) => (
						<button
							key={index}
							onClick={() => getProductWithCategory(item)}
							className={activeProduct === item?.category ? 'active' : ''}>
							{item?.title}
						</button>
					))}
				</div>
				{products === 'loading' ? (
					<div className='w-100 d-flex justify-content-center'>
						<Spinner size={50} />
					</div>
				) : (
					<div className='product-list justify-content-center'>
						{productSortCXM.map((item, index) => (
							<BlockSpotlightItem
								data={products.find(productItem =>
									productType === 'products'
										? item.id === productItem.products.product.id
										: item.id === productItem.id
								)}
								key={'block-spot-light-' + index}
							/>
						))}
					</div>
				)}
			</div>
		</section>
	)
}

export default BlockSpotlight
