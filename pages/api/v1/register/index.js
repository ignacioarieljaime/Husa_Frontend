import axios from 'axios'

export default async function handler(req, res) {
	try {
		let response = await axios.post(
			`${process.env.NEXT_PUBLIC_CRM_API_ROUTE}/F63a195c3610ca`,
			{
				...req.body
			}
		)
		res.status(201).json(response.data)
	} catch (error) {
		res.status(400).json(error.response.data)
	}
}
