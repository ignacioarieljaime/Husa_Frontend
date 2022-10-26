import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Layout({ children, meta, title }) {
	const router = useRouter()
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='viewport' />
				<meta name='og:url' content={router.route} />
				{meta &&
					meta.map(item =>
						item.rel === 'blank' ? (
							<meta name={item.name} content={item.content} />
						) : (
							<meta property={`og:${item.name}`} content={item.content} />
						)
					)}
			</Head>
			<section>
				<ToastContainer />
				<> {children}</>
			</section>
		</>
	)
}

export default Layout
