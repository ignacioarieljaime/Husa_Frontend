import axios from 'axios'

export async function getFirmWareModels(_param) {
	let response = await axios.get(
		`${process.env.NEXT_PUBLIC_SERVICE_PORTAL_API_ROUTE}/model?sn=${_param}`,
		{
			headers: {
				BrandId: process.env.NEXT_PUBLIC_BRAND_ID
			}
		}
	)
	return response
}
