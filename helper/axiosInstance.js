import axios from 'axios'

const axiosInstance = axios.create({
	baseURL: 'https://impim.dev-api.hisenseportal.com/api/cms'
})

export default axiosInstance
