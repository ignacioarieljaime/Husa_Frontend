import Spinner from 'components/common/Spinner'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { CompareProductsApi } from 'services/compare'
import CompareProductItem from './CompareProductItem'

function CompareProduct() {
	const router = useRouter()
	let { compareList } = useSelector(state => state.compareData)
	const [products, setProducts] = useState()
	useEffect(() => {
		if (compareList.length === 0) {
			router.back()
			return
		}
		compareProducts(compareList.map(item => item.id))
	}, [])

	let compareProducts = async _productsId => {
		try {
			let response = await CompareProductsApi(router, _productsId)
			setProducts(response.data)
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<table className='compare_product_table'>
			<tbody>
				{products ? (
					<>
						<tr>
							<td>Model</td>
							{products &&
								products.products.map((item, index) => (
									<td>
										<img src={item?.media?.url} alt={item?.media?.caption} />
										<h6>Model: {item?.model}</h6>
										<h5>{item?.name}</h5>
									</td>
								))}
						</tr>
						{products?.customFields.map((item, index) => (
							<CompareProductItem data={item} key={'compare-item-' + index} />
						))}
						{products?.properties.map((item, index) => (
							<CompareProductItem data={item} key={'compare-item-' + index} />
						))}
					</>
				) : (
					<div className='py-10'>
						<Spinner size={60} />
					</div>
				)}
			</tbody>
		</table>
	)
}

export default CompareProduct
