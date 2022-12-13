import axios from 'axios'

export async function CompareProductsApi(router, _productsId) {
	let _filter = ''
	_productsId.forEach((item, index) => {
		_filter += `${index !== 0 ? '&' : '?'}${encodeURIComponent(
			'products[]'
		)}=${item}`
	})
	let response = await axios.get(
		`${process.env.NEXT_PUBLIC_PIM_API_ROUTE}/compare${_filter}?brand_id=${process.env.NEXT_PUBLIC_BRAND_ID}`
	)
	return response
}
