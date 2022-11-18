const { withSentryConfig } = require('@sentry/nextjs')

const moduleExports = {
	// Your existing module.exports

	sentry: {
		// Use `hidden-source-map` rather than `source-map` as the Webpack `devtool`
		// for client-side builds. (This will be the default starting in
		// `@sentry/nextjs` version 8.0.0.) See
		// https://webpack.js.org/configuration/devtool/ and
		// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#use-hidden-source-map
		// for more information.
		hideSourceMaps: true
	}
}

const sentryWebpackPluginOptions = {
	// Additional config options for the Sentry Webpack plugin. Keep in mind that
	// the following options are set automatically, and overriding them is not
	// recommended:
	//   release, url, org, project, authToken, configFile, stripPrefix,
	//   urlPrefix, include, ignore

	silent: true // Suppresses all logs
	// For all available options, see:
	// https://github.com/getsentry/sentry-webpack-plugin#options.
}
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		NEXT_PUBLIC_CXM_API_ROUTE:
			process.env.CXM_API_ROUTE ||
			'https://imcxm.stage-api.hisenseportal.com/api/husa'
	},
	sentry: withSentryConfig(moduleExports, sentryWebpackPluginOptions)
}

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
// module.exports = withSentryConfig(
// 	moduleExports,
// 	sentryWebpackPluginOptions,
// 	nextConfig,
// 	env: {
// 		NEXT_PUBLIC_CXM_API_ROUTE:
// 			process.env.CXM_API_ROUTE ||
// 			'https://imcxm.stage-api.hisenseportal.com/api/husa'
// 	}
// )

module.exports = nextConfig
