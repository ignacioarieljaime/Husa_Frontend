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
				<Script
					security='lazyOnload'
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM_ID}`}></Script>
				<Script security='lazyOnload'>{`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.NEXT_PUBLIC_GTM_ID}');`}</Script>
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
