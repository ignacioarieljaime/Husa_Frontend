import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
    dsn: SENTRY_DSN || 'https://06dcc5a2286d44bf954cd3bb9d2300aa@o4504095127502848.ingest.sentry.io/4504128249856000',
    environment: process.env.NODE_ENV,
    tracesSampleRate: 1.0,
});
