const fs = require('fs')

module.exports = async (page, content) => {
	let route = ''
	console.log(page.route ,'---------------')
	if (page.route.includes('/index')) {
		route = page.route.replace('/index', '')
	} else {
		page.route[0] === '/'
			? (route = page.route.replace('/', ''))
			: (route = page.route)
	}
	console.log(route ,"++++++++++++++++++++++ route");
	if (route === '/') {
		fs.writeFile(`./pages/index.js`, content, err => {
			if (err) {
				console.error(err)
			}
		})
	} else if (!fs.existsSync(route)) {
		await fs.mkdirSync(`./pages/${route}`)
		fs.writeFile(`./pages/${route}/index.js`, content, err => {
			if (err) {
				console.error(err)
			}
		})
	}
}
