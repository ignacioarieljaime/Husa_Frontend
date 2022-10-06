const Axios = require('axios').default
const PageController = require('./../controller/PageController')
const { PageGeneratorController } = require('./../controller/PageGeneratorController')
const data = require('./../page.json')


const requestHandler = (async () => {
	console.log('send request')
	try {
		let response = await Axios.get(
			'https://imcxm.exodusapi.influencedev.com/api/husa/getPages'
		)
		console.log('get data')
		response.data.data.forEach(page => {
			PageController(page, PageGeneratorController(page))
		})
	} catch (error) {
		console.log(error)
	}
})()

// data.response.forEach(page => {
// 	let pageComponents = FindComponent(page.components)
// 	PageController(page, GenerateComponentStructure(page, pageComponents))
// })
