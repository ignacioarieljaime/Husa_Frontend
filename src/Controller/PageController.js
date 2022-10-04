const fs = require('fs')

module.exports = async (page, content) => {
	let route = ''
	if (page.route.includes('/index')) {
		route = page.route.replace('/index', '')
	} else {
		route = page.route
	}
	if (route === '/') {
		fs.writeFile(`./src/pages/index.js`, content, err => {
			if (err) {
				console.error(err)
			}
		})
	} else if (!fs.existsSync(route)) {
		await fs.mkdirSync(`./src/pages/${route}`)
		fs.writeFile(`./src/pages/${route}/index.js`, content, err => {
			if (err) {
				console.error(err)
			}
		})
	}
}
