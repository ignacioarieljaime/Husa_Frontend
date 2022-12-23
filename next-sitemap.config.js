/** @type {import('next-sitemap').IConfig} */

let robotAccessibility = JSON.parse(process.env.ROBOT_ACCESSIBILITY) || false
let siteUrl = process.env.SITE_URL || 'https://public.stage.hisenseportal.com/'

module.exports = {
	siteUrl: siteUrl,
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [
			robotAccessibility
				? {
						userAgent: '*',
						allow: '/'
				  }
				: {
						userAgent: '*',
						disallow: '/'
				  }
		]
	}
}
