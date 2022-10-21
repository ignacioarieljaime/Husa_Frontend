const path = require('path')
const fs = require('fs')

fs.readdir(path.resolve(__dirname, '../pages'), (err, files) => {
	if (err) throw err
	if (files.includes('index.js')) {
		files.forEach(file => {
			if (file !== '404.js' && file !== '_app.js') {
				fs.rm(
					path.resolve(__dirname, '../pages', file),
					{ recursive: true, force: true },
					err => {
						if (err) {
							return console.log('error occurred in deleting directory', err)
						}
					}
				)
			}
		})
		console.log('Directory deleted successfully')
	}
})

fs.readdir(path.resolve(__dirname, '../utils'), (err, files) => {
	if (err) throw err
	fs.rm(
		path.resolve(__dirname, '../utils/urlData.json'),
		{ recursive: true, force: true },
		err => {
			if (err) {
				return console.log('url files removed', err)
			}
		}
	)
})
