require('dotenv').config()
const Axios = require('axios').default
const PageController = require('../controller/PageController')
const {
	FindComponent,
	GenerateComponentStructure,
	GenerateNotFoundPage,
	GenerateDynamicPageComponents
} = require('../controller/ComponentController')
const UrlController = require('../controller/UrlController')

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

const controlPagesAndGenerate = (_pages, _condition) => {
	UrlController(_pages)
	_pages.forEach(page => {
		let pageComponents = FindComponent(page.widgets)

		if (page.route === '/preview/[pageid]') {
			if (process.env.APP_LOCATION !== 'production') {
				PageController(
					page,
					GenerateDynamicPageComponents(page, pageComponents, _condition)
				)
			}
		} else {
			PageController(
				page,
				page.route === '/404'
					? GenerateNotFoundPage(page, pageComponents, _condition)
					: GenerateComponentStructure(page, pageComponents, _condition)
			)
		}
	})
}
