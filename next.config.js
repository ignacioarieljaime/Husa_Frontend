const moduleExports = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		NEXT_PUBLIC_CXM_API_ROUTE:
			process.env.CXM_API_ROUTE ||
			'https://imcxm.stage-api.hisenseportal.com/api/husa',
		NEXT_PUBLIC_ASSETS_API_ROUTE:
			process.env.ASSETS_API_ROUTE ||
			'https://assets.hisenseportal.com/api/v1/upload/d6357c2807362f',
		NEXT_PUBLIC_ECOM_API_ROUTE:
			process.env.ECOM_API_ROUTE ||
			'https://imecom.stage-api.hisenseportal.com/api/v1',
		NEXT_PUBLIC_CRM_API_ROUTE:
			process.env.CRM_API_ROUTE ||
			'https://imcrm2.dev-api.hisenseportal.com/api/v1/form/fill',
		NEXT_PUBLIC_PIM_API_ROUTE:
			process.env.PIM_API_ROUTE ||
			'https://impim.stage-api.hisenseportal.com/api/cms',
		NEXT_PUBLIC_BRAND_ID: process.env.BRAND_ID || 3,
		NEXT_PUBLIC_GTM_ID: process.env.GTM_ID || 'GTM-WBPC7RT'
	},

	images: {
		domains: [
			'assets.hisenseportal.com',
			'assets.hisense-usa.com',
			'hisense-usa.stagingtank.com',
			'*'
		],
		deviceSizes: [360, 640, 750, 828, 1080, 1200, 1920, 2048, 3840]
	},
	async headers() {
		return [
			{
				source: '/:all*(svg|jpg|png)',
				locale: false,
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=9999999999, must-revalidate'
					}
				]
			}
		]
	}
}

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions)
// module.exports = moduleExports
