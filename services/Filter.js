import useFetch from '../hooks/useFetch'
const endPoint = '/getFilters'

export async function GetFiltersApi(navigate) {
	let response = await useFetch(navigate).get(`${endPoint}`)
	return response
}
