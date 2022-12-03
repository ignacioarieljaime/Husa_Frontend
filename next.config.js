const { withSentryConfig } = require('@sentry/nextjs')

const moduleExports = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		NEXT_PUBLIC_CXM_API_ROUTE:
			process.env.CXM_API_ROUTE ||
			'https://imcxm.stage-api.hisenseportal.com/api/husa',
		NEXT_PUBLIC_ASSETS_API_ROUTE:
			process.env.NEXT_PUBLIC_ASSETS_API_ROUTE ||
			'https://assets.hisenseportal.com/api/v1/upload/d6357c2807362f'
	},
	sentry: {
		hideSourceMaps: true
	},
	images: {
		domains: ['assets.hisenseportal.com', 'assets.hisense-usa.com']
	}
}

const sentryWebpackPluginOptions = {
	silent: true
}

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions)
