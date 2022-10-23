import React, { useState, useEffect } from 'react'
import DropDownSelectBox from 'components/common/DropDownSelectBox'
import BreadCrumb from '../../common/BreadCrumb'
import ProductItemV2 from './ProductItemV2'
import ProductsFilter from './ProductsFilter'
import axios from 'axios'
import Spinner from 'components/common/Spinner'
import { useRouter } from 'next/router'
import { GetProductByFilterApi } from 'services/Product'

const ProductsGridV2 = ({
	data: {
		structure: { category }
	}
}) => {
	const [sortingMethod, setSortingMethod] = useState([
		{
			title: 'Newest',
			value: 'new'
		}
	])
	const [filters, setFilters] = useState([])
	const [products, setProducts] = useState([])
	const [filter, setFilter] = useState([])
	const router = useRouter()

	let sort = {
		breadCrumbList: {
			value: [
				{
					title: 'home',
					value: '/'
				},
				{
					title: 'all televisions',
					value: '/all-tvs'
				}
			]
		},
		title: {
			value: 'All',
			primaryText: 'Televisions'
		}
	}

	const options = [
		{
			title: 'Newest',
			value: 'new'
		},
		{
			title: 'Oldest',
			value: 'old'
		},
		{
			title: 'Popular',
			value: 'popular'
		},
		{
			title: 'Most Selling',
			value: 'most-selling'
		}
	]

	useEffect(() => {
		filter.length === 0 ? getProducts() : getProductByFilter()
	}, [filter])

	const getProducts = async () => {
		setProducts('loading')
		try {
			let response = await axios.get(
				`https://impim.dev-api.hisenseportal.com/api/cms/getProducts/${category.value}`
			)
			setProducts(response.data.data)
		} catch (error) {
			console.log(error)
		}
	}

	const getProductByFilter = async () => {
		setProducts('loading')

		try {
			let response = await GetProductByFilterApi(router, filter)
			setProducts(response.data.data)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<section>
			<div className='container mt-7 mb-11'>
				<div className='row justify-content-start align-items-center px-3 mb-15'>
					<BreadCrumb list={sort.breadCrumbList} />
				</div>
				<div>
					<h2 className='fw-normal fs-2hx mb-4'>
						{sort.title.value}{' '}
						<span className='primary-text'>{sort.title.primaryText}</span>
					</h2>
					<h3 className='fw-normal fs-base black-text'>
						Find your next television.
					</h3>
				</div>
			</div>
			<div className='products-v2 mx-3 mx-md-13'>
				<div className='products-sorting'>
					<DropDownSelectBox
						options={options}
						value={sortingMethod}
						title='Sort by'
						onChange={setSortingMethod}
					/>
				</div>
				<div className='products-grid'>
					<div className='products-filtering'>
						<ProductsFilter
							filterHandler={setFilter}
							categoryId={category}
							filter={filter}
						/>
					</div>
					<div className='products'>
						{!Array.isArray(products) ? (
							<Spinner className={'mt-5'} size={80} />
						) : (
							products.map((item, index) => (
								<ProductItemV2 key={index} data={item} />
							))
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProductsGridV2
