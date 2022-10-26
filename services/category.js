import useFetch from 'hooks/useFetch'


export async function GetCategoriesApi(navigate) {
	let response = await useFetch(navigate).get(`/getCategories`)
	return response
}

export async function GetSeriesModelsApi(navigate, query) {
	let response = await useFetch(navigate).get(`getSeriesModels?${query}`)
	return response
}
