import axios from 'axios'

export async function getProductsWithCategoryApi(_categoryId) {
	let response = await axios.get(
		`https://imcxm.dev-api.hisenseportal.com/api/husa/searchProduct?categoryId=${_categoryId}`
	)
	return response
}

export async function getSettingApi() {
	let response = await axios.get(
		`https://imcxm.dev-api.hisenseportal.com/api/husa/getSettings`
	)
	return response
}
