import axios from 'axios'

export default async function handler(req, res) {
	try {
		let response = await axios.post(
			`${process.env.NEXT_PUBLIC_CRM_API_ROUTE}/F63a195c3610ca`,
			{
				...req.body
			}
		)
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
		res.status(400).json(error.response.data)
	}
}
