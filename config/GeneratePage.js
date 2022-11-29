require('dotenv').config()
const fs = require('fs')
const Axios = require('axios').default
const PageController = require('../controller/PageController')
const RedirectsController = require('../controller/RedirectController.js')
const {
	FindComponent,
	GenerateComponentStructure
} = require('../controller/ComponentController')
const UrlController = require('../controller/UrlController')
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

const getRedirects = (async () => {
	console.log('send redirect request')
	try {
		let response = await axios.get(`${process.env.CXM_API_ROUTE}/getRedirects`)
		RedirectsController(response.data.data)
		response.data.data.forEach(item => generateRedirectPage(item))
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

const generateRedirectPage = async _data => {
	let route = _data.source_url
	if (!fs.existsSync(route)) {
		await fs.mkdirSync(`./pages/${route}`, { recursive: true })
		fs.writeFile(
			`./pages/${route}/index.js`,
			GenerateRedirect(_data, _data.redirect_url),
			err => {
				if (err) {
					console.error(err)
				}
			}
		)
	}
}

const GenerateRedirect = (_page, url) => {
	return `
	import { useEffect } from 'react';
	import { useRouter } from 'next/router'


	function Index${_page.id}({pim}) {
		const router = useRouter()

		useEffect(() => {
			router.push("${url}")
		}, [])


    	return (<section></section>)
	}

	export default Index${_page.id}`
}
