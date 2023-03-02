// component
import ErrorBoundary from 'components/common/ErrorBoundary/ErrorBoundary'

// redux
import { Provider } from 'react-redux'
import { store } from 'redux/store'

// style
import 'styles/App.scss'
import Script from 'next/script'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
	const [comp, setComp] = useState(<></>)

	useEffect(() => {
		const load = async () => {
			const velaroGenerator = (await import('../components/common/VelaroChat'))
				.default
			setComp(velaroGenerator)
		}

		load()
	}, [])

	// if (typeof window === 'undefined') {
	// 	return <></>
	// } else {
	return (
		<ErrorBoundary>
			<Provider store={store}>
				<>{comp}</>
				<Component {...pageProps} />
			</Provider>
		</ErrorBoundary>
	)
	// }

	// return (
	// 	<Provider store={store}>
	// 		<Component {...pageProps} />
	// 	</Provider>
	// )
}

export default MyApp
