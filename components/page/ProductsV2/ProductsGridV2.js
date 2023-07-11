import React, { useState, useEffect } from 'react'
import DropDownSelectBox from 'components/common/DropDownSelectBox'
import BreadCrumb from '../../common/BreadCrumb'
import ProductItemV2 from './ProductItemV2'
import ProductsFilter from './ProductsFilter'
import axios from 'axios'
import Spinner from 'components/common/Spinner'
import { useRouter } from 'next/router'
import { GetProductByFilterApi, GetProductsListNewApi } from 'services/Product'
import { useWindowSize } from 'hooks/useWindowSize'
import ProductFilterResponsive from './responsiveFilter/ProductFilterResponsive'

const ProductsGridV2 = ({ data }) => {
	let { structure } = data
	const [width] = useWindowSize()
	const [sortingMethod, setSortingMethod] = useState()
	const [filters, setFilters] = useState([])
	const [products, setProducts] = useState([])
	const [filterList, setFilterList] = useState()
	const [checkBoxCondition, setCheckBoxCondition] = useState(false)
	const [text, setText] = useState(null)
	const [totalCount, setTotalCount] = useState(0)
	const router = useRouter()
	const controller = new AbortController()
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
			getProductHandler(JSON.parse(decodeURIComponent(router.query.filter)))
		} else {
			getProductHandler()
		}
	}, [sortingMethod, router?.query?.filter])

	const getProductHandler = async _filter => {
		await requestController()
		await getProducts(_filter)
	}
	const requestController = () => {
		if (products?.length && products === 'loading') {
			window.stop()
		}
	}

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
			setTotalCount()
			let response = await GetProductsListNewApi(
				router,
				structure?.category.value,
				_filter,
				sortingMethod ? `&sort=${sortingMethod.value}` : null,
				controller.signal
			)

			setProducts(response.data.data)
			getFilters(response.data.filterTypes)
			setTotalCount(response.data.total)
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
			{width < 768 && (
				<ProductFilterResponsive
					selectedFilter={filters}
					allFilters={filterList}
					filterRequest={getProductHandler}
					setFilters={setFilters}
					sortValue={sortingMethod}
					sortOnChange={setSortingMethod}
				/>
			)}

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
							{width >= 768 && (
								<ProductsFilter
									filterRequest={getProductHandler}
									filterList={filterList}
									checkBoxCondition={checkBoxCondition}
									setCheckBoxCondition={setCheckBoxCondition}
									filters={filters}
									setFilters={setFilters}
									total={totalCount}
									category={structure?.category}
									showProductFilterCount={structure?.availabilityNumber?.value}
								/>
							)}
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
