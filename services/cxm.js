import axios from 'axios'

export async function getProductsWithCategoryApi(_categoryId) {
	let response = await axios.get(
		`${process.env.NEXT_PUBLIC_CXM_API_ROUTE}/searchProduct?categoryId=${_categoryId}&brand_id=${process.env.NEXT_PUBLIC_BRAND_ID}`,
		{
			headers: {
				BrandId: process.env.NEXT_PUBLIC_BRAND_ID
			}
		}
	)
	return response
}

export async function getSettingApi() {
	let response = await axios.get(
		`${process.env.NEXT_PUBLIC_CXM_API_ROUTE}/getSettings`,
		{
			headers: {
				BrandId: process.env.NEXT_PUBLIC_BRAND_ID
			}
		}
	)
	return response
}

export async function GetNewsApi(filters, count, exclude, controller) {
	console.log(filters.product)
	let response = await axios.get(
		`${process.env.NEXT_PUBLIC_CXM_API_ROUTE}/getPosts?type=news${
			filters.year.length
				? filters.year.map(_f => `&year[]=${_f}`).join('')
				: ''
		}${
			filters.product.length
				? filters.product.map(_f => `&tag[]=${_f}`).join('')
				: ''
		}${filters.search ? '&title=' + filters.search : ''}${exclude || ''}&page=${
			filters.page
		}&perPage=${count || 10}&brand_id=${process.env.NEXT_PUBLIC_BRAND_ID}`,
		{
			signal: controller ? controller.signal : undefined,
			headers: {
				BrandId: process.env.NEXT_PUBLIC_BRAND_ID
			}
		}
	)
	return response
}

export async function GetBlogsByTagApi(tag) {
	let response = await axios.get(
		`${process.env.NEXT_PUBLIC_CXM_API_ROUTE}/getPosts?type=blog${
			tag ? `&tag=${tag}` : ''
		}&brand_id=${process.env.NEXT_PUBLIC_BRAND_ID}`,
		{
			headers: {
				BrandId: process.env.NEXT_PUBLIC_BRAND_ID
			}
		}
	)
	return response
}

export async function getBlogsByIdApi(ids) {
	let response = await axios.get(
		`${process.env.NEXT_PUBLIC_CXM_API_ROUTE}/getPostTags?postIds=${ids}&brand_id=${process.env.NEXT_PUBLIC_BRAND_ID}`,
		{
			headers: {
				BrandId: process.env.NEXT_PUBLIC_BRAND_ID
			}
		}
	)
	return response
}
