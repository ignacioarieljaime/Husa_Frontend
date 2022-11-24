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
		domains: ['assets.hisenseportal.com']
	}
}

const sentryWebpackPluginOptions = {
	silent: true
}

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions)
