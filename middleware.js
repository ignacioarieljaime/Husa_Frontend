import { NextResponse } from 'next/server'

export async function middleware(request) {
	let reqUrl = request.nextUrl.pathname

	if (request.nextUrl.search) {
		reqUrl += request.nextUrl.search
	}
	if (!reqUrl.includes('.')) {
		let pageInfo = null
		console.error('start middleware')
		console.log(
			`${process.env.CXM_API_ROUTE}/getPageByUrl/${encodeURIComponent(reqUrl)}`
		)
		await fetch(
			`${process.env.CXM_API_ROUTE}/getPageByUrl/${encodeURIComponent(reqUrl)}`
		)
			.then(response => response.json())
			.then(data => (pageInfo = data))
			.catch(err => console.log(err))
		if (
			pageInfo?.message === 'Page not found!' ||
			pageInfo?.status?.name !== 'Published'
		) {
			console.log("404")
			const url = request.nextUrl.clone()
			url.pathname = `/404`
			return NextResponse.rewrite(url)
		}

		if (pageInfo.redirects.redirect_to) {
			const url = new URL(pageInfo.redirects.redirect_to, request.url)
			return NextResponse.redirect(url)
		}
	}
	// if (pageInfo) {
	// 	console.log(pageInfo)
	// } else {
	// 	console.log('404')
	// 	const url = request.nextUrl
	// 	url.pathname = `/404`
	// 	return NextResponse.rewrite(url)
	// }

	// if (redirectedUrl.find(item => item?.source_url === reqUrl)) {
	// 	const url = new URL(
	// 		redirectedUrl.find(item => item?.source_url === reqUrl).redirect_url,
	// 		request.url
	// 	)
	// 	return NextResponse.redirect(url)
	// }
}
