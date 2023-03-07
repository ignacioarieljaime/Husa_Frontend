import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
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
				<link rel='manifest' href='/favicon/site.webmanifest'></link>
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`
					}}></script>
			</Head>
			<body>
				{' '}
				<Main />
				<NextScript />
				{/* <script src='//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js'></script> */}
				{/* <Script
					security='lazyOnload'
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}></Script>
				<Script security='lazyOnload'>{`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`}</Script> */}
				<noscript
					dangerouslySetInnerHTML={{
						__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}
height="0" width="0" style="display:none;visibility:hidden"></iframe>`
					}}></noscript>
			</body>
		</Html>
	)
}
