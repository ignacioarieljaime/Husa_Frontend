require('dotenv').config()
const axios = require('axios')
const express = require('express')
const next = require('next')
const notifier = require('node-notifier')
const path = require('path')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
let redirectsRoute = []

const redirectRequestHandler = (async () => {
	console.log('send redirect request')
	try {
		let response = await axios.get(`${process.env.CXM_API_ROUTE}/getRedirects`)
		redirectsRoute = response.data.data
		console.log('get redirect request')
	} catch (error) {
		console.log(error)
	}
})()

app.prepare().then(() => {
	const port = process.env.APP_PORT
	const server = express()
	redirectsRoute.map(
		item =>
			item.source_url &&
			server.all(item.source_url, (req, res) => {
				return res.redirect(item.redirect_url)
			})
	)

	server.all('*', (req, res) => {
		return handle(req, res)
	})

	server
		.listen(port, err => {
			if (err) throw err
			console.log(`> Ready on http://localhost:${port ? port : 3000}`)
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
		.on('error', e => {
			console.log('Error happened: ', e.message)
		})
})
