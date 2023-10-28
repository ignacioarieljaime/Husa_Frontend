import Script from 'next/script'
import React, { useState, useEffect } from 'react'

export default function VelaroChatBox() {
	useEffect(() => {
		const script = document.createElement('script')
		script.setAttribute('id', 'live_chat_cicada')
		script.setAttribute('type', 'text/javascript')
		script.innerHTML = `function getSourceId() {
			var sourceId = "SID20230811P001";
			return sourceId;
			}
			(function(w, d, s, u, i) {
			w.CicadaChat = function(c) { w.CicadaChat._.push(c) }; w.CicadaChat._ = []; w.CicadaChat.url = u;
			var h = d.getElementsByTagName(s)[0], j = d.createElement(s);
			j.async = true; j.src = 'https://hisense.livechat.prod.cicadaspeech.net/livechat/livechat.min.js?_=' + Math.random();
			CicadaChat(function() {this.setSourceId({id: i});});
			h.parentNode.insertBefore(j, h);
			})(window, document, 'script', 'https://hisense.livechat.prod.cicadaspeech.net/install', getSourceId());`

		if (!document.getElementById('live_chat_cicada'))
			document.getElementById('main_body').appendChild(script)

		return () => document.getElementById('main_body').removeChild(script)
	})

	// return (
	// 	<Script id='chat-script' strategy='afterInteractive'>
	// 		{`function getSourceId() {
	// 					var sourceId = 'SID20230811P001'
	// 					return sourceId
	// 				}
	// 				;(function (w, d, s, u, i) {
	// 					w.CicadaChat = function (c) {
	// 						w.CicadaChat._.push(c)
	// 					}
	// 					w.CicadaChat._ = []
	// 					w.CicadaChat.url = u
	// 					var h = d.getElementsByTagName(s)[0],
	// 						j = d.createElement(s)
	// 					j.async = true
	// 					j.src =
	// 						'https://hisense.livechat.prod.cicadaspeech.net/livechat/livechat.min.js?_=' +
	// 						Math.random()
	// 					CicadaChat(function () {
	// 						this.setSourceId({ id: i })
	// 					})
	// 					h.parentNode.insertBefore(j, h)
	// 				})(
	// 					window,
	// 					document,
	// 					'script',
	// 					'https://hisense.livechat.prod.cicadaspeech.net/install',
	// 					getSourceId()
	// 				)`}
	// 	</Script>
	// )
}
