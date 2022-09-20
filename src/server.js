require('dotenv').config()
const data = require('./page.json')
const express = require('express')
const next = require('next')
const notifier = require('node-notifier')
const path = require('path')
const port = process.env.APP_PORT
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const fs = require('fs')
const {
	FindComponent,
	GenerateComponentStructure
} = require('./Controller/ComponentController')

app.prepare().then(() => {
	const server = express()

	server.all('*', (req, res) => {
		data.response.forEach(page => {
			let pageComponents = FindComponent(page.components)
			makePage(page, GenerateComponentStructure(page, pageComponents))
		})

		return handle(req, res)
	})

	server.listen(port, err => {
		if (err) throw err
		console.log(`> Ready on http://localhost:${port}`)
		notifier.notify(
			{
				title: 'husa',
				message: `husa  App is run! \nmode : ${
					process.env.NODE_ENV === 'production' ? 'production' : 'development'
				}`,
				appID: '\t',
				icon: path.join(__dirname, '../', 'public', 'logo.png'),
				sound: true,
				wait: true
			},
			function (err, response, metadata) {
				// open(`http://localhost:${port}`);
			}
		)
	})
})

const makePage = async (page, content) => {
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
		fs.writeFile(`${page.pageRoute}/${page.dynamicRote ? page.dynamicRote : 'index.js'}`, content, err => {
			if (err) {
				console.error(err)
			}
		})
	}
}
