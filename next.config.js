const { withSentryConfig } = require('@sentry/nextjs')

const moduleExports = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		NEXT_PUBLIC_CXM_API_ROUTE:
			process.env.CXM_API_ROUTE ||
			'https://imcxm.stage-api.hisenseportal.com/api/husa'
	},
	sentry: {
		hideSourceMaps: true,
		transpileClientSDK: true
	},
	images: {
		domains: ['assets.hisenseportal.com', 'assets.hisense-usa.com', '*'],
		deviceSizes: [360, 640, 750, 828, 1080, 1200, 1920, 2048, 3840]
	}
}

const sentryWebpackPluginOptions = {
	silent: true
}

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions)
