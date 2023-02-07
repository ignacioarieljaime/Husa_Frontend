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
				<Script>
					{`
					window.hasChat = false
(function () {
    var w = window; var d = document;
    if (w.Velaro) { return; }
    var v = function () { return v.c(arguments) };
    v.q = []; v.c = function (args) { v.q.push(args) }; w.Velaro = v;
    v.endpoints = {
        mainApi: 'https://api-main-us-east.velaro.com/',
        cdn: 'https://cdn-us-east.velaro.com/'
    };

    w.addEventListener('load', function () {
        var s = d.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = v.endpoints.cdn + 'widgets/shim';
        var x = d.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
    });

    Velaro('boot', { 
        siteId:${process.env.NEXT_PUBLIC_VELARO_ID},
        groupId: 0,
        // customVars are optional.
        customVars: {
            exampleKey1: 'exampleValue1',
            exampleKey2: 'exampleValue2'
        }
    });

}());`}
				</Script>
			</body>
		</Html>
	)
}
