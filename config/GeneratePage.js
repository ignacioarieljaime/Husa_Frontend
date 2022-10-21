const Axios = require('axios').default
const PageController = require('../Controller/PageController')
const { FindComponent, GenerateComponentStructure } = require('../Controller/ComponentController')
const UrlController = require('../Controller/UrlController')

const requestHandler = (async () => {
	console.log('send request')
	try {
		let response = await Axios.get(
			'https://imcxm.dev-api.hisenseportal.com/api/husa/getPages'
		)
		console.log('get data')
		UrlController(response.data.data)
		response.data.data.forEach(page => {
			let pageComponents = FindComponent(page.widgets)
			PageController(page, GenerateComponentStructure(page, pageComponents))
		})
	} catch (error) {
		console.log(error)
	}
})()

// data.response.forEach(page => {
// 	let pageComponents = FindComponent(page.components)
// 	PageController(page, GenerateComponentStructure(page, pageComponents))
// })
