import axios from 'axios'

export async function GetProducts(_categoryId, _model, _search) {
	let response = await axios.get(
		`https://imecom.dev-api.hisenseportal.com/api/v1/customer/products`,
		{
			params: {
				category_id: _categoryId,
				model: _model,
				search: _search,
				brand_id: process.env.NEXT_PUBLIC_BRAND_ID
			}
		}
	)
	return response
}

export async function GetCategories() {
	let response = await axios.get(
		`https://imecom.dev-api.hisenseportal.com/api/v1/customer/categories`
	)
	return response
}
export async function GetProductPlans(_price) {
	let response = await axios.post(
		`${process.env.NEXT_PUBLIC_ECOM_API_ROUTE}/customer/plans`,
		{
			price: _price
		}
	)
	return response
}

export async function postFormAssets(_data) {
	let response = await axios.post(
		process.env.NEXT_PUBLIC_ASSETS_API_ROUTE,
		_data
	)
	return response
}

export async function submitForm(_data) {
	let response = await axios.post(
		`${process.env.NEXT_PUBLIC_ECOM_API_ROUTE}/customer/create`,
		_data
	)
	return response
}

export async function GetPaymentUrl(_token) {
	let response = await axios.post(
		`${process.env.NEXT_PUBLIC_ECOM_API_ROUTE}/customer/invoice/pay/${_token}`
	)
	return response
}

export async function GetPaymenStatus(_invoice) {
	let response = await axios.post(
		`${process.env.NEXT_PUBLIC_ECOM_API_ROUTE}/customer/invoice/show/${_invoice}`
	)
	return response
}
