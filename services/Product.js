import useFetch from '../hooks/useFetch'
const endPoint = '/getProductsByFilterValue'

export async function GetProductByFilterApi(navigate, _filter) {
	let response = await useFetch(navigate).post(`${endPoint}`, { data: _filter })
	return response
}
