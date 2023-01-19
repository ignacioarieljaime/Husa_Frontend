const path = require('path')
const fs = require('fs')

fs.readdir(path.resolve(__dirname, '../public'), (err, files) => {
	if (err) throw err
	files.forEach(file => {
		if (file.includes('sitemap')) {
			fs.rm(
				path.resolve(__dirname, '../public', file),
				{ recursive: true, force: true },
				err => {
					if (err) {
						return console.log('error occurred in deleting sitemap', err)
					}
					console.log('sitemap deleted successfully')
				}
			)
		}
	})
})
