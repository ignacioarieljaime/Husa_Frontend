import Spinner from 'components/common/Spinner'
import React, { useState, useEffect } from 'react'
import { getProductsWithCategoryApi } from 'services/cxm'
import BlockSpotlightItem from './BlockSpotlightItem'

const BlockSpotlight = ({ data }) => {
	let { structure } = data
	const [products, setProducts] = useState('loading')
	const [activeProduct, setActiveProduct] = useState()
	const [showCount, setShowCount] = useState()

	useEffect(() => {
		getProductWithCategory(structure?.tabs?.value[0])
	}, [])

	const getProductWithCategory = async _data => {
		setProducts('loading')
		setActiveProduct(_data?.category?.value)
		setShowCount(_data?.count?.value)
		try {
			let response = await getProductsWithCategoryApi(_data?.category?.value)
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
							className={
								activeProduct === item?.category?.value ? 'active' : ''
							}>
							{item?.title?.value}
						</button>
					))}
				</div>
				<div className='product-list'>
					{/* {products === 'loading' ? (
						<Spinner size={50} />
					) : (
						products.map(
							(item, index) => index <= Number(showCount) && <>sss</>
						)
					)} */}
				</div>
			</div>
		</section>
	)
}

export default BlockSpotlight
