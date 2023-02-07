import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

function VelaroChatBox() {
	const router = useRouter()
	useEffect(() => {
		if (router.pathname.includes('contact')) {
			window.hasChat = true
		}
		return () => {
			window.hasChat = false
		}
	}, [])

	return <></>
}

export default VelaroChatBox
