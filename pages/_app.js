// component
import ErrorBoundary from 'components/common/ErrorBoundary/ErrorBoundary'

// redux
import { Provider } from 'react-redux'
import { store } from 'redux/store'

// style
import 'styles/App.scss'

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<ErrorBoundary>
				<Component {...pageProps} />
			</ErrorBoundary>
		</Provider>
	)
}

export default MyApp
