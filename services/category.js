import useFetch from 'hooks/useFetch'


export async function GetCategoriesApi(navigate) {
	let response = await useFetch(navigate).get(`/getCategories?brand_id=${process.env.NEXT_PUBLIC_BRAND_ID}`)
	return response
}

export async function GetSeriesModelsApi(navigate, query) {
	let response = await useFetch(navigate).get(`getSeriesModels?${query}`)
	return response
}
