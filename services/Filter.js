import useFetch from '../hooks/useFetch'
const endPoint = '/getCategoryFilterTypes'

export async function GetFiltersApi(navigate, categoryId) {
	let response = await useFetch(navigate).get(`${endPoint}/${categoryId}`)
	return response
}
