import Head from 'next/head'
import React from 'react'
import Footer from '../Footer'
import Header from '../Header/Header'

function Layout({ children }) {
	return (
		<>
			<Head>
				<title>تست</title>
			</Head>
			<section>
				<Header />
				{children}
				<Footer />
			</section>
		</>
	)
}

export default Layout
