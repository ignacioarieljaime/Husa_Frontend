const Axios = require('axios').default
const PageController = require('./../controller/PageController')
const { FindComponent, GenerateComponentStructure } = require('./../controller/ComponentController')

const requestHandler = (async () => {
	console.log('send request')
	try {
		let response = await Axios.get(
			'https://imcxm.dev-api.hisenseportal.com/api/husa/getPages'
		)
		console.log('get data')
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
