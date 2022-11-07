import axios from 'axios'

export async function CompareProductsApi(router, _productsId) {
	let _filter = ''
	_productsId.forEach((item, index) => {
		_filter += `${index !== 0 ? '&' : '?'}${encodeURIComponent(
			'products[]'
		)}=${item}`
	})
	let response = await axios.get(
		`https://impim.dev-api.hisenseportal.com/api/cms/compare${_filter}`
	)
	return response
}
