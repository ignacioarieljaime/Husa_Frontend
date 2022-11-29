require('dotenv').config()
const Axios = require('axios').default
const PageController = require('../controller/PageController')
const {
	FindComponent,
	GenerateComponentStructure
} = require('../controller/ComponentController')
const UrlController = require('../controller/UrlController')
const { GenerateRedirectPage } = require('../controller/RedirectPageController')
const { default: axios } = require('axios')

const requestHandler = (async () => {
	console.log('send pages request')
	try {
		let response = await Axios.get(`${process.env.CXM_API_ROUTE}/getPages`)
		console.log('get pages')
		controlPagesAndGenerate(response.data.data, 'pages')
	} catch (error) {
		console.log(error)
	}
})()

// const BlogRequestHandler = (async () => {
// 	console.log('send blog request')
// 	try {
// 		let response = await Axios.get(`${process.env.CXM_API_ROUTE}/getPosts`)
// 		controlPagesAndGenerate(response.data.data, 'blog')
// 		console.log('get blog')
// 	} catch (error) {
// 		console.log(error)
// 	}
// })()

const controlPagesAndGenerate = (_pages, _condition) => {
	UrlController(_pages)
	_pages.forEach(page => {
		let pageComponents = FindComponent(page.widgets)
		PageController(
			page,
			GenerateComponentStructure(page, pageComponents, _condition)
		)
	})
}

// const redirectRequestHandler = (async () => {
// 	console.log('send redirects request')
// 	try {
// 		let response = await Axios.get(`${process.env.CXM_API_ROUTE}/getRedirects`)
// 		console.log('get redirects')
// 		response.data.data.forEach(redirect => {
// 			if (redirect.redirect_type === 'From') {
// 				let newRoute = {
// 					...redirect,
// 					route: redirect.redirect_url,
// 					id: redirect.id
// 				}
// 				PageController(newRoute, GenerateRedirectPage(newRoute))
// 			}
// 		})
// 	} catch (error) {
// 		console.log(error)
// 	}
// })()
// data.response.forEach(page => {
// 	let pageComponents = FindComponent(page.components)
// 	PageController(page, GenerateComponentStructure(page, pageComponents))
// })
