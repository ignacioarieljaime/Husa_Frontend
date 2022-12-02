const fs = require('fs')

module.exports = UrlController = async _pages => {
	let pagesUrl = _pages.map(item => {
		return {
			route: item.route,
			id: item.id,
			modelType: item.model_type,
			modelId: item.model_id
		}
	})
	if (!fs.existsSync(`./utils/urlData.json`)) {
		generateFile(pagesUrl)
	} else {
		fs.readFile('./utils/urlData.json', 'utf-8', function (err, data) {
			if (err) throw err
			generateFile([...JSON.parse(data), ...pagesUrl])
		})
	}
}

const generateFile = _urls => {
	fs.writeFile(`./utils/urlData.json`, JSON.stringify(_urls), err => {
		if (err) {
			console.error(err)
		}
	})
}
