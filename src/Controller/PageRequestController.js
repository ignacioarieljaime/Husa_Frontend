const { Axios } = require('axios')
const data = require('./../page.json')
const {
	FindComponent,
	GenerateComponentStructure
} = require('./ComponentController')
const PageController = require('./PageController')

module.exports = () => {
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
}
