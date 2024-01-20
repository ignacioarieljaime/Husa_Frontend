import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import BlackFridayProductsItem from './BlackFridayProductsItem'
import { GetProductsByIdsApi } from 'services/Product'
import Spinner from 'components/common/Spinner'

const BlackFridayProductsBlock = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState(null)
	const [products, setProducts] = useState('loading')
	const [productFilter, setProductFilter] = useState()
	const router = useRouter()
	const ref = useRef()
	useEffect(() => {
		// setContent(structure)
		if (router.asPath.includes(data?.name + data?.id)) {
			setTimeout(() => {
				ref.current.scrollIntoView()
			}, 1000)
		}
	}, [])
	useEffect(() => {
		if (structure?.list?.value && structure?.list?.value?.length > 0) {
			getProducts()
		} else {
			setProducts([])
		}
	}, [structure?.list?.value])

	const getProducts = async () => {
		let productsIds = structure?.list?.value?.map(element => element?.id)

		try {
			let response = await GetProductsByIdsApi(router, productsIds)

			setProducts(response?.data?.data)
		} catch (error) {
			setProducts([])
			console.log(error)
		}
	}

	return (
		<section id={data?.name + data?.id} ref={ref}>
			<div className='black_friday_products'>
				<div className='products_grid'>
					{products === 'loading' ? (
						<Spinner />
					) : (
						structure?.list?.value?.map((item, index) => (
							<BlackFridayProductsItem
								key={index}
								products={products.find(element => element.id === item?.id)}
								data={item}
							/>
						))
					)}
				</div>
				{structure?.text?.value ? (
					<div
						className='note'
						dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
				) : null}
			</div>
		</section>
	)
}

export default BlackFridayProductsBlock
