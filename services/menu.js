import useFetch from 'hooks/useFetch'
const endPoint = '/getMenus'

export async function GetMenuApi(navigate, pageId) {
	let response = await useFetch(navigate).get(
		`${endPoint}`
	)
	return response
}
