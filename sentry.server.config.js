import * as Sentry from '@sentry/nextjs'

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

Sentry.init({
	dsn: 'https://09bf76ce59be40c5a315a038227449a5@o4504095127502848.ingest.sentry.io/4504128249856000',
	environment: process.env.NODE_ENV,
	tracesSampleRate: 1.0,
	debug: false
})
