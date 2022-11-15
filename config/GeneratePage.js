require('dotenv').config()
const Axios = require('axios').default
const PageController = require('../Controller/PageController')
const {
	FindComponent,
	GenerateComponentStructure
} = require('../Controller/ComponentController')
const UrlController = require('../Controller/UrlController')
const { GenerateRedirectPage } = require('../Controller/RedirectPageController')

const requestHandler = (async () => {
	console.log('send pages request')
	try {
		let response = await Axios.get(`${process.env.CXM_API_ROUTE}/getPages`)
		console.log('get pages')
		UrlController(response.data.data)
		response.data.data.forEach(page => {
			let pageComponents = FindComponent(page.widgets)
			PageController(page, GenerateComponentStructure(page, pageComponents))
		})
	} catch (error) {
		console.log(error)
	}
})()
const redirectRequestHandler = (async () => {
	console.log('send redirects request')
	try {
		let response = await Axios.get(`${process.env.CXM_API_ROUTE}/getRedirects`)
		console.log('get redirects')
		response.data.data.forEach(redirect => {
			if (redirect.redirect_type === 'From') {
				let newRoute = {
					...redirect,
					route: redirect.redirect_url,
					id: redirect.id
				}
				PageController(newRoute, GenerateRedirectPage(newRoute))
			}
		})
	} catch (error) {
		console.log(error)
	}
})()
// data.response.forEach(page => {
// 	let pageComponents = FindComponent(page.components)
// 	PageController(page, GenerateComponentStructure(page, pageComponents))
// })
