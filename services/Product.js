import useFetch from '../hooks/useFetch'

export async function GetProductByFilterApi(navigate, _filter) {
	let response = await useFetch(navigate).post(
		`/getProductsByFilterValueCondition`,
		{
			condition: 'or',
			data: _filter
		}
	)
	return response
}

export async function GetProductsApi(navigate, _categoryId) {
	let response = await useFetch(navigate).post(`/getProducts/${_categoryId}`)
	return response
}

export async function GetProductsListApi(navigate, _categoryId, _filter) {
	let filter = ''
	_filter &&
	_filter.forEach(item => {
		filter += '&filters[]=' + item.filter_value
	})

	let response = await useFetch(navigate).get(
		`/getProductsList?category_id=${_categoryId}&condition=or${filter}`
	)
	return response
}

export async function GetProductsListNewApi(
	navigate,
	_categoryId,
	_filter,
	_sort
) {
	let filter =
		_filter && _filter.length !== 0
			? `&filters=${encodeURIComponent(JSON.stringify(_filter))}`
			: ''

	let response = await useFetch(navigate).get(
		`/productsIndex?category_id=${_categoryId}${filter}${_sort ? _sort : ''}&brand_id=1`
	)
	return response
}

export async function GetSingleProduct(navigate, _productId) {
	let response = await useFetch(navigate).get(`/getProduct/${_productId}`)
	return response
}

export async function GetSearchResult(navigate, _searchTerm) {
	let response = await useFetch(navigate).get(`/searchResult/${_searchTerm}`)
	return response
}

export async function GetProductWithSeriesAndProductIdApi(
	navigate,
	_searchValue
) {
	let response = await useFetch(navigate).get(`/productsIndex?${_searchValue}`)
	return response
}

export async function GetProductRetailersApi(
	navigate,
	_productId
) {
	let response = await useFetch(navigate).get(`/getRetailers/${_productId}`)
	return response
}
