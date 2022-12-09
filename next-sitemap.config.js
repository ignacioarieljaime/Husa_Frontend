/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.SITE_URL || 'https://public.stage.hisenseportal.com/',
	generateRobotsTxt: true // (optional)
	// ...other options
}
