import { Html, Head, Main, NextScript } from 'next/document'
import { useSelector } from 'react-redux'

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/favicon/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					href='/favicon/favicon-32x32.png'
					sizes='32x32'
				/>
				<link
					rel='icon'
					type='image/png'
					href='/favicon/favicon-16x16.png'
					sizes='16x16'
				/>

				<link rel='shortcut icon' href='/favicon/favicon.ico' />
				<link rel="manifest" href="/favicon/site.webmanifest"></link>
			</Head>
			<body>
				{' '}
				<Main />
				<NextScript />
				<script src='//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js'></script>
				<noscript
					dangerouslySetInnerHTML={{
						__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;" />`
					}}
				/>
			</body>
		</Html>
	)
}
