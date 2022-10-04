const fs = require('fs')

module.exports = async (page, content) => {
	let route = ''
	if (page.route.includes('/index')) {
		route = page.route.replace('/index', '')
	} else {
		route = page.route
	}
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
