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
export async function GetProductsListNewApi(navigate, _categoryId, _filter) {
	let filter = _filter && _filter.length !== 0 ? `&filters=${JSON.stringify(_filter)}` : ''

	let response = await useFetch(navigate).get(
		`/productsIndex?category_id=${_categoryId}${filter}`
	)
	return response
}
