const fs = require('fs')

module.exports = UrlController = async _pages => {
	let pagesUrl = _pages.map(item => {
		return {
			route: item.route,
			id: item.id,
			modelId: item.model_id
		}
	})
	if (!fs.existsSync(`./utils/urlData.json`)) {
		fs.writeFile(`./utils/urlData.json`, JSON.stringify(pagesUrl), err => {
			if (err) {
				console.error(err)
			}
		})
	}
}
