const { withSentryConfig } = require('@sentry/nextjs')

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
			'https://imecom.dev-api.hisenseportal.com/api/v1',
		NEXT_PUBLIC_CRM_API_ROUTE:
			process.env.CRM_API_ROUTE ||
			'https://imcrm.dev-api.hisenseportal.com/api/hisense',
		NEXT_PUBLIC_PIM_API_ROUTE:
			process.env.PIM_API_ROUTE ||
			'https://impim.dev-api.hisenseportal.com/api/cms'
	},
	sentry: {
		hideSourceMaps: true
	},
	images: {
		domains: ['assets.hisenseportal.com', 'assets.hisense-usa.com', '*'],
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

const sentryWebpackPluginOptions = {
	silent: true
}

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions)
