import React, { useState, useEffect } from 'react'
import ExtendedWarrantyProduct from './ExtendedWarrantyProduct'
import Spinner from 'components/common/Spinner'
import ExtendedWarrantySearchProduct from './ExtendedWarrantySearchProduct'
import { useRouter } from 'next/router'
import axios from 'axios'
import { GetProducts } from 'services/ExtendedWarranty'

const ExtendedWarrantyProductGrid = ({ data: { structure } }) => {
	const [searchTerm, setSearchTerm] = useState([])
	const [products, setProducts] = useState([])
	const [productCategories, setProductCategories] = useState()
	const [models, setModels] = useState()
	const [category, setCategory] = useState({
		id: null,
		name: 'All'
	})
	const [modelNumber, setModelNumber] = useState('Select')
	const router = useRouter()

	useEffect(() => {
		setCategory(productCategories[0])
		if (router.query.search) {
			setSearchTerm(router.query.search)
		}
		getProducts(category.id, null, router.query.search)
	}, [])

	useEffect(() => {
		getProducts(
			category.id,
			modelNumber === 'Select' ? null : modelNumber,
			searchTerm === '' ? null : searchTerm
		)
	}, [category, modelNumber, searchTerm])

	const getProducts = async (category, modelNumber, searchTerm) => {
		setProducts('loading')
		try {
			let response = await GetProducts(category, modelNumber, searchTerm)
			setProducts(response?.data?.products)
			setProductCategories(response?.data?.categories)
			setModels(response?.data?.models)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='extended-warranty-model-selection'>
			<ExtendedWarrantySearchProduct
				onSearchChange={setSearchTerm}
				searchTerm={searchTerm}
				category={category}
				onCategoryChange={setCategory}
				modelNumber={modelNumber}
				onModelNumber={setModelNumber}
				models={models}
				productCategories={productCategories}
			/>
			<section className='products-v2'>
				<div className='container mb-8 mb-md-20'>
					<h2 className='title fs-2hx'>
						Protect Your <span className='text-primary'>{category.name}</span>
					</h2>
					<p className='description'>
						Find your <span className='text-lowercase'>{category.name}</span>{' '}
						model to continue.
					</p>
				</div>
				<div className='extended-warranty-products-grid products-grid'>
					{!Array.isArray(products) ? (
						<div className='w-100 d-flex justify-content-center'>
							<Spinner className={'mt-5'} size={80} />
						</div>
					) : products.length === 0 ? (
						<div className='w-100 d-flex justify-content-center'>
							<h6>Item not found</h6>
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
