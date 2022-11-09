import Layout from 'components/common/Layout/Layout'
import axios from 'axios'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const ProductsBanner = dynamic(() =>
	import('components/page/Products/ProductsBanner')
)
const ProductsGrid = dynamic(() =>
	import('components/page/Products/ProductsGrid')
)

function Index4({ pim, data }) {
	const router = useRouter()

	useEffect(() => {
		router.push('/tv-and-audio/televisions/all-tvs')
	}, [])

	return (
		<Layout
			title={'Products'}
			meta={[
				{ rel: 'blank', name: 'title', content: 'Products' },
				{ rel: 'blank', name: 'description', content: 'Hisense USA' },
				{
					rel: 'property="og:site_name"',
					name: 'property="og:site_name"',
					content: 'Hisense USA'
				},
				{
					rel: 'property="og:title"',
					name: 'property="og:title"',
					content: 'Products'
				},
				{
					rel: 'property="og:description"',
					name: 'property="og:description"',
					content: 'Hisense USA'
				},
				{
					rel: 'property="og:image"',
					name: 'property="og:image"',
					content: null
				},
				{
					rel: 'property="og:url"',
					name: 'property="og:url"',
					content: 'https://hisense-usa.com/products'
				},
				{
					rel: 'property="og:type"',
					name: 'property="og:type"',
					content: 'website'
				},
				{
					rel: 'property="og:locale"',
					name: 'property="og:locale"',
					content: 'en_US'
				},
				{ rel: 'blank', name: null, content: null },
				{ rel: 'blank', name: null, content: null }
			]}>
			<section>
				{data && data.length > 0 && data[0]?.structure ? (
					<ProductsBanner data={data[0]} />
				) : null}{' '}
				{data && data.length > 0 && data[1]?.structure ? (
					<ProductsGrid data={data[1]} />
				) : null}
			</section>
		</Layout>
	)
}

export async function getServerSideProps(context) {
	console.log('send ssr request')
	let data = await axios
		.get('https://imcxm.dev-api.hisenseportal.com/api/husa/getPageInfo/4')
		.then(response => {
			console.log('get ssr data')
			return response.data.widgets
		})
		.catch(error => {
			console.error('Error:', error)
			return null
		})

	return { props: { data } }
}

export default Index4
