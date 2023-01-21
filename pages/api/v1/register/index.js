import axios from 'axios'

export default async function handler(req, res) {
	
	try {
		let response = await axios({
			method: 'post',
			url: `${process.env.NEXT_PUBLIC_CRM_API_ROUTE}/F63a195c3610ca`,
			headers: {},
			data: {
				...req.body
			}
		})
		res.status(200).json({
			data: {
				Status: 'success',
				Message: 'Successfully registered product'
			},
			success: true,
			message: '',
			code: 'OK'
		})
	} catch (error) {
		res.status(200).json(errorHandler(error.response.data.errors))
	}
}

const errorHandler = _data => {
	let errorItems = []
	for (var property in _data) {
		errorItems.push({
			message: `${property} cannot be blank`,
			fieldName: `${property}`,
			messageType: 'error',
			messageCast: 'text'
		}) // Outputs: foo, fiz or fiz, foo
	}
	return {
		data: errorItems,
		success: false,
		message: 'Error registering product',
		code: 'ERROR'
	}
}
