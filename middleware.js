import { NextResponse } from 'next/server'
import RedirectData from 'utils/redirects.json'
let redirectedUrl = RedirectData.map(item => item.source_url)

export function middleware(request) {
	if (
		redirectedUrl.find(item => item.source_url === request.nextUrl.pathname)
	) {
		const url = new URL(
			redirectedUrl.find(
				item => item.source_url === request.nextUrl.pathname
			).redirect_url,
			request.url
		)
		return NextResponse.redirect(url)
	}
}

// export const config = {
// 	matcher: redirectedUrl
// }
