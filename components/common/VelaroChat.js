import React, { useEffect } from 'react'
import * as Velaro from '@velaro/visitor-chat'

const VelaroChat = () => {
	Velaro.boot({
		siteId: process.env.NEXT_PUBLIC_VELARO_ID,
		groupId: 0,
		customVars: {
			exampleKey1: 'exampleValue1',
			exampleKey2: 'exampleValue2'
		}
	})

	return <div></div>
}

export default VelaroChat
