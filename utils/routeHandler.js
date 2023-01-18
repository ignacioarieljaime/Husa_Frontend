import UrlData from './urlData.json'

export const RouteHandler = (_productId, _type) => {
	let route = null
	if (_type) {
		UrlData.find(item => {
			if (item.modelId === _productId && item.modelType === _type) {
				route = item
			}
		})
	} else {
		UrlData.find(item => {
			if (item.modelId === _productId) {
				route = item
			}
		})
	}
	return route ? route.route : null
}
