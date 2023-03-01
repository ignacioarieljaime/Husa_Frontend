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
				{/* <script src='//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js'></script> */}
				<Script
					security='lazyOnload'
					src='https://www.googletagmanager.com/gtag/js?id=G-J0M7EGP1BP'></Script>
				<Script security='lazyOnload'>{`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-J0M7EGP1BP');`}</Script>
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
