import UrlData from './urlData.json'

export const RouteHandler = _productId => {
	let route = UrlData.find(item => item.modelId === _productId)
	return route ? route.route : '/'
}
