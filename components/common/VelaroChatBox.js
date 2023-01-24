import { useRouter } from 'next/router'
import Script from 'next/script'
import React, { useEffect, useState } from 'react'

function VelaroChatBox() {
	useEffect(() => {
		window.hasChat = true
		return () => {
			window.hasChat = false
		}
	}, [])

	return <></>
}

export default VelaroChatBox
