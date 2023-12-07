// component
import ErrorBoundary from 'components/common/ErrorBoundary/ErrorBoundary'

// redux
import { Provider } from 'react-redux'
import { store } from 'redux/store'

// style
import 'styles/components/page/ULEDX/css/1.css'
import 'styles/components/page/ULEDX/css/2.css'
import 'styles/components/page/ULEDX/css/3.css'
import 'styles/components/page/ULEDX/css/4.css'
import 'styles/components/page/ULEDX/global.scss'
import 'styles/App.scss'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
	const [comp, setComp] = useState(<></>)
	const router = useRouter()

	useEffect(() => {
		const load = async () => {
			const velaroGenerator = (await import('../components/common/VelaroChat'))
				.default
			setComp(velaroGenerator)
		}

		load()

		router.events.on('routeChangeComplete', window.loadHash)
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
