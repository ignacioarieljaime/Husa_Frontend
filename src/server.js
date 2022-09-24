require('dotenv').config()
const Axios = require('axios').default
const express = require('express')
const next = require('next')
const data = require('./page.json')
const notifier = require('node-notifier')
const path = require('path')
const port = process.env.APP_PORT
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const {
	FindComponent,
	GenerateComponentStructure
} = require('./Controller/ComponentController')
const { PageController } = require('./Controller/PageContaroller')

// Axios.get('https://imcxm.exodusapi.influencedev.com/api/page/getPages', {
// 	headers: {
// 		Authorization:
// 			'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiYjU2MDBlOGRmNjE1MzA1MmUyMDAyMjFiYzRmOTkxMzQ3MjRjZTIxOGIwOTVjMGYyN2Q3ZDA1MTE1ODc5MGY2ZmM0NjI3YTZhOTkzYTJlNDYiLCJpYXQiOjE2NjM4MjM5MzIuMjM3NzIyLCJuYmYiOjE2NjM4MjM5MzIuMjM3NzI2LCJleHAiOjE2OTUzNTk5MzIuMjI4NjM3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.AHcT8tYMpUqJr3kKDpVVirzPaQybRT1VZyr_4RyrLweVPd4XM0_Iv-5UwDbz8S3TZBEMzGF2iHQsJNQqsdBE5e4QOJ6TocQUG8bL7t6Gar__cnGg96AoAlCvi-bxaVYbkNCWPxi823agHlfbBU71QSPM9SEY8Us1f4gnLWB0AtLlFwAOlbuSrBNCskWmBSC7DTPYfH2dTNCTlty_-iWXWMPJfhNN9kYek1bdyn5KS3xSwNj7E9IMc6NlXv2mpPFMra2SDe6Z_1cMVp0PCeNHmci4KKHPXDxeehYl5KVNuut6FwiHEO_FcYyHjlDW5YZAG8XK2u3jITIqwCN9WgNu1AGl4tWn8No5ASeun9k4cF-wbMcnNO6nS1Mnr4K3OpyfBE_zcF-KwRrTjYScMRVouiTpPPhpDHu7gDkwxnDqfqxrV21Pp53UZXJvX1-Gz8UL06Wd6AKtC2VxvBx7BVUGDiehZTH-FAKFxOqblV0qmjLKdmFKUMR0mCQ83755lvBaVjv-7WtOLo-2HSBc8M1BErdLMbc2JCIAAYtzUx8-JRlS2J6pAFmknITAtoSW5BIYBH4r9SrKU-P8aOIrRZV_H0PpJWiAB1cIuRwC-006ndJgfK7CwfIPouQxhNvyhNbCJ6SOptN4Os5Y-KkCjWlMfvIob6PCOJ_GLxguq_mMsxo'
// 	}
// })
// 	.then(function (response) {
// 		response.data.data.forEach(page => {
// 			let pageComponents = FindComponent(page.components)
// 			PageController(page, GenerateComponentStructure(page, pageComponents))
// 		})
// 	})
// 	.catch(function (error) {
// 		console.log(error)
// 	})
data.response.forEach(page => {
	let pageComponents = FindComponent(page.components)
	PageController(page, GenerateComponentStructure(page, pageComponents))
})
app.prepare().then(() => {
	const server = express()

	server.all('*', (req, res) => {
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
