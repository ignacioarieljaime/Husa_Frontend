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
						disallow: '/televisions/all-tvs',
						disallow: '/audio/home-audio',
						disallow: '/home-appliance/dishwashers/all-dishwashers',
						disallow: '/home-appliance/refrigerators/all-refrigerators',
						disallow: '/home-appliance/microwave-ovens/all-microwave-ovens',
						disallow: '/home-appliance/electric-range',
						disallow: '/home-appliance/kitchen-suites',
						disallow: '/air-products/all-air-products',
						allow: '/'
				  }
				: {
						userAgent: '*',
						disallow: '/'
				  }
		]
	}
}
