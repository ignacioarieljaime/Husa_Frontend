import CompareModal from 'components/page/Product/CompareModal'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getSettingApi } from 'services/cxm'

function Layout({ children, meta, title }) {
	const router = useRouter()

	useEffect(() => {
		getSetting()
	}, [])

	const getSetting = async () => {
		try {
			let response = await getSettingApi()

			console.log(response.data.data)
		} catch (error) {
			console.log(error)
		}
	}
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
			<section className={`layout ${title}`}>
				<ToastContainer />
				<> {children}</>
			</section>

			<CompareModal />
		</>
	)
}

export default Layout
