import axios from 'axios'

export async function getProductsWithCategoryApi(_categoryId) {
	let response = await axios.get(
		`${process.env.NEXT_PUBLIC_CXM_API_ROUTE}/searchProduct?categoryId=${_categoryId}`
	)
	return response
}

export async function getSettingApi() {

	let response = await axios.get(
		`${process.env.NEXT_PUBLIC_CXM_API_ROUTE}/getSettings`
	)
	return response
}
