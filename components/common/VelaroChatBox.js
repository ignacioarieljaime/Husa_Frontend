import Script from 'next/script'
import React from 'react'

function VelaroChatBox() {
	return (
		<Script>
			{`
    (function () {
        var w = window; var d = document;
        if (w.Velaro) { return; }
        var v = function () { return v.c(arguments) };
        v.q = []; v.c = function (args) { v.q.push(args) }; w.Velaro = v;
        v.endpoints = {
            mainApi: 'https://api-main-us-east.velaro.com/',
            cdn: 'https://eastprodcdn.azureedge.net/'
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
            siteId: ${process.env.NEXT_PUBLIC_VELARO_ID},
            groupId: 0,
            // CustomVars are optional.
            // These are only available with some subscriptions.
            customVars: {
                exampleKey1: 'exampleValue1',
                exampleKey2: 'exampleValue2'
            }
        });
    }());`}
		</Script>
	)
}

export default VelaroChatBox
