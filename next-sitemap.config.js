/** @type {import('next-sitemap').IConfig} */

let robotAccessibility = process.env.ROBOT_ACCESSIBILITY || false
console.log('robotAccessibility:', robotAccessibility);
let siteUrl = process.env.SITE_URL || 'https://public.stage.hisenseportal.com/'

module.exports = {
	siteUrl: siteUrl,
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [ {
						userAgent: '*',
						disallow: '/'
				  }
		]
	}
}