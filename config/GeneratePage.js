require('dotenv').config()
const Axios = require('axios').default
const PageController = require('../controller/PageController')
const allPages = require('../rootes.json')

const {
	FindComponent,
	GenerateComponentStructure,
	GenerateNotFoundPage,
	GenerateDynamicPageComponents,
	generateFirmwarePage
} = require('../controller/ComponentController')
const UrlController = require('../controller/UrlController')

const controlPagesAndGenerate = (_pages, _condition) => {
	UrlController(_pages)
	_pages.forEach(page => {
		if (!page.route.includes(' ')) {
			let pageComponents = FindComponent(page.widgets)

			PageController(
				page,
				page.route === '/404'
					? GenerateNotFoundPage(page, pageComponents, _condition)
					: GenerateComponentStructure(page, pageComponents, _condition)
			)
		}
	})
	if (process.env.APP_LOCATION !== 'production') {
		PageController({ route: '/preview' }, GenerateDynamicPageComponents())
	}
	PageController({ route: '/download-firmware' }, generateFirmwarePage())
}

const requestHandler = (async () => {
	console.log('send pages request')
	try {
		let response = await Axios.get(`${process.env.CXM_API_ROUTE}/getPages`, {
			headers: {
				BrandId: process.env.BRAND_ID
			}
		})
		console.log('get pages')
		controlPagesAndGenerate(response?.data?.data, 'pages')
		// controlPagesAndGenerate(allPages.data, 'pages')
	} catch (error) {
		console.log(error)
	}
})()
