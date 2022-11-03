import React, { useState, useEffect } from 'react'
import ExtendedWarrantyProduct from './ExtendedWarrantyProduct'
import Spinner from 'components/common/Spinner'
import ExtendedWarrantySearchProduct from './ExtendedWarrantySearchProduct'
import { useRouter } from 'next/router'
import axios from 'axios'
import { GetProductByFilterApi } from 'services/Product'
import { GetProducts } from 'services/ExtendedWarranty'

const ExtendedWarrantyProductGrid = ({ data: { structure } }) => {
	const [products, setProducts] = useState([])
	const [filter, setFilter] = useState([])
	const router = useRouter()

	useEffect(() => {
		filter.length === 0 ? getProducts() : getProductByFilter()
	}, [filter])

	const getProducts = async () => {
		setProducts('loading')
		try {
			let response = await GetProducts()
			console.log(response?.data?.products)
			setProducts(response.data.products)
		} catch (error) {
			console.log(error)
		}
	}

	const getProductByFilter = async () => {
		setProducts('loading')

		try {
			let response = await GetProductByFilterApi(router, filter)
			setProducts(response.data.products)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='extended-warranty-model-selection'>
			<ExtendedWarrantySearchProduct />
			<section className='products-v2'>
				<div
					className='container mb-8 mb-md-20'
					dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></div>
				<div className='extended-warranty-products-grid products-grid'>
					{!Array.isArray(products) ? (
						<div className='w-100 d-flex justify-content-center'>
							<Spinner className={'mt-5'} size={80} />
						</div>
					) : (
						<div className='products'>
							{products.map((item, index) => (
								<ExtendedWarrantyProduct key={index} data={item} />
							))}
						</div>
					)}
				</div>
			</section>
		</div>
	)
}

export default ExtendedWarrantyProductGrid
