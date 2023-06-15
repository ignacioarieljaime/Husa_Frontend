const fs = require('fs')

module.exports = async (page, content) => {
	let route = ''

	if (page.route === '/download-firmware') {
		await fs.mkdirSync(`./pages/${page.route}`, { recursive: true })
		fs.writeFile(`./pages/${page.route}/[productId].js`, content, err => {
			if (err) {
				console.error(err)
			}
		})
		return
	}

	if (page?.route.includes('/index')) {
		route = page.route.replace('/index', '')
	} else {
		if (page.route === '/') {
			route = page.route
		} else {
			page.route[0] === '/'
				? (route = page.route.replace('/', ''))
				: (route = page.route)
		}
	}

	if (page.route === '/404' || route === '/') {
		fs.writeFile(
			`./pages/${page.title === '404' ? '404.js' : 'index.js'}`,
			content,
			err => {
				if (err) {
					console.error(err)
				}
			}
		)
	} else if (!fs.existsSync(route)) {
		await fs.mkdirSync(`./pages/${route}`, { recursive: true })
		fs.writeFile(`./pages/${route}/index.js`, content, err => {
			if (err) {
				console.error(err)
			}
		})
	}
}
