import React, { useState, useEffect } from 'react'
import ExtendedWarrantyProduct from './ExtendedWarrantyProduct'
import Spinner from 'components/common/Spinner'
import ExtendedWarrantySearchProduct from './ExtendedWarrantySearchProduct'
import { useRouter } from 'next/router'
import { GetProducts } from 'services/ExtendedWarranty'

const ExtendedWarrantyProductGrid = ({ data }) => {
	let { structure } = data
	const [products, setProducts] = useState([])
	const [productCategories, setProductCategories] = useState()
	const [models, setModels] = useState()
	const [category, setCategory] = useState({
		id: null,
		name: 'Select'
	})
	const [modelNumber, setModelNumber] = useState('Select')
	const router = useRouter()
	const [searchTerm, setSearchTerm] = useState(router?.query?.search)

	useEffect(() => {
		setModelNumber('Select')
	}, [category])

	useEffect(() => {
		if (
			productCategories &&
			productCategories.length !== 0 &&
			category.name === 'Select'
		) {
			if (router.query.category_id) {
				setCategory(
					productCategories.find(
						item => item.id === parseInt(router.query.category_id)
					)
				)
			} else if (!router.query.search) setCategory(productCategories[0])
		}
	}, [productCategories])

	useEffect(() => {
		getProducts(
			router?.query?.category_id,
			modelNumber === 'Select' ? null : modelNumber,
			searchTerm === '' ? null : searchTerm
		)
	}, [modelNumber, searchTerm, router?.query])

	const getProducts = async (category, modelNumber, searchTerm) => {
		setProducts('loading')
		try {
			let response = await GetProducts(category, modelNumber, searchTerm)
			setProducts(response?.data?.products)
			!productCategories && setProductCategories(response?.data?.categories)
			setModels(response?.data?.models)
		} catch (error) {
			console.log(error)
		}
	}

	const categoryChangeHandler = _data => {
		router.replace(
			{
				query: {
					category_id: _data.id
				}
			},
			undefined,
			{
				shallow: true
			}
		)
		setCategory(_data)
	}

	return (
		<div className='extended-warranty-model-selection'>
			<ExtendedWarrantySearchProduct
				onSearchChange={setSearchTerm}
				searchTerm={searchTerm}
				category={category}
				onCategoryChange={categoryChangeHandler}
				modelNumber={modelNumber}
				onModelNumber={setModelNumber}
				models={models}
				productCategories={productCategories}
			/>
			<section className='products-v2'>
				<div className='container mb-8 mb-md-20'>
					<h2 className='title fs-2hx'>
						Protect Your{' '}
						<span className='text-primary'>
							{category?.name === 'Select' ? 'All Products' : category?.name}
						</span>
					</h2>
					<p className='description'>
						Find your{' '}
						<span className='text-lowercase'>
							{category?.name === 'Select' ? 'product' : category?.name}
						</span>{' '}
						model to continue.
					</p>
				</div>

				{!Array.isArray(products) ? (
					<div className='w-100 d-flex justify-content-center'>
						<Spinner className={'mt-5'} size={80} />
					</div>
				) : products.length === 0 ? (
					<div className='w-100 d-flex justify-content-center'>
						<h6>Item not found</h6>
					</div>
				) : (
					<>
						<div className='extended-warranty-products-grid products-grid'>
							<div className='products'>
								{products.map((item, index) => (
									<ExtendedWarrantyProduct
										link={structure?.link?.value ? structure?.link?.value : '/'}
										key={index}
										data={item}
									/>
								))}
							</div>
						</div>
					</>
				)}
			</section>
		</div>
	)
}

export default React.memo(ExtendedWarrantyProductGrid)
