import useFetch from 'hooks/useFetch'
const endPoint = '/block'

export async function GetPageBlocks(navigate, pageId) {
	let response = await useFetch(navigate).get(
		`${endPoint}/getBlocksByPageId/${pageId}`
	)
	return response
}
