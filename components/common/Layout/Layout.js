import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

function Layout({ children, meta }) {
	const router = useRouter()
	return (
		<>
			<Head>
				<title>hisense</title>

				<meta name='og:url' content={router.route} />
				{meta.map(item =>
					item.rel === 'blank' ? (
						<meta name={item.name} content={item.content} />
					) : (
						<meta name={`og:${item.name}`} content={item.content} />
					)
				)}
			</Head>
			<section>
				{children}
			</section>
		</>
	)
}

export default Layout
