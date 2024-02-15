import React, { useState, useEffect, useRef } from 'react'
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
	const [filteredProducts, setFilteredProducts] = useState([])
	const [filterList, setFilterList] = useState()
	const [checkBoxCondition, setCheckBoxCondition] = useState(false)
	const [text, setText] = useState(null)
	const [totalCount, setTotalCount] = useState(0)
	const [searchTerm, setSearchTerm] = useState('')
	const [searchTermFilter, setSearchTermFilter] = useState(0)
	const router = useRouter()
	const controller = new AbortController()
	const wrapperRef = useRef()

	const options = [
		{
			name: 'Featured',
			value: 'featured'
		},
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
			getProductHandler(
				JSON.parse(decodeURIComponent(router.query.filter)),
				searchTerm
			)
		} else {
			getProductHandler([], searchTerm)
		}
	}, [sortingMethod, router?.query?.filter])

	const getProductHandler = async (_filter, _term) => {
		await requestController()
		await getProducts(_filter, _term)
	}
	const requestController = () => {
		if (products?.length && products === 'loading') {
			window.stop()
		}
	}

	const getProducts = async (_filter, _term) => {
		setProducts('loading')
		setFilteredProducts('loading')
		justifyViewPort()
		let newFilters = []

		if (_filter && _filter.length !== 0) {
			newFilters = _filter.map(
				_f =>
					_f?.id &&
					_f?.type &&
					_f?.values && {
						id: _f.id,
						type: _f.type,
						values: _f.values
					}
			)
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
				structure?.subcategory?.value,
				newFilters,
				sortingMethod && sortingMethod?.value !== 'featured'
					? `&sort=${sortingMethod.value}`
					: null,
				_term,
				controller.signal
			)
			const newData = response.data.data
			setProducts(newData)
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

	useEffect(() => {
		if (products && Array.isArray(products)) {
			setFilteredProducts(
				products.filter(p =>
					searchTermFilter
						? Array.isArray(p?.products)
							? p?.products.some(_p => _p?.product?.id === searchTermFilter)
							: p?.products?.product?.id === searchTermFilter
						: true
				)
			)
			justifyViewPort()
		}
	}, [products, searchTermFilter])

	// const orderProducts = _data => {
	// 	if (sortingMethod && sortingMethod?.value === 'featured') {
	// 		_data.sort((after, prev) => {
	// 			if (after.id !== 0 && prev.id !== 0)
	// 				return (
	// 					after.products[0].product.order - prev.products[0].product.order
	// 				)
	// 			else if (prev.id !== 0)
	// 				return after.products.product.order - prev.products[0].product.order
	// 			else if (after.id !== 0)
	// 				return after.products[0].product.order - prev.products.product.order
	// 			else return after.products.product.order - prev.products.product.order
	// 		})
	// 	}
	// 	return _data
	// }

	function justifyViewPort() {
		if (wrapperRef?.current) {
			wrapperRef?.current.scrollIntoView()
		}
	}

	return (
		<section>
			<div
				// ref={wrapperRef}
				className='container-md grid_v2_top_box mt-md-7 mb-md-11 '>
				<div className='row justify-content-start align-items-center px-3 mb-15 d-none d-md-block'>
					<BreadCrumb />
				</div>
				<div dangerouslySetInnerHTML={{ __html: text }}></div>
			</div>
			{width < 768 && (
				<ProductFilterResponsive
					wrapperRef={wrapperRef}
					justifyViewPort={justifyViewPort}
					selectedFilter={filters}
					allFilters={filterList}
					filterRequest={getProductHandler}
					setFilters={setFilters}
					sortValue={sortingMethod}
					sortOnChange={setSortingMethod}
					products={products}
					filteredProducts={filteredProducts}
					category={structure?.category}
					searchTerm={searchTerm}
					setSearchTerm={term => setSearchTerm(term)}
					searchTermFilter={searchTermFilter}
					setSearchTermFilter={setSearchTermFilter}
					showProductFilterCount={structure?.availabilityNumber?.value}
				/>
			)}

			<div id='products' className='products-v2 mx-3 mx-md-13'>
				<div
					className='products-sorting d-none d-md-block'
					style={{ zIndex: '5' }}>
					<DropDownSelectBox
						options={options}
						value={sortingMethod}
						title='Sort by: '
						onChange={setSortingMethod}
					/>
				</div>
				<div className='products-grid mt-4 mt-md-0 mb-4'>
					{filterList && filterList.length !== 0 ? (
						<div className='products-filtering'>
							{width >= 768 && (
								<ProductsFilter
									filterRequest={getProductHandler}
									filterList={filterList}
									checkBoxCondition={checkBoxCondition}
									setCheckBoxCondition={setCheckBoxCondition}
									filters={filters}
									setFilters={setFilters}
									total={totalCount}
									searchTerm={searchTerm}
									setSearchTerm={term => setSearchTerm(term)}
									category={structure?.category}
									showProductFilterCount={structure?.availabilityNumber?.value}
								/>
							)}
						</div>
					) : null}

					{!Array.isArray(filteredProducts) ? (
						<div className='w-100 d-flex justify-content-center spinner_height'>
							<Spinner className={'mt-5'} size={80} />
						</div>
					) : (
						<div
							className={`products ${
								filterList && filterList.length !== 0 && width >= 768
									? 'filter_show'
									: ''
							}`}>
							{filteredProducts.map((item, index) => {
								return <ProductItemV2 key={index} data={item} />
							})}
						</div>
					)}
				</div>
			</div>
		</section>
	)
}

export default ProductsGridV2
