const fs = require('fs')

module.exports = RedirectsController = async _redirects => {
	if (!fs.existsSync(`./utils/redirects.json`)) {
		generateFile(_redirects)
	} else {
		fs.readFile('./utils/redirects.json', 'utf-8', function (err, data) {
			if (err) throw err
			generateFile([...JSON.parse(data), ..._redirects])
		})
	}
}

const generateFile = _urls => {
	fs.writeFile(`./utils/redirects.json`, JSON.stringify(_urls), err => {
		if (err) {
			console.error(err)
		}
	})
}
