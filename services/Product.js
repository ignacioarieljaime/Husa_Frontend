import useFetch from '../hooks/useFetch'

export async function GetProductByFilterApi(navigate, _filter) {
	let response = await useFetch(navigate).post(`/getProductsByFilterValueCondition`, {
		condition: 'or',
		data: _filter
	})
	return response
}

export async function GetProductsApi(navigate, _categoryId) {
	let response = await useFetch(navigate).post(`/getProducts/${_categoryId}`)
	return response
}
