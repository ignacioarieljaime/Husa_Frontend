import React, { useState, useEffect } from 'react'
import DropDownSelectBox from 'components/common/DropDownSelectBox'
import BreadCrumb from '../../common/BreadCrumb'
import ProductItemV2 from './ProductItemV2'
import ProductsFilter from './ProductsFilter'
import axios from 'axios'
import Spinner from 'components/common/Spinner'
import { useRouter } from 'next/router'
import { GetProductByFilterApi, GetProductsListNewApi } from 'services/Product'

const ProductsGridV2 = ({ data }) => {
	let { structure } = data
	const [sortingMethod, setSortingMethod] = useState()
	const [filters, setFilters] = useState([])
	const [products, setProducts] = useState([])
	const [filterList, setFilterList] = useState()
	const [checkBoxCondition, setCheckBoxCondition] = useState(false)
	const [text, setText] = useState(null)
	const router = useRouter()

	const options = [
		{
			name: 'Newest',
			value: 'newest'
		},
		{
			name: 'Oldest',
			value: 'oldest'
		}
	]
	useEffect(() => {
		setText(structure?.title?.value)
	}, [])
	useEffect(() => {
		if (router.query.filter) {
			getProducts(JSON.parse(decodeURIComponent(router.query.filter)))
		} else {
			getProducts()
		}
	}, [router.query?.filter, sortingMethod])

	const getProducts = async _filter => {
		setProducts('loading')
		if (_filter && _filter.length !== 0) {
			router.replace(
				{
					query: {
						filter: `${encodeURIComponent(JSON.stringify(_filter))}`
					}
				},
				undefined,
				{
					shallow: true
				}
			)
		} else {
			if (router.query.filter) {
				router.replace(
					{
						query: {}
					},
					undefined,
					{
						shallow: true
					}
				)
			}
		}

		try {
			let response = await GetProductsListNewApi(
				router,
				structure?.category.value,
				_filter,
				sortingMethod ? `&sort=${sortingMethod.value}` : null
			)

			setProducts(response.data.data)
			getFilters(response.data.filterTypes)
		} catch (error) {
			console.log(error)
		}
	}

	const getFilters = async _filterList => {
		let filters = []
		try {
			_filterList.forEach(item => filters.push(...item.filters))
			setFilterList(filters)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<section>
			<div className='container mt-7 mb-11 d-none d-md-block'>
				<div className='row justify-content-start align-items-center px-3 mb-15'>
					<BreadCrumb />
				</div>
				<div dangerouslySetInnerHTML={{ __html: text }}></div>
			</div>
			<div className='products-v2 mx-3 mx-md-13'>
				<div className='products-sorting d-none d-md-block'>
					<DropDownSelectBox
						options={options}
						value={sortingMethod}
						title='Sort by: '
						onChange={setSortingMethod}
					/>
				</div>
				<div className='products-grid mt-4 mt-md-0 mb-4'>
					{filterList && filterList.length !== 0 ? (
						<div className='products-filtering me-md-12'>
							<ProductsFilter
								filterRequest={getProducts}
								filterList={filterList}
								checkBoxCondition={checkBoxCondition}
								setCheckBoxCondition={setCheckBoxCondition}
								filters={filters}
								setFilters={setFilters}
							/>
						</div>
					) : null}

					{!Array.isArray(products) ? (
						<div className='w-100 d-flex justify-content-center'>
							<Spinner className={'mt-5'} size={80} />
						</div>
					) : (
						<div className='products'>
							{products.map((item, index) => (
								<ProductItemV2 key={index} data={item} />
							))}
						</div>
					)}
				</div>
			</div>
		</section>
	)
}

export default ProductsGridV2
