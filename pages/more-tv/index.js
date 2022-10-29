import Layout from 'components/common/Layout/Layout'
import axios from 'axios'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('components/common/Header/Header'))
const MoreTvHead = dynamic(() => import('components/page/MoreTv/MoreTvHead'))
const MoreTvBox = dynamic(() => import('components/page/MoreTv/MoreTvBox'))
const MoreTvVideoBox = dynamic(() =>
	import('components/page/MoreTv/MoreTvVideoBox')
)
const MoreTvAmericaBox = dynamic(() =>
	import('components/page/MoreTv/MoreTvAmericaBox')
)
const MoreTvLessTalk = dynamic(() =>
	import('components/page/MoreTv/MoreTvLessTalk')
)
const MoreTvHisensePromise = dynamic(() =>
	import('components/page/MoreTv/MoreTvHisensePromise')
)
const MoreTvGrabSlider = dynamic(() =>
	import('components/page/MoreTv/MoreTvGrabSlider')
)
const MoreTvLessTalkForm = dynamic(() =>
	import('components/page/MoreTv/MoreTvLessTalkForm')
)
const MoreTvExperts = dynamic(() =>
	import('components/page/MoreTv/MoreTvExperts')
)
const Subscribe = dynamic(() => import('components/common/Subscribe'))
const Footer = dynamic(() => import('components/common/Footer'))

function Index200({ pim, data }) {
	return (
		<Layout
			title={'More TV'}
			meta={[
				{ rel: 'blank', name: 'title', content: 'More TV' },
				{ rel: 'blank', name: 'description', content: null },
				{
					rel: 'property="og:site_name"',
					name: 'property="og:site_name"',
					content: 'Hisense USA'
				},
				{
					rel: 'property="og:title"',
					name: 'property="og:title"',
					content: 'More TV'
				},
				{
					rel: 'property="og:description"',
					name: 'property="og:description"',
					content: null
				},
				{
					rel: 'property="og:image"',
					name: 'property="og:image"',
					content: null
				},
				{
					rel: 'property="og:url"',
					name: 'property="og:url"',
					content: 'https://hisense-usa.com/more-tv'
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
				}
			]}>
			<section>
				{data && data.length > 0 && data[0]?.structure ? (
					<Header data={data[0]} />
				) : null}{' '}
				{data && data.length > 0 && data[1]?.structure ? (
					<MoreTvHead data={data[1]} />
				) : null}{' '}
				{data && data.length > 0 && data[2]?.structure ? (
					<MoreTvBox data={data[2]} />
				) : null}{' '}
				{data && data.length > 0 && data[3]?.structure ? (
					<MoreTvVideoBox data={data[3]} />
				) : null}{' '}
				{data && data.length > 0 && data[4]?.structure ? (
					<MoreTvAmericaBox data={data[4]} />
				) : null}{' '}
				{data && data.length > 0 && data[5]?.structure ? (
					<MoreTvLessTalk data={data[5]} />
				) : null}{' '}
				{data && data.length > 0 && data[6]?.structure ? (
					<MoreTvHisensePromise data={data[6]} />
				) : null}{' '}
				{data && data.length > 0 && data[7]?.structure ? (
					<MoreTvGrabSlider data={data[7]} />
				) : null}{' '}
				{data && data.length > 0 && data[8]?.structure ? (
					<MoreTvLessTalkForm data={data[8]} />
				) : null}{' '}
				{data && data.length > 0 && data[9]?.structure ? (
					<MoreTvExperts data={data[9]} />
				) : null}{' '}
				{data && data.length > 0 && data[10]?.structure ? (
					<Subscribe data={data[10]} />
				) : null}{' '}
				{data && data.length > 0 && data[11]?.structure ? (
					<Footer data={data[11]} />
				) : null}
			</section>
		</Layout>
	)
}

export async function getServerSideProps(context) {
	console.log('send ssr request')
	let data = await axios
		.get('https://imcxm.dev-api.hisenseportal.com/api/husa/getPageInfo/200')
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

export default Index200
