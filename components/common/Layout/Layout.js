import Head from 'next/head'
import React from 'react'
import Footer from '../Footer'
import Header from '../Header/Header'
import SendNewsToEmailBox from '../SendNewsToEmailBox'

function Layout({ children }) {
	return (
		<>
			<Head>
				<title>hisense</title>
			</Head>
			<section>
				<Header />
				{children}
				<SendNewsToEmailBox />
				<Footer />
			</section>
		</>
	)
}

export default Layout
