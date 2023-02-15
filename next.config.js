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
		NEXT_PUBLIC_GTM_ID: process.env.GTM_ID || 'GTM-WBPC7RT',
		NEXT_PUBLIC_VELARO_ID: process.env.VELARO_ID || '20216',
		NEXT_PUBLIC_APP_LOCATION: process.env.APP_LOCATION || 'stage',
		NEXT_PUBLIC_CHANNEL_ADVISOR_TOKEN:
			process.env.CHANNEL_ADVISOR_TOKEN ||
			'MQAyADAANAAwADgANAA5AHwASABpAHMAZQBuAHMAZQBfAFUAUwBfAEUATgBfAFAATABSAFMAUwB8AFoANQA4AFEASAA4AG4AdgB1AHgARABRAGwASABSAEQAQwBDADcATQA0AFcAQQArAHUAYQA5AE4AcQBmAFcAZgBFAHYAagBiAEIATQBKAGwAbgB1AGoAMgBMAEMAaABJAGsAcABaADMARwBGAGgATgBMAEUAbgBTAEwAUgBCAEwAWQBmAEwAZwA3AGsATQBkAFoATABoADAAeABjAEcAbgBjAFkATAB1AG4AZQB6AGMAWAArAFoAdwBSAGoAUgAxAE8AUABPAFkAaABMAEUATgBKAHkAYwA9AHwAZQBuAHwAUABsAHIAcwBzAHwA'
	},

	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**'
			},
			{
				protocol: 'http',
				hostname: '**'
			}
		],
		domains: [
			'assets.hisenseportal.com',
			'assets.hisense-usa.com',
			'hisense-usa.stagingtank.com',
			'files.hisense-usa.com',
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

// module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions)
module.exports = moduleExports
