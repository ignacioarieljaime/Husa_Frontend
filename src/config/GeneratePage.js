const Axios = require('axios').default
const data = require('./../page.json')
const {
	PageGeneratorController
} = require('../Controller/PageGeneratorController')
const PageController = require('./../Controller/PageController')

console.log('send request')
Axios.get('https://imcxm.exodusapi.influencedev.com/api/husa/getPages')
	.then(function (response) {
		console.log('get data')
		response.data.data.forEach(page => {
			PageController(page, PageGeneratorController(page))
		})
	})
	.catch(function (error) {
		console.log(error)
	})

// data.response.forEach(page => {
// 	let pageComponents = FindComponent(page.components)
// 	PageController(page, GenerateComponentStructure(page, pageComponents))
// })
