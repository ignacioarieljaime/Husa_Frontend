import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import BlackFridayProductsItem from './BlackFridayProductsItem'
import { GetProductsByIdsApi } from 'services/Product'
import Spinner from 'components/common/Spinner'

const BlackFridayProductsBlock = ({ data }) => {
	const [content, setContent] = useState(null)
	const [products, setProducts] = useState('loading')
	const [productFilter, setProductFilter] = useState()
	const router = useRouter()
	const ref = useRef()
	useEffect(() => {
		setContent(data?.structure)
		if (router.asPath.includes(data?.name + data?.id)) {
			setTimeout(() => {
				ref.current.scrollIntoView()
			}, 1000)
		}
	}, [])
	useEffect(() => {
		if (content?.list?.value && content?.list?.value?.length > 0) {
			getProducts()
		} else {
			setProducts([])
		}
	}, [content?.list?.value])

	const getProducts = async () => {
		let productsIds = content?.list?.value?.map(element => element?.id)

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
						content?.list?.value?.map((item, index) => (
							<BlackFridayProductsItem
								key={index}
								products={products.find(element => element.id === item?.id)}
								data={item}
							/>
						))
					)}
				</div>
				{content?.text?.value ? (
					<div
						className='note'
						dangerouslySetInnerHTML={{ __html: content?.text?.value }}></div>
				) : null}
			</div>
		</section>
	)
}

export default BlackFridayProductsBlock
