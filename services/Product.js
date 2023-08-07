import axios from 'axios'
import useFetch from '../hooks/useFetch'

export async function GetProductByFilterApi(navigate, _filter) {
	let response = await useFetch(navigate).post(
		`/getProductsByIds?brand_id=${process.env.NEXT_PUBLIC_BRAND_ID}`,
		{
			condition: 'or',
			data: _filter
		}
	)
	return response
}

export async function GetProductsApi(navigate, _categoryId) {
	let response = await useFetch(navigate).post(
		`/getProducts/${_categoryId}?brand_id=${process.env.NEXT_PUBLIC_BRAND_ID}`
	)
	return response
}
export async function GetProductsByIdsApi(navigate, ids) {
	let response = await useFetch(navigate).post(
		`/getProductsByIds?status[]=1&status[]=3&status[]=7&brand_id=${process.env.NEXT_PUBLIC_BRAND_ID}`,
		{ ids }
	)
	return response
}

export async function GetProductsListApi(navigate, _categoryId, _filter) {
	let filter = ''
	_filter &&
		_filter.forEach(item => {
			filter += '&filters[]=' + item.filter_value
		})

	let response = await useFetch(navigate).get(
		`/getProductsList?category_id=${_categoryId}&condition=or${filter}&brand_id=${process.env.NEXT_PUBLIC_BRAND_ID}`
	)
	return response
}

export async function GetProductsListNewApi(
	navigate,
	_categoryId,
	_subCategoryId,
	_filter,
	_sort,
	signal
) {
	console.log(_subCategoryId)
	let filter =
		_filter && _filter.length !== 0
			? `&filters=${encodeURIComponent(JSON.stringify(_filter))}`
			: ''

	let response = await axios.get(
		`${
			process.env.NEXT_PUBLIC_PIM_API_ROUTE
		}/productsIndex?category_id=${_categoryId}${filter}${
			_sort ? _sort : ''
		}&brand_id=${process.env.NEXT_PUBLIC_BRAND_ID}
		${_subCategoryId ? `&subcategory_id=${_subCategoryId}` : ''}
		`,
		{ signal }
	)
	return response
}

export async function GetSingleProduct(navigate, _productId) {
	let response = await useFetch(navigate).get(
		`/getProduct/${_productId}?brand_id=${process.env.NEXT_PUBLIC_BRAND_ID}`
	)
	return response
}

export async function GetSearchResult(navigate, _searchTerm) {
	let response = await useFetch(navigate).get(
		`/searchResult/${_searchTerm}?brand_id=${process.env.NEXT_PUBLIC_BRAND_ID}`
	)
	return response
}

export async function GetProductWithSeriesAndProductIdApi(
	navigate,
	_searchValue
) {
	let response = await useFetch(navigate).get(
		`/productsIndex?${_searchValue}&brand_id=${process.env.NEXT_PUBLIC_BRAND_ID}`
	)
	return response
}

export async function GetProductRetailersApi(navigate, _productId) {
	let response = await useFetch(navigate).get(
		`/getRetailers/${_productId}?brand_id=${process.env.NEXT_PUBLIC_BRAND_ID}`
	)
	return response
}
