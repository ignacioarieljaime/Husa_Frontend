/** @type {import('next-sitemap').IConfig} */

let robotAccessibility = process.env.ROBOT_ACCESSIBILITY || false
let siteUrl = process.env.SITE_URL || 'https://public.stage.hisenseportal.com/'

module.exports = {
	siteUrl: siteUrl,
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [
			(robotAccessibility === true)
				? {
						userAgent: '*',
						allow: '/',
						disallow: ['/televisions/all-tvs', '/audio/home-audio', '/home-appliance/dishwashers/all-dishwashers', '/home-appliance/refrigerators/all-refrigerators', '/home-appliance/microwave-ovens/all-microwave-ovens', '/home-appliance/electric-range', '/home-appliance/kitchen-suites', '/air-products/all-air-products',]
				  }
				: {
						userAgent: '*',
						disallow: '/'
				  }
		]
	}
}