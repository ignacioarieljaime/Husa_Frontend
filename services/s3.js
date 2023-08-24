import axios from 'axios'
import { toast } from 'react-toastify'

const getUploadLink = async body => {
	console.log(body)
	let response = await axios.post(
		`${process.env.NEXT_ASSETS_API_S3}/upload/s3/upload-link/sd64da0953d3ecb`,
		body
	)

	return response
}

const uploadAsset = async (url, body) => {
	console.log(body)
	let response = await axios.put(url, body, {
		headers: {
			'Content-Type': 'application/octet-stream; charset=binary'
		}
	})

	return response
}

const verifyUpload = async token => {
	let response = await axios.post(
		`${process.env.NEXT_ASSETS_API_S3}/upload/s3/verify/${token}`
	)

	return response
}

export const uploadToS3 = async asset => {
	// step 1 - get the upload link and verification token from s3 using asset name, asset size,and directory token
	try {
		let response = await getUploadLink({
			file_name: asset.name,
			file_size: asset.size
		})
		if (response.data.token && response.data.url) {
			// step 2 - upload asset to s3 servers using the upload link that we got from previous step
			const { url, token } = response.data
			try {
				let response = await uploadAsset(url, asset)
				if (response.status === 200) {
					// step 3 - verfiy our upload from our server using s3 verification token from step 1
					try {
						let response = await verifyUpload(token)
						if (response.data.download_link) {
							return response.data.download_link
						}
					} catch (error) {
						console.error(error)
						toast.error('There was an error while uploading')
					}
				}
			} catch (error) {
				console.error(error)
				toast.error(error?.response?.data?.message)
			}
		}
	} catch (error) {
		console.error(error)
		toast.error(error?.response?.data?.message)
	}
}
