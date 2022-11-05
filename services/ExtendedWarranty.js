import axios from 'axios'

export async function GetProducts() {
	let response = await axios.get(
		'https://imecom.dev-api.hisenseportal.com/api/v1/customer/products'
	)
	return response
}

export async function GetProductPlans(_price) {
	let response = await axios.post(
		`https://imecom.dev-api.hisenseportal.com/api/v1/customer/plans`,
		{
			price: _price
		}
	)
	return response
}

export async function postFormAssets(_data) {
	let response = await axios.post(
		`https://assets.dev-api.hisenseportal.com/api/v1/upload/d6357c2807362f`,
		_data
	)
	return response
}

export async function submitForm(_data) {
	let response = await axios.post(
		`https://imecom.dev-api.hisenseportal.com/api/v1/customer/create`,
		_data
	)
	return response
}

export async function GetPaymentUrl(_token) {
	let response = await axios.post(
		`https://imecom.dev-api.hisenseportal.com/api/v1/customer/invoice/pay/${_token}`
	)
	return response
}
