const fs = require('fs')


const PageController = async (page, content) => {
	if (page.isHome) {
		fs.writeFile(
			`${page.pageRoute}/${page.dynamicRote ? page.dynamicRote : 'index.js'}`,
			content,
			err => {
				if (err) {
					console.error(err)
				}
			}
		)
	}
	if (!fs.existsSync(page.pageRoute)) {
		await fs.mkdirSync(page.pageRoute)
		fs.writeFile(
			`${page.pageRoute}/${page.dynamicRote ? page.dynamicRote : 'index.js'}`,
			content,
			err => {
				if (err) {
					console.error(err)
				}
			}
		)
	}
}

module.exports = {
	PageController
}
