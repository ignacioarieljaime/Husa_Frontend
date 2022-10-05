// component
import ErrorBoundary from 'components/common/ErrorBoundary/ErrorBoundary'

// style
import '../styles/App.scss'

function MyApp({ Component, pageProps }) {
	return (
		// <ErrorBoundary>
			<Component {...pageProps} />
		// </ErrorBoundary>
	)
}

export default MyApp
