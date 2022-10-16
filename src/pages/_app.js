import React, { useEffect } from 'react'
// component
import ErrorBoundary from '../components/common/ErrorBoundary/ErrorBoundary'
import AOS from 'aos'

// style
import '../styles/App.scss'

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<ErrorBoundary>
			<Component {...pageProps} />
		</ErrorBoundary>
	)
}

export default MyApp
