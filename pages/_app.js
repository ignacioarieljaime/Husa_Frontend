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
				<Script id='google-tag-manager' strategy='afterInteractive'>
					{`
					(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
      `}
				</Script>
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
